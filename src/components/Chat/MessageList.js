import React from 'react';
//import MessageContainer from "../../containers/Messages";
import {MessageItem} from './MessageItem';
import { useSelector } from 'react-redux';
//import { loadMessage } from '../../actions/messages';

const MessageList = () => {
    
  const messages = useSelector(state =>
    state.messages.messagesData)
  //const dispatch = useDispatch();
//const messages = useSelector(state => state.messageList);

    // useEffect(() => {
    //     dispatch(loadMessage())
    // }, [dispatch]);

  return (
    <ul>
        { messages.map((message, i) => {
          return (
              <MessageItem
                  key={i}
                  username={message.username} 
                  message={message.message}
                  sentAt={message.sentAt}
              />
          )
      }) }
    
    </ul>
  )
      
}

export default MessageList;