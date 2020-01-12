import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from "../../actions/messages";
//import {ws} from '../../service/websocket'


const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
const MessageBar = () => {
    const dispatch = useDispatch();
    const [message, setMessage ]= useState('');
    const username = useSelector(state => state.settings.username)
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour:'numeric', minute:'numeric', second:'numeric' };
    const sentAt = new Date();

    
    const handleChange = (e) => { 
        setMessage(e.target.value);
    }
    const handleClick = () => {
         dispatch(addMessage({ username: username , message: message, sentAt: sentAt.toLocaleDateString('fr', options) }));
        setMessage('')
    };
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    }
    return (
        <div id='MessageBar'>
            <textarea 
                type="text" 
                name="message"
                value={message} 
                onChange={handleChange}
                onKeyPress={ handleEnter } />

            
            <Button 
            onClick={handleClick}>
                Envoyer
            </Button>

        </div>
    ) 
};

// MessageBar.propTypes = {
//     handleMessageSubmit: PropTypes.func.isRequired
// } 

export default MessageBar;