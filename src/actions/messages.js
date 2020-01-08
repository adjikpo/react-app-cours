
export const ADD_MESSAGE = "ADD_MESSAGE";
export const GET_MESSAGES = "GET_MESSAGES";

export const getInitialMessages = () => {
    return{
        type: GET_MESSAGES,
    }
}

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
}