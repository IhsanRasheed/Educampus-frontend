import React, {useEffect, useState} from 'react'
import BaseTable from '../../BaseTable'
import { getBatchesAPI } from '../../../Services/OfficeService'
import { Link } from 'react-router-dom'


function ViewBatch() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [filterData, setFilterData] = useState([]);


  useEffect(() => {

    getBatchesAPI().then((response) => {
      if(response.data.status){
        setData(response.data.batches);
        setFilterData(response.data.batches)
      } else{
        console.log(response)
      }
    })

  },[])

  const columns = [
    {
        name: "Sl No.",
        cell: (row, index) => <div>{index + 1}</div>,
        
      },
    {
        name: "Register Id",
        selector: (row) => row.registerId,
        sortable:true
    },
    {
        name: "Head of the Batch",
        selector: (row) => row.teacher_data[0].name,
    },
    {
        name: "Start Date",
        selector: (row) => {const startDate = new Date(row.startDate);
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          return startDate.toLocaleDateString('en-US', options);}
    },
    {
        name: "Duration",
        selector: (row) => `${row.duration} month`,
    },
    {
        name: "Number of Seats",
        selector: (row) => row.numberOfSeat,
    },
    // {
    //     name: "ON/OFF duty",
    //     cell: (row) => (
    //         <h1 className="bg-red-600 px-4 py-1 text-white text-base font-semibold ">OFF</h1>
    //     ),
    // },
];

useEffect(() => {
  const result = data.filter((item) => {
      return item.registerId.toLowerCase().match(search.toLowerCase());
  });
  setFilterData(result);
}, [search]);

  return (
    <BaseTable
    columns={columns}
    data={filterData}
    title={<h1 className="font-semibold text-4xl">Batches</h1>}
    subHeader
    subHeaderComponent={
        <input
            type="text"
            placeholder="Search"
            className="w-1/4 h-10 p-4"
            value= {search}
            onChange={(e) => setsearch(e.target.value)}
        />
    }
    actions={
        <Link to={'/office/add-batch'}>
            <button className="bg-blue-500 h-10 shadow  text-base font-semibold  px-4 py-2 rounded-md">
                Add Batch
            </button>
        </Link>
    }
    
/>
  )
}

export default ViewBatch