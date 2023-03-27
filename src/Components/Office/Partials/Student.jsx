import React from 'react'

function Student() {
  return (
    <div>
      <div className="flex flex-wrap mb-4 mt-2 justify-end">
        <a
          href="/office/students"
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded flex items-center justify-center mr-2 mb-2"
        >
          <img src="https://res.cloudinary.com/dgmz2jv6j/image/upload/v1679573599/EduCampus/landing/home_bzuvrp.svg" className="w-5 mr-2" alt="" />
          <span className="hidden md:inline-block">Students</span>
        </a>
        <a
          href="/office/students/add-student"
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded flex items-center justify-center mr-2 mb-2"
        >
          <img
            src="/images/Office/document-upload.svg"
            className="w-5 mr-2"
            alt=""
          />
          <span className="hidden md:inline-block">Add Student</span>
        </a>
      </div>
    </div>
  )
}

export default Student