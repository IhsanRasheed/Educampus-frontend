import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Office/Login'
import OfficeHome from '../Pages/Office/Home'



function OfficeRoutes() {
  return (
    <Routes>


        <Route path='/login' element={<Login />}></Route>

        <Route path='/home' element={<OfficeHome />}></Route>


    </Routes>
    
    
  )
}

export default OfficeRoutes