// import React from 'react'

import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Home() {
    const Navigate = useNavigate()
    // Placeholder data
    const totalUsers = 0;
    const usersUnderVerification = 0;
  
    return (
      <div className="container mx-auto mt-8">
        <div className="  bg-white rounded-lg overflow-hidden shadow-lg p-6">
          <div className="text-start mb-4">
            <h2 className="text-2xl font-bold mb-2 ">User Statistics</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Total Users</h3>
              <p className="text-5xl font-bold text-center">{totalUsers}</p>
              <div className="flex justify-end mr-10 cursor-pointer" onClick={()=> Navigate("/Total-User")}>
              <FaArrowRight className="text-3xl"/>
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Users Under Verification</h3>
              <p className="text-5xl font-bold text-center">{usersUnderVerification}</p>
              <div className="flex justify-end mr-10 cursor-pointe" onClick={()=> Navigate("/User-Approval")}>
              <FaArrowRight className="text-3xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  