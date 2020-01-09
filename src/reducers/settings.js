import {LOGIN} from "../actions/settings"

const initialUsername = {
    username: null
}

export default (state= initialUsername, action) =>  {
    switch (action.type) {
        case LOGIN:
            return {
                username: action.username
            }
    

        default:
            return state
    }
}