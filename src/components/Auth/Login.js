import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/settings';
import { useHistory } from 'react-router-dom';

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


const Login = () => {
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => { 
        setUsername(e.target.value);
    }
    const handleClick = (e) => {
        if (username){
            e.preventDefault()
            alert('Username : ' + username )
            dispatch(login( username ))
            history.push("/Chat");
            setUsername('')
        }
        
    };
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleClick(e);
        }
    }
    return (
        <div id='MessageBar'>
            <h1>Login</h1>

            <form onClick={handleClick}>
                <label>
                    Username :
                    
                    <input type="text" 
                    name="username"
                    value={username} 
                    onChange={handleChange}
                    onKeyPress={ handleEnter } />
                  
                </label>
                <Button>
                   Envoyer
                </Button>
                
            </form>
        </div>
    ) 
}

export default Login;