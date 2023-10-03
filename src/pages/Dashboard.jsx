import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import profilePic from '../img/userPfp.png'
import {RiDashboardFill} from 'react-icons/ri'


const Dashboard = () => {
  // toggle btn for switching sidebar on and off
  const [toggle, setToggle] = useState(false);
  return (
    <div className='flex '>
        {/* sidebar */}
        <div className={`${toggle ? "desktop:w-72 tablet:w-48 ":"w-20"} duration-200 h-screen bg-gray-300 relative `}>
          {/* switch btn */}
          {/* <div className={`absolute top-[5.5rem] left-[1.3rem] mx-auto  duration-200 bg-blue-500 w-5 h-5 items-center p-4 flex justify-center cursor-pointer rounded-full ${toggle && "rotate-180"}`} onClick={()=>setToggle(!toggle)}>
            <span className="material-symbols-outlined text-sm select-none top-32 left-60 " >
              arrow_forward_ios
            </span>
          </div> */}
          {/* sidebarOpener */}
          <div className={`${toggle ? "hidden":""} absolute cursor-pointer desktop:top-6 desktop:left-[68px] tablet:top-6 tablet:text-sm tablet:left-[68px] bg-gray-500 hover:scale-125 duration-200 flex justify-center rounded-full  `} onClick={()=>setToggle(!toggle)}>
          <span className="material-symbols-outlined">
            chevron_right
          </span>
          </div>

          {/* userInformation */}
          <div className={`${toggle ? "desktop:justify-center desktop:gap-5 tablet:justify-center " : ""} w-full py-5 px-2 flex items-center gap-1 `}>
            {/* userProfilePic */}
            <img src={profilePic} alt="" className={`${toggle ? "":"ml-2 duration-200 tablet:ml-5"} w-11 h-11 rounded-full select-none cursor-pointer tablet:w-6 tablet:h-6  `} />
            {/* information */}
            <div className={`${toggle ? "" : "scale-0"} duration-150 text-sm font-semibold`}>
              <h3 className="select-none">Username</h3>
              <p className="text-gray-600 text-xs">admin@gmail.com</p>
            </div>

            {/* close btn */}
            <div className={`${toggle ? "":"hidden"}  cursor-pointer bg-gray-500 hover:scale-125 duration-200 w-6 h-6 flex justify-center items-center rounded-full `} onClick={()=>setToggle(!toggle)}>
            <span className="material-symbols-outlined text-xl">
            chevron_left
            </span>
            </div>
          </div>

          {/* sideBar items */}
          <div className="mt-14 flex flex-col px-5 gap-7">
            {/* Employee */}
            <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-400 px-3 py-1 rounded-lg duration-200 ">
              <div className="" >
                <span className="material-symbols-outlined text-xl">
                  badge
                </span>
              </div>
              <p className={`${toggle ? "":"hidden"} font-semibold`}>Employee</p>
            </div>

            {/* Dashboard */}
            <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-400 px-3 py-1 rounded-lg duration-200 ">
              <div className="">
                <span className="material-symbols-outlined text-xl">
                  dashboard
                </span>
              </div>
              <p className={`${toggle ? "":"hidden"} font-semibold`}>Dashboard</p>
            </div>

            {/* Files */}
            <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-400 px-3 py-1 rounded-lg duration-200 ">
              <div className="" >
              <span className="material-symbols-outlined  text-xl">
                folder
              </span>
              </div>
              <p className={`${toggle ? "":"hidden"} font-semibold`}>Files</p>
            </div>

            {/* Accounts */}
            <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-400 px-3 py-1 rounded-lg duration-200 ">
              <div className="" >
              <span className="material-symbols-outlined text-xl">
                manage_accounts
              </span>
              </div>
              <p className={`${toggle ? "":"hidden"} font-semibold`}>Accounts</p>
            </div>

            {/* Settings */}
            <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-400 px-3 py-1 rounded-lg duration-200 ">
              <div className="" >
              <span className="material-symbols-outlined text-xl">
                settings
              </span>
              </div>
              <p className={`${toggle ? "":"hidden"} font-semibold`}>Settings</p>
            </div>
          </div>
          
        </div>
        
        

        {/* rightSide */}
        <div className="flex-1 h-screen">
        <Navbar/>
        <h1 className="flex justify-center mt-52">
            What's up! this is Dashboard
        </h1>
        </div>
      
    </div>
  )
}

export default Dashboard