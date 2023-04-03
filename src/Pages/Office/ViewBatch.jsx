import React from 'react'
import Sidebar from '../../Components/Office/Sidebar'
import ViewBatches from '../../Components/Office/ViewBatch'


function ViewBatch() {
  return (
    <div className='flex overflow-x-hidden'>
        <Sidebar/>
        <ViewBatches/>
    </div>
  )
}

export default ViewBatch