import * as axios from 'axios';


const instance = axios.create({
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   withCredentials: true,
   headers: {
      "API-KEY": "4e0e2285-df51-4910-837e-25942ded4b41"
   }
})


export const getUsers = (currentPage = 1, pageSize = 10) => {
   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
}


export const getAuthInfo = () => {
   return instance.get(`auth/me`)
      .then(response => response.data)
}



export const getUsersData = (id) => {
   return instance.get(`profile/${id}`)
      .then(response => response.data)
}