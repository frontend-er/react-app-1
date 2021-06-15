import {
   usersAPI
} from "./../components/api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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

   newPostValue: 'facebook',

   profile: null
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

      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
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

const setUserProfile = (profile) => ({
   type: SET_USER_PROFILE,
   profile
})

export const getUserProfile = (userId) => (dispatch) => {
   usersAPI.getUsersData(userId)
      .then(response => {
         dispatch(setUserProfile(response.data));
      });

}



export default profilePageReducer;