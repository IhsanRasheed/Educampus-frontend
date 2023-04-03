import axios from '../axios'

export const addStudentAPI = (data,headers) => {
    return axios.post('/office/add-student', data ,headers)
}

export const officeLoginAPI = (data) => {
    return axios.post('/office/login', data)
}

export const addBatchAPI = (data) => {
    return axios.post('/office/add-batch', data)
}

export const addTeacherAPI = (data,headers) => {
    return axios.post('/office/add-teacher', data,headers)
}

export const availableTeachersAPI = () => {
    return axios.get('/office/available-teachers')
}

export const getBatchesAPI = () => {
    return axios.get('/office/batches')
}

