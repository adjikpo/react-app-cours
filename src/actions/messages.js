import axios from 'axios';
import {ws} from "../service/websocket";

const URL_API = "https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages";


export const ADD_MESSAGE = "ADD_MESSAGE";
export const GET_MESSAGES = "GET_MESSAGES";
export const LOAD_MESSAGE_PENDING   = "LOAD_MESSAGE_PENDING";
export const LOAD_MESSAGE_SUCCESS   = "LOAD_MESSAGE_SUCCESS";
export const LOAD_MESSAGE_ERROR     = "LOAD_MESSAGE_ERROR";

export const getInitialMessages = () => {
    return{
        type: GET_MESSAGES,
    }
}

export const addMessage = (message) => {

        const action = {
            type: ADD_MESSAGE,
            message
        }
        ws.send(JSON.stringify(action));

        return action  
}

// export const loadMessage = () => {
//     return (dispatch) => {
//         dispatch(
//             {
//                 type: LOAD_MESSAGE_PENDING
//             })
//         return axios.get(URL_API)
//             .then(json => {
//                 dispatch(
//                     {
//                         type: LOAD_MESSAGE_SUCCESS, 
//                         messages: json.data
//                     })
//             })
//             .catch(err => {
//                 dispatch(
//                     {
//                         type: LOAD_MESSAGE_ERROR, 
//                         error: err
//                     })
//                 })
//     }
// };