import {store} from "../index";
import {addMessage} from "../actions/messages";

export const ws = new WebSocket('ws://srrj6.sse.codesandbox.io');

///const actions = [];

ws.onopen = () => {
    // on connecting, do nothing but log it to the console
    console.log('connected')
};

ws.onmessage = evt => {
    // listen to data sent from the websocket server
    const message = JSON.parse(evt.data);

    store.dispatch(addMessage(message));
    
};

