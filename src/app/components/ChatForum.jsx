
"use client";

import React, { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";

const ChatForum = ({ clerkUser, slug }) => {
  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const apiKey = "w3abnkwk68fm";
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: "Let's Discuss about " + capitalize(slug),
      // members: [userId],
    });

    setChannel(channel);
    // channel.addMembers([userId]);
  }, [client]);

  if (!client || !channel) return <div>Setting up chat...</div>;

  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <Chat client={client}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};

export default ChatForum;
