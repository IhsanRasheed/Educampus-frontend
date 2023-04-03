import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Office/Login'
import OfficeHome from '../Pages/Office/Home'
import AddStudent from '../Pages/Office/AddStudent'
import AddBatch from '../Pages/Office/AddBatch'
import AddTeacher from '../Pages/Office/AddTeacher'
import ViewBatch from '../Pages/Office/ViewBatch'



function OfficeRoutes() {
  return (
    <Routes>


        <Route path='/login' element={<Login />}></Route>

        <Route path='/home' element={<OfficeHome />}></Route>

        <Route path='/add-student' element={<AddStudent />} ></Route>

        <Route path='/add-batch' element={<AddBatch />} ></Route>

        <Route path='/add-teacher' element={<AddTeacher />} ></Route>

        <Route path='/batches' element={<ViewBatch />}></Route>


    </Routes>
    
    
  )
}

export default OfficeRoutes