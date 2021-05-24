const ADD_MESSAGE = 'ADD-MESSAGE';

const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsPageReducer = (state, action) => {

   switch (action.type) {
      case ADD_MESSAGE:
         let message = {
            id: '5',
            name: state.defaultMessage,
         }
         state.messages.push(message);
         state.defaultMessage = '';
         return state;
      case UPDATE_MESSAGE:
         state.defaultMessage = action.newValue;
         return state;
      default:
         return state;
   }
}


export const addMessageActionCreator = () => {
   return {
      type: ADD_MESSAGE
   }
}

export const updateMessageActionCreator = (text) => {
   return {
      type: UPDATE_MESSAGE,
      newValue: text
   }
}


export default dialogsPageReducer;