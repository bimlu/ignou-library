import { useMutation } from "@apollo/client";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { NotificationType } from "constants/NotificationType";
import { CREATE_COMMENT } from "graphql/comment";
import { GET_FOLLOWED_POSTS, GET_POST, GET_POSTS } from "graphql/post";
import { GET_AUTH_USER, GET_USER } from "graphql/user";
import { useNotifications } from "hooks/useNotifications";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { useStore } from "store";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

/**
 * Creates a comment for a post
 */
const CreateComment = ({ post, focus }) => {
  const classes = useStyles();
  const [{ auth }] = useStore();
  const notification = useNotifications();
  const [comment, setComment] = useState("");
  const buttonEl = useRef(null);
  const TextareaEl = useRef(false);
  const [createComment, { loading }] = useMutation(CREATE_COMMENT, {
    refetchQueries: [
      { query: GET_FOLLOWED_POSTS, variables: { userId: auth.user && auth.user.id } },
      { query: GET_USER, variables: { userId: auth.user && auth.user.id } },
      { query: GET_AUTH_USER },
      { query: GET_POSTS, variables: { authUserId: auth.user && auth.user.id } },
      { query: GET_POST, variables: { id: post.id } },
    ],
  });

  useEffect(() => {
    focus && TextareaEl.current.focus();
  }, [focus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.user) {
      return;
    }

    const { data } = await createComment({
      variables: { input: { comment, author: auth.user.id, postId: post.id } },
    });
    setComment("");

    // Create notification on comment
    if (auth.user.id !== post.author.id) {
      notification.create({
        user: post.author,
        postId: post.id,
        notificationType: NotificationType.COMMENT,
        notificationTypeId: data.createComment.id,
      });
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      buttonEl.current.click();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Input
          id="comment"
          placeholder="Add a comment..."
          onKeyDown={onEnterPress}
          ref={TextareaEl}
          multiline
          fullWidth
          rows={1}
          rowsMax={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          variant="filled"
          className={classes.input}
          disabled={loading}
        />

        <IconButton type="submit" color={comment ? "primary" : "default"} ref={buttonEl} disabled={!comment || loading}>
          <SendIcon />
        </IconButton>
      </form>

      {loading && <LinearProgress color="primary" />}
    </>
  );
};

CreateComment.propTypes = {
  post: PropTypes.object.isRequired,
  focus: PropTypes.bool,
};

export default CreateComment;
