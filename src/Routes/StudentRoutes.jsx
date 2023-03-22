import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Student/LoginStudent/'


function StudentRoutes() {
  return (
    <Routes>

      <Route path='/login' element={<Login/>}/>

    </Routes>


  )
}

export default StudentRoutes