import * as axios from 'axios';


const instance = axios.create({
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   withCredentials: true,
   headers: {
      "API-KEY": "4e0e2285-df51-4910-837e-25942ded4b41"
   }
})



export const usersAPI = {
   getUsers: (currentPage = 1, pageSize = 10) => {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   getUsersData: (id) => {
      return  profileAPI.getUsersData(id)

   },
   follow: (id) => {
      return instance.delete(`follow/${id}`)
   },
   unfollow: (id) => {
      return instance.post(`follow/${id}`)
   }


}



export const profileAPI = {
   getUsersData: (id) => {
      return instance.get(`profile/${id}`)

   },
   getStatus: (id) => {
      return instance.get('profile/status/' + id )
   },
   updateStatus: (status) => {
      return instance.put('profile/status/', {
         status: status
      })
   }
}



export const authAPI = {
   getAuthInfo: () => {
      return instance.get(`auth/me`)
         
   },
   login: (email, password, rememberMe = false) => {
      return instance.post('auth/login', {email, password, rememberMe})
   },
   logout: () => {
      return instance.delete('auth/login')
   }
}