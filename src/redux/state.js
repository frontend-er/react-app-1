const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let store = {
   _state: {
      profilePage: {
         posts: [{
               id: 1,
               name: "newPost",
               likesOnPost: 12
            },
            {
               id: 2,
               name: "newPost 2 ",
               likesOnPost: 11
            },

         ],

         newPostValue: 'facebook'
      },

      messagesPage: {

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

         defaultMessage: 'Write your message:'
      },


      sideBar: {
         friends: [{
               id: "1",
               name: "Andrey",
               img: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg'
            },
            {
               id: "2",
               name: "Shasa",
               img: 'https://cdn2.vectorstock.com/i/1000x1000/13/76/icon-user-avatar-for-web-site-or-mobile-vector-4031376.jpg'

            },
            {
               id: "3",
               name: "Andrey",
               img: 'https://cdn2.vectorstock.com/i/1000x1000/13/76/icon-user-avatar-for-web-site-or-mobile-vector-4031376.jpg'

            }
         ]

      }



   },
   _renderComponents() {
      console.log("render");
   },

   getState() {
      return this._state;
   },

   update(observer) {
      this._renderComponents = observer;
   },

   dispatch(action) {
      if (action.type === ADD_POST) {
         let post = {
            id: '5',
            name: this._state.profilePage.newPostValue,
            likesOnPost: 11
         }

         this._state.profilePage.posts.push(post);
         this._state.profilePage.newPostValue = '';

         this._renderComponents(this._state);
      } else if (action.type === ADD_MESSAGE) {
         let message = {
            id: '5',
            name: this._state.messagesPage.defaultMessage,
         }

         this._state.messagesPage.messages.push(message);
         this._state.messagesPage.defaultMessage = '';
         this._renderComponents(this._state);
      } else if (action.type === UPDATE_POST) {
         this._state.profilePage.newPostValue = action.newValue;
         this._renderComponents(this._state);
      } else if (action.type === UPDATE_MESSAGE) {
         this._state.messagesPage.defaultMessage = action.newValue;
         this._renderComponents(this._state);
      }
   }
}


export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
}

export const updatePostActionCreator = (text) => {
   return {
      type: UPDATE_POST,
      newValue: text
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


window.store = store;
export default store;