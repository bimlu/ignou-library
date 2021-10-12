import { useApolloClient, useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import { LoadingDots } from "components/Loading";
import { GET_MESSAGES, GET_MESSAGES_SUBSCRIPTION, UPDATE_MESSAGE_SEEN } from "graphql/messages";
import { GET_AUTH_USER, GET_CONVERSATIONS, GET_USER } from "graphql/user";
import PropTypes from "prop-types";
import React, { useCallback, useEffect } from "react";
import * as Routes from "routes";
import MessagesChatConversation from "./MessagesChatConversation";
import MessagesChatHeading from "./MessagesChatHeading";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
}));

/**
 * Messages chat wrapper
 */
const MessagesChat = ({ match, authUser }) => {
  const classes = useStyles();
  const { userId } = match.params;

  const client = useApolloClient();

  const { data, loading } = useQuery(GET_USER, {
    variables: { userId },
    skip: userId === Routes.NEW_ID_VALUE,
  });

  const {
    subscribeToMore,
    data: messages,
    loading: messagesLoading,
  } = useQuery(GET_MESSAGES, {
    variables: { authUserId: authUser.id, userId },
    skip: userId === Routes.NEW_ID_VALUE,
    fetchPolicy: "network-only",
  });

  const updateMessageSeen = useCallback(async () => {
    try {
      await client.mutate({
        mutation: UPDATE_MESSAGE_SEEN,
        variables: {
          input: {
            receiver: authUser.id,
            sender: userId,
          },
        },
        refetchQueries: () => [
          {
            query: GET_CONVERSATIONS,
            variables: { authUserId: authUser.id },
          },
          { query: GET_AUTH_USER },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  }, [authUser.id, client, userId]);

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: GET_MESSAGES_SUBSCRIPTION,
      variables: { authUserId: authUser.id, userId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        updateMessageSeen();

        const newMessage = subscriptionData.data.messageCreated;
        const mergedMessages = [...prev.getMessages, newMessage];

        return { getMessages: mergedMessages };
      },
    });

    return () => {
      unsubscribe();
    };
  }, [authUser.id, userId, subscribeToMore, updateMessageSeen]);

  useEffect(() => {
    if (userId !== Routes.NEW_ID_VALUE) {
      updateMessageSeen();
    }
  }, [userId, updateMessageSeen]);

  if (loading || messagesLoading) {
    return (
      <div className={classes.root}>
        <LoadingDots />
      </div>
    );
  }

  let chatUser = null;
  if (data && data.getUser) {
    chatUser = data.getUser;
  }

  return (
    <div className={classes.root}>
      <MessagesChatHeading match={match} chatUser={chatUser} />

      <MessagesChatConversation
        authUser={authUser}
        messages={messages ? messages.getMessages : []}
        chatUser={chatUser}
        data={messages}
        match={match}
      />
    </div>
  );
};

MessagesChat.propTypes = {
  match: PropTypes.object.isRequired,
  authUser: PropTypes.object.isRequired,
};

export default MessagesChat;
