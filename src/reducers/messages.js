import {ADD_MESSAGE,GET_MESSAGES,LOAD_MESSAGE_PENDING,LOAD_MESSAGE_SUCCESS,LOAD_MESSAGE_ERROR} from '../actions/messages';

const initialData = {
    messagesData: [
        { username: 'Bordjah', message: 'Suis la bonne voie Alexandre,  suis la lumière et fuis les ténèbres,  viens on t\'accepte dans notre communauté et on te pardonne t péchés widowsiens', sentAt:'2019-10-29T10:31:53.377Z'},
        { username: 'CrespyTender', message: 'Come to the light, brave warrior, Leave the darkness and turn the light on', sentAt:'2019-10-29T10:31:53.377Z'},
        { username: 'Bordjah', message: 'j\'avoue que c plus stylé en anglais',sentAt: '2019-10-29T10:31:53.377Z'},
        { username: 'CrespyTender', message: 'j\'avoue que c plus stylé en anglais',sentAt:'2019-10-29T10:31:53.377Z'},
        { username: 'Jefe', message: 'Listen @CrespyTender and @Bordjah, Linux is the holy grail', sentAt:'2019-10-29T10:31:53.377Z'}
    ]
};

export default (state= initialData, action) =>  {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
            }
        
        case ADD_MESSAGE:
            return {
                messagesData : [
                    ...state.messagesData, 
                    action.message
                ],
            }
        case LOAD_MESSAGE_PENDING:
            return {...state,};

        case LOAD_MESSAGE_SUCCESS:
            // const newData = (msg, index) =>(
            //     state.push(msg)
            // );
            // action.messages.forEach(newData);
            console.log(action.messages)
    
            return  {
                messagesData : [
                    ...state.messagesData, 
                    action.messages
                ],
            }

        case LOAD_MESSAGE_ERROR:
                return [...state.messagesData, {
                    message : action.error,
                username: "system",
                sentAt  : new Date(),
                }];

        default:
            return state
    }
}