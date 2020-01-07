import React from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";

const Chat = () => {

    return (
        <div>
          <div>Chat</div>
          <MessageList />
          <MessageBar />
        </div>
      );
};

export default Chat;