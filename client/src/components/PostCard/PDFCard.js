import { useMutation } from "@apollo/client";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DoneIcon from "@material-ui/icons/Done";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GetAppIcon from "@material-ui/icons/GetApp";
import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Skeleton from "@material-ui/lab/Skeleton";
import clsx from "clsx";
import Comment from "components/Comment";
import CreateComment from "components/CreateComment";
import Like from "components/Like";
// import { INCREMENT_DOWNLOADS_COUNT, INCREMENT_VIEWS_COUNT } from 'graphql/post';
import { EXPLORE_PAGE_CARDS_LIMIT, HOME_PAGE_POSTS_LIMIT, PROFILE_PAGE_POSTS_LIMIT } from "constants/DataLimit";
import { DELETE_POST, GET_COLLEGE_PROGRAMME_COURSE_POSTS, GET_FOLLOWED_POSTS } from "graphql/post";
import { GET_AUTH_USER, GET_USER_POSTS } from "graphql/user";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { generatePath, Link, useLocation, useParams } from "react-router-dom";
import * as Routes from "routes";
import { useStore } from "store";
import { timeAgo } from "utils/date";
import PostCardOption from "./PostCardOption";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
    // maxWidth: 345,
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  actionArea: {
    padding: theme.spacing(1),
    background: theme.palette.action.hover,
    "& > *": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  comments: {
    display: "flex",
    flexDirection: "column",
  },
  optionButton: {
    width: "60px",
  },
  button: {
    marginRight: theme.spacing(3),
  },
  chipContainer: {
    padding: theme.spacing(1),
    "& > *": {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  dateChip: {
    background: theme.palette.info.light,
  },
  pdfChip: {
    // background: theme.palette.warning.main,
  },
  newChip: {
    background: theme.palette.warning.light,
  },
  populerChip: {
    background: theme.palette.error.light,
  },
  verifiedChip: {
    background: theme.palette.success.light,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    fontSize: theme.spacing(1.2),
  },
}))(Badge);

const PostCard = ({
  author,
  pdfPublicId,
  imagePublicIds,
  pdf,
  comments,
  title,
  createdAt,
  likes,
  postId,
  cardDataLoading,
}) => {
  const { collegeId, programmeId, courseId } = useParams();
  const classes = useStyles();
  const { pathname, search, hash } = useLocation();
  const [{ auth }] = useStore();
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const fileExt = pdf && pdf.split(".").pop();

  const [deletePost, { loading }] = useMutation(DELETE_POST, {
    refetchQueries: auth.user && [
      {
        query: GET_FOLLOWED_POSTS,
        variables: {
          userId: auth.user.id,
          skip: 0,
          limit: HOME_PAGE_POSTS_LIMIT,
        },
      },
      { query: GET_AUTH_USER },
      {
        query: GET_USER_POSTS,
        variables: {
          userId: auth.user.id,
          skip: 0,
          limit: PROFILE_PAGE_POSTS_LIMIT,
        },
      },
      {
        query: GET_COLLEGE_PROGRAMME_COURSE_POSTS,
        variables: {
          collegeId: collegeId,
          programmeId: programmeId,
          courseId: courseId,
          skip: 0,
          limit: EXPLORE_PAGE_CARDS_LIMIT,
        },
      },
    ],
  });

  const closeOption = () => setIsOptionOpen(false);

  const openOption = () => setIsOptionOpen(true);

  const handleDelete = async () => {
    if (loading) return;

    try {
      await deletePost({
        variables: { input: { id: postId, pdfPublicId, imagePublicIds } },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCreateComment = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  return (
    <Card className={classes.card}>
      {loading && <LinearProgress color="primary" />}

      {cardDataLoading ? null : (
        <PostCardOption
          postId={postId}
          open={isOptionOpen}
          handleClose={closeOption}
          author={author}
          deletePost={handleDelete}
          link={`${window.location.href}`}
        />
      )}

      <CardHeader
        avatar={
          cardDataLoading ? (
            <Skeleton animation="wave" variant="circle" width={40} height={40} />
          ) : (
            <Avatar
              aria-label="avatar"
              alt={author.fullName}
              src={author.image || "show first letter of fullName"}
              component={Link}
              to={generatePath(Routes.USER_PROFILE, { id: author.id })}
            />
          )
        }
        action={
          cardDataLoading ? null : (
            <IconButton
              aria-label="settings"
              aria-haspopup="true"
              onClick={openOption}
              disabled={loading}
              className={classes.optionButton}
            >
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          cardDataLoading ? (
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
          ) : (
            author.fullName
          )
        }
        subheader={cardDataLoading ? <Skeleton animation="wave" height={10} width="40%" /> : timeAgo(createdAt)}
      />

      <div className={classes.chipContainer}>
        <Chip className={classes.dateChip} label="Jan-2021" />
        <Chip className={classes.pdfChip} label={fileExt.toUpperCase()} />
        <Chip className={classes.newChip} label="New" />
        {likes.length > 20 && <Chip className={classes.populerChip} label="Populer" />}
        {likes.length > 10 && <Chip className={classes.verifiedChip} icon={<DoneIcon />} />}
      </div>

      {cardDataLoading ? (
        <Skeleton animation="wave" variant="rect" className={classes.actionArea} />
      ) : (
        <CardActionArea className={classes.actionArea}>
          <Typography variant="caption" color="textSecondary">
            {title}
          </Typography>
        </CardActionArea>
      )}

      {cardDataLoading ? (
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      ) : (
        <CardActions disableSpacing>
          <Like user={author} postId={postId} likes={likes} StyledBadge={StyledBadge} buttonClass={classes.button} />

          <IconButton
            component={Link}
            to={auth.user ? `${pathname}${search}${hash}` : Routes.AUTH}
            aria-label="comment"
            onClick={toggleCreateComment}
            className={classes.button}
          >
            <StyledBadge badgeContent={comments.length} max={9999}>
              <MessageIcon />
            </StyledBadge>
          </IconButton>

          <a href={pdf} download>
            <IconButton aria-label="download" className={classes.button}>
              <GetAppIcon />
            </IconButton>
          </a>

          <IconButton
            component={Link}
            to={auth.user ? `${pathname}${search}${hash}` : Routes.AUTH}
            className={clsx(classes.expand, {
              [classes.expandOpen]: isCommentOpen,
            })}
            onClick={toggleCreateComment}
            aria-expanded={isCommentOpen}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      )}

      {cardDataLoading ? null : (
        <Collapse in={isCommentOpen} timeout="auto" unmountOnExit>
          <CardContent>
            <CreateComment post={{ id: postId, author }} focus={isCommentOpen} />
          </CardContent>
          <CardContent>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} postId={postId} postAuthor={author} />
            ))}
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
};

PostCard.propTypes = {
  author: PropTypes.object,
  imagePublicId: PropTypes.string,
  imagePublicIds: PropTypes.array,
  title: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.array,
  likes: PropTypes.array,
  comments: PropTypes.array,
  createdAt: PropTypes.string,
  postId: PropTypes.string,
  cardDataLoading: PropTypes.bool,
};

export default PostCard;
