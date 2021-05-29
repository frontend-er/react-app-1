const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let initialState = {
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
};

const profilePageReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {
         let post = {
            id: '5',
            name: state.newPostValue,
            likesOnPost: 11
         }
         return {
            ...state,
            posts: [...state.posts, post],
            newPostValue: ''
         }
      }
      case UPDATE_POST: {
         return {
            ...state,
            newPostValue: action.newValue
         }
      }

      default:
         return state;
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

export default profilePageReducer;