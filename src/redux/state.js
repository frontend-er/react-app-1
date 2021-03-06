import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";


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

      sideBarPage: {},


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

      this._state.profilePage = profilePageReducer(this._state.profilePage, action);
      this._state.messagesPage = dialogsPageReducer(this._state.messagesPage, action);


      this._renderComponents(this._state);
   }
}





export default store;