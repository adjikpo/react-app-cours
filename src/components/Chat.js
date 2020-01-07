import React, {useState} from "react";
import PropTypes from 'prop-types';
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const handleMessageSubmit = message => {
    const newMessage = { message: message, username: "Jefe" };
    console.log(messages)
    setMessages([...messages, newMessage]);
  
  };

    return (
        <div>
          <div>Chat</div>
          <MessageList messages={messages} />
          <MessageBar handleMessageSubmit={handleMessageSubmit}/>
        </div>
      );
};

MessageBar.propTypes = {
  handleMessageSubmit: PropTypes.func.isRequired
} 

export default Chat;