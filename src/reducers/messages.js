import {ADD_MESSAGE,GET_MESSAGES} from '../actions/messages';

const initialData = {
    messagesData: [
        { username: 'Bordjah', message: 'Suis la bonne voie Alexandre,  suis la lumière et fuis les ténèbres,  viens on t\'accepte dans notre communauté et on te pardonne t péchés widowsiens'},
        { username: 'CrespyTender', message: 'Come to the light, brave warrior, Leave the darkness and turn the light on'},
        { username: 'Bordjah', message: 'j\'avoue que c plus stylé en anglais'},
        { username: 'CrespyTender', message: 'j\'avoue que c plus stylé en anglais'},
        { username: 'Jefe', message: 'Listen @CrespyTender and @Bordjah, Linux is the holy grail'}
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

        default:
            return state
    }
}