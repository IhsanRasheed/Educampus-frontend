import axios from '../axios'

export const addStudentAPI = (data) => {
    return axios.post('/office/add-student',data)
}

export const officeLoginAPI = (data) => {
    return axios.post('office/login', data)
}