import {createSelector} from "reselect";


export const getUsers = (state) => {
    return state.usersPage.users
}
//Супер селектор который создан при помощи библиотеки реселект => не будеи происходить перересовки при одинаковом стэйте
export const getUserSuperSelector = createSelector(getUsers, (users) => {
   return  users.filter( u => true)
})



export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUserCount = (state) =>{
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return  state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowInProgress = (state) => {
    return state.usersPage.followInProgress
}