import axios from '../axios'

export const addStudentAPI = (data,headers) => {
    return axios.post('/office/add-student', data ,headers)
}

export const officeLoginAPI = (data) => {
    return axios.post('/office/login', data)
}