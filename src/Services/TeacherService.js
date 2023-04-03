import axios from "../axios";

export const teacherLoginAPI = (data) => {
    return axios.post('/teacher/login', data) 
}