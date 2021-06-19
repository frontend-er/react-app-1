import {
   authAPI,
   usersAPI
} from "../components/api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {

   userID: null,
   login: null,
   email: null,
   isAuth: false,
   photo: ""
};



const authReducer = (state = initialState, action) => {


   switch (action.type) {
      case SET_USER_DATA: {
         return {
            ...state,
            ...action.data

         }
      }
      case SET_USER_PHOTO: {
         return {
            ...state,
            photo: action.photo
         }
      }



      default:
         return state;
   }
}

export const setUserData = (userID, login, email, isAuth) => ({
   type: SET_USER_DATA,
   data: {
      userID,
      login,
      email,
      isAuth

   }
})


export const setUserPhoto = (photo) => ({
   type: SET_USER_PHOTO,
   photo
})

export const getUserData = () => (dispatch) => {
   return  authAPI.getAuthInfo()
      .then(response => {
         if (response.data.resultCode === 0) {
            let {
               id,
               login,
               email
            } = response.data.data;
            dispatch(setUserData(id, login, email, true))
            usersAPI.getUsersData(id)
               .then(response => {
                  let photo = response.data.photos.small;
                  dispatch(setUserPhoto(photo));
               })
         }

      })
}


export const login = (email,password, rememberMe) => (dispatch) => {
   authAPI.login(email, password, rememberMe)
       .then(response => {
          if (response.data.resultCode === 0) {
              dispatch(getUserData())
          } else {
              let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
              dispatch(stopSubmit("login", {_error: messages}));
          }
       });
}

export const logout = () => (dispatch) => {
   authAPI.logout()
       .then(response => {
          if (response.data.resultCode === 0) {
             dispatch(setUserData(null, null, null, false))

          }
       });
}





export default authReducer;