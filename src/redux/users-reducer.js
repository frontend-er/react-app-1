const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAG';
const SET_CURRENT_TOTAL_COUNT = 'SET_CURRENT_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROCESS = 'FOLLOWING_IN_PROCESS';


let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followInProgress: [17613]
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
            users: action.users
         }
      }

      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage
         }
      }

      case SET_CURRENT_TOTAL_COUNT: {
         return {
            ...state,
            totalUsersCount: action.totalCount
         }
      }
      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         }
      }
      case FOLLOWING_IN_PROCESS: {
         return {
            ...state,
            followInProgress: action.isFetching ? [...state.followInProgress, action.userId] : state.followInProgress.filter(id => id !== action.userId)
         }
      }



      default:
         return state;
   }
}

export const follow = (userId) => ({
   type: FOLLOW,
   userId
})

export const unfollow = (userId) => ({
   type: UNFOLLOW,
   userId
})

export const setUsers = (users) => ({
   type: SET_USERS,
   users
})

export const setCurrentPage = (currentPage) => ({
   type: SET_CURRENT_PAGE,
   currentPage

})


export const setUsersTotalCount = (totalCount) => ({
   type: SET_CURRENT_TOTAL_COUNT,
   totalCount

})

export const toggleIsFetching = (isFetching) => ({
   type: TOGGLE_IS_FETCHING,
   isFetching

})


export const toggleFollowingInProcess = (isFetching, userId) => ({
   type: FOLLOWING_IN_PROCESS,
   isFetching,
   userId


})



export default usersReducer;