import React from 'react'
import AddStudent from '../../Components/Office/AddStudent'
import Sidebar from '../../Components/Office/Sidebar'
// import StudentPartial from '../../Components/Office/Partials/Student'

function AddStudents() {
  return (
    <div className='flex'>
      <Sidebar/>
      {/* <StudentPartial/> */}
      <AddStudent/>
    </div>
  )
}

export default AddStudents