import React, { useState } from 'react';
import {MessageItem} from './MessageItem';

const MessageList = () => {
  const [messages, setMessage] = useState([
    { user: 'Jefe', text: 'Welcome' },
  ]);
    
  return (
    <ul>
        { messages.map((message, i) => {
          return (
              <MessageItem
                  key={i}
                  username={message.user} 
                  message={message.text}
              />
          )
      }) }
    
    </ul>
  );
      
}

export default MessageList;