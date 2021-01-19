import * as axios from 'axios'
const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY":'b76deb8e-e178-4335-9202-7e08f95f4697'},
    withCredentials:true

})
export const userApi = (userId) => {
    if (!userId) {
        userId = 2
    }
    return instance.get(`profile/${userId}`)

}
export const getFriends = (currentPage,pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}
export const deleteFollow = (id) => {
    return instance.delete(`follow/${id}`)
}
export const postFollow = (id) => {
    return instance.post(`follow/${id}`)
}