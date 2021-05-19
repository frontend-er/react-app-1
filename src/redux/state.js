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

   getState() {
      return this._state;
   },

   renderComponents() {
      console.log("render");
   },

   addMessage() {
      let message = {
         id: '5',
         name: this._state.messagesPage.defaultMessage,
      }

      this._state.messagesPage.messages.push(message);
      this._state.messagesPage.defaultMessage = '';
      this.renderComponents(this._state);
   },
   updateMessage(newValue) {
      this._state.messagesPage.defaultMessage = newValue;
      this.renderComponents(this._state);
   },



   update(observer) {
      this.renderComponents = observer;
   },

   addPost() {
      let post = {
         id: '5',
         name: this._state.profilePage.newPostValue,
         likesOnPost: 11
      }

      this._state.profilePage.posts.push(post);
      this._state.profilePage.newPostValue = '';

      this.renderComponents(this._state);
   },

   updatePost(newValue) {
      this._state.profilePage.newPostValue = newValue;
      this.renderComponents(this._state);
   }
}










window.store = store;
export default store;