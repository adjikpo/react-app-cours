import React from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import { useSelector } from "react-redux";

const Chat = () => {
  const messages = useSelector(state => state.messages.messages);
console.log(messages)
    return (
        <div>
          <div>Chat</div>
          <MessageList messages={messages}/>
          <MessageBar />

        </div>
      );
};

// MessageBar.propTypes = {
//   handleMessageSubmit: PropTypes.func.isRequired
// } 

export default Chat;