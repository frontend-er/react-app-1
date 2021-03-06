import {
   usersAPI,
   profileAPI
} from "../components/api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';
const DELETE_POST = 'DELETE_POST'

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
      case  DELETE_POST: {
         return {
            ...state,
            posts: state.posts.filter(p => p.id !== action.id)
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

export const deletePost = (id) => {
   return {
      type: DELETE_POST,
      id
   }
}



export const setUserProfile = (profile) => ({
   type: SET_USER_PROFILE,
   profile
})

export const getUserProfile = (userId) => async (dispatch) => {
   let   response = await usersAPI.getUsersData(userId)
         dispatch(setUserProfile(response.data));

}


export const setUserProfileStatus = (status) => ({
   type: SET_USER_PROFILE_STATUS,
   status
})


export const getUserProfileStatus = (userId) => async  (dispatch) => {
   let   response = await  profileAPI.getStatus(userId)
         dispatch(setUserProfileStatus(response.data));
}


export const updateUserProfileStatus = (status) =>  async (dispatch) => {
   let response = await  profileAPI.updateStatus(status)
         if (response.resultCode === 0) {
            dispatch(setUserProfileStatus(response.data));
         }
}



export default profilePageReducer;