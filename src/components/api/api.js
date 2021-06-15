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
      return instance.get(`profile/${id}`)

   },
   follow: (id) => {
      return instance.delete(`follow/${id}`)
   },
   unfollow: (id) => {
      return instance.post(`follow/${id}`)
   }


}



export const authAPI = {
   getAuthInfo: () => {
      return instance.get(`auth/me`)
         
   }
}