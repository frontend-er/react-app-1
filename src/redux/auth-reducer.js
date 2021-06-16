import {
   authAPI,
   usersAPI
} from "./../components/api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {

   id: null,
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
            ...action.data,
            isAuth: true
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

export const setUserData = (userID, login, email) => ({
   type: SET_USER_DATA,
   data: {
      userID,
      login,
      email,

   }
})


export const setUserPhoto = (photo) => ({
   type: SET_USER_PHOTO,
   photo
})

export const getUserData = () => (dispatch) => {
   authAPI.getAuthInfo()
      .then(response => {
         if (response.data.resultCode === 0) {
            let {
               id,
               login,
               email
            } = response.data.data;
            dispatch(setUserData(id, login, email))
            usersAPI.getUsersData(2)
               .then(response => {
                  debugger;
                  let photo = response.data.photos.small;
                  dispatch(setUserPhoto(photo));
               })
         }

      })
}



export default authReducer;