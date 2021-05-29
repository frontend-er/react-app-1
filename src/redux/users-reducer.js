const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
   users: [{
      id: 1,
      followed: false,
      avatarPhoto: 'https://content.fortune.com/wp-content/uploads/2020/09/CNV.10.20.FORTUNE_BILL_AND_MELINDA_GATES_030-vertical.jpg',
      fullName: 'Dmity O',
      status: 'I am a programmer',
      location: {
         city: 'Chisinau',
         country: 'Moldova'
      }
   }, {
      id: 2,
      followed: false,
      avatarPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Elon_Musk_-_The_Summit_2013.jpg/200px-Elon_Musk_-_The_Summit_2013.jpg',
      fullName: 'Ann U',
      status: 'I am a teacher',
      location: {
         city: 'Chisinau',
         country: 'Moldova'
      }
   }, {
      id: 3,
      followed: true,
      avatarPhoto: "https://variety.com/wp-content/uploads/2019/12/jeff_bezos2019_rev-1.png",
      fullName: 'Mark Zukerberg',
      status: 'I am a boss',
      location: {
         city: 'Moscow',
         country: 'Russia'
      }
   }]
};

const usersReducer = (state = initialState, action) => {


   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return {
                     ...u,
                     followed: true
                  }

               }
               return u;

            })
         }
      }


      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return {
                     ...u,
                     followed: false
                  }
               }
               return u;
            })
         }
      }

      case SET_USERS: {
         return {
            ...state,
            users: [...state.users, ...action.users]
         }
      }

      default:
         return state;
   }
}

export const followAC = (userId) => ({
   type: FOLLOW,
   userId
})

export const unfollowAC = (userId) => ({
   type: UNFOLLOW,
   userId
})

export const setUsersAC = (users) => ({
   type: SET_USERS,
   users
})

export default usersReducer;