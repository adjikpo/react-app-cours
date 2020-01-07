import React from 'react';
import {MessageItem} from './MessageItem';

const MessageList = ({messages}) => {
    
  return (
    <ul>
        { messages.map((message, i) => {
          return (
              <MessageItem
                  key={i}
                  username={message.username} 
                  message={message.message}
              />
          )
      }) }
    
    </ul>
  );
      
}

export default MessageList;