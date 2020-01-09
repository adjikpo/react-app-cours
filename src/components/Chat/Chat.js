import React from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import { useSelector } from "react-redux";
import {Redirect} from "react-router-dom"

const Chat = () => {
  const messages = useSelector(state => state.messages);
  console.log(messages)

  const username = useSelector(state => state.settings.username)
  if(!username){
    console.log(username)
    return <Redirect to="/" /> ;
  }
  

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