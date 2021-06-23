import {
   authAPI,
   usersAPI
} from "../components/api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'network/auth/SET_USER_DATA';
const SET_USER_PHOTO = 'network/auth/SET_USER_PHOTO';

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

export const getUserData = () => async (dispatch) => {

    let response = await authAPI.getAuthInfo();
         if (response.data.resultCode === 0) {
            let {
               id,
               login,
               email
            } = response.data.data;
            dispatch(setUserData(id, login, email, true))

         }
}


export const login = (email,password, rememberMe) => async (dispatch) => {
   let response = await authAPI.login(email, password, rememberMe);

          if (response.data.resultCode === 0) {
              dispatch(getUserData())
          } else {
              let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
              dispatch(stopSubmit("login", {_error: messages}));
          }

}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
          if (response.data.resultCode === 0) {
             dispatch(setUserData(null, null, null, false))

          }
}





export default authReducer;