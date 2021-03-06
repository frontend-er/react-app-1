const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {

   dialogs: [{
         id: '1',
         name: "Dimas",
         img: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg'
      },
      {
         id: "2",
         name: "Oleg",
         img: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg'
      },
      {
         id: "3",
         name: "Ann",
         img: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg'
      },
      {
         id: "4",
         name: "Sveta",
         img: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg'
      },

   ],

   messages: [{
         id: '1',
         name: "Hi"
      },
      {
         id: "2",
         name: "Hellow oleg"
      },
      {
         id: "3",
         name: "how are u?"
      },
      {
         id: "4",
         name: "Sveta"
      },

   ],


}

const dialogsPageReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_MESSAGE: {
         let message = {
            id: '5',
            name: action.newMessage,
         }
         return {
            ...state,
            messages: [...state.messages, message]
         };
      }



      default:
         return state;
   }
}


export const addMessageActionCreator = (newMessage) => {
   return {
      type: ADD_MESSAGE,
      newMessage
   }
}




export default dialogsPageReducer;