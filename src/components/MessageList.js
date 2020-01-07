import React, { Component} from 'react';
import {MessageItem} from './MessageItem'

class MessageList extends Component {

    render() {
        return (
          <ul>
            <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          </ul>
        );
      }
}

export default MessageList;