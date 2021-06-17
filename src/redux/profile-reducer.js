import {
   usersAPI,
   profileAPI
} from "./../components/api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';

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

   profile: null,

   status: ''
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
      case SET_USER_PROFILE_STATUS: {
         return {
            ...state,
            status: action.status
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


export const setUserProfile = (profile) => ({
   type: SET_USER_PROFILE,
   profile
})

export const getUserProfile = (userId) => (dispatch) => {
   usersAPI.getUsersData(userId)
      .then(response => {
         dispatch(setUserProfile(response.data));
      });

}


export const setUserProfileStatus = (status) => ({
   type: SET_USER_PROFILE_STATUS,
   status
})


export const getUserProfileStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId)
      .then(response => {
         dispatch(setUserProfileStatus(response.data));
      });
}


export const updateUserProfileStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status)
      .then(response => {
         if(response.resultCode === 0) {
            debugger;
            dispatch(setUserProfileStatus(response.data));
         }
      });
}



export default profilePageReducer;