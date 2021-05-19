let renderComponents = () => {
   console.log("render");
};

let state = {

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



}
window.state = state;

export let addMessage = () => {
   let message = {
      id: '5',
      name: state.messagesPage.defaultMessage,
   }

   state.messagesPage.messages.push(message);
   state.messagesPage.defaultMessage = '';
   renderComponents(state);
}

export let updateMessage = (newValue) => {
   state.messagesPage.defaultMessage = newValue;
   renderComponents(state);
}

export const update = (observer) => {
   renderComponents = observer;
}

export let addPost = () => {
   let post = {
      id: '5',
      name: state.profilePage.newPostValue,
      likesOnPost: 11
   }

   state.profilePage.posts.push(post);
   state.profilePage.newPostValue = '';

   renderComponents(state);
}

export let updatePost = (newValue) => {
   state.profilePage.newPostValue = newValue;
   renderComponents(state);
}

export default state;