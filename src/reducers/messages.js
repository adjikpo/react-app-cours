import {ADD_MESSAGE,GET_MESSAGES} from '../actions/messages';

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

        default:
            return state
    }
}