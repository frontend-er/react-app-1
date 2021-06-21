import {
   usersAPI,
   profileAPI
} from "../components/api/api";

const ADD_POST = 'ADD-POST';
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


   profile: null,

   status: ''
};

const profilePageReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {
         let post = {
            id: '5',
            name: action.newPost,
            likesOnPost: 11
         }
         return {
            ...state,
            posts: [...state.posts, post],
            newPostValue: ''
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


export const addPostActionCreator = (newPost) => {
   return {
      type: ADD_POST,
      newPost
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
         if (response.resultCode === 0) {
            dispatch(setUserProfileStatus(response.data));
         }
      });
}



export default profilePageReducer;