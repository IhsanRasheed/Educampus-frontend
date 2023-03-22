import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing'
import OfficeRoutes from './Routes/OfficeRoutes';
import StudentRoutes from './Routes/StudentRoutes';

function App() {
  return (
  <div>
    <Router>
      <Routes>

        <Route path='/' element={<Landing/>}/>
        <Route path='/office/*' element={<OfficeRoutes/>} />
        <Route path='/student/*' element={<StudentRoutes/>}/>

      </Routes>
    </Router>
    
  </div>
  )
}

export default App