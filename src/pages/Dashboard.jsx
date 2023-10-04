import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import profilePic from "../assets/img/userPfp.png";
import { RiDashboardFill } from "react-icons/ri";

const Dashboard = () => {
  // toggle btn for switching sidebar on and off
  const [toggle, setToggle] = useState(false);
  const toggleSideBar = () => {
    setToggle(!toggle);
  };

  // toggle btn for dropdown
  const [down, setDown] = useState(false);
  const toggleDrop = () => {
    setDown(!down);
  };
  return (
    <div className="flex ">
      {/* sidebar */}
      <div
        className={`${
          toggle ? "desktop:w-72 tablet:w-48 " : "w-20"
        } duration-500 h-screen bg-gray-300 relative `}
      >
        {/* sidebarOpener */}
        <div
          className={`${
            toggle ? "hidden" : ""
          } absolute cursor-pointer desktop:top-6 desktop:left-[68px] tablet:top-6 tablet:text-sm tablet:left-[68px] bg-gray-500 hover:scale-125 duration-300 flex justify-center rounded-full  `}
          onClick={toggleSideBar}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        {/* userInformation */}
        <div
          className={`${
            toggle
              ? "desktop:justify-center desktop:gap-5 tablet:justify-center "
              : ""
          } w-full py-5 px-2 flex items-center gap-1 `}
        >
          {/* userProfilePic */}
          <img
            src={profilePic}
            alt=""
            className={`${
              toggle ? "" : "ml-2 duration-200 tablet:ml-5"
            } w-11 h-11 rounded-full select-none cursor-pointer tablet:w-6 tablet:h-6  `}
          />
          {/* information */}
          <div
            className={`${
              toggle ? "" : "scale-0"
            } duration-150 text-sm font-semibold`}
          >
            <h3 className="select-none">Username</h3>
            <p className="text-gray-600 text-xs">admin@gmail.com</p>
          </div>

          {/* close btn */}
          <div
            className={`${
              toggle ? "" : "hidden"
            }  cursor-pointer bg-gray-500 hover:scale-125 duration-300 w-6 h-6 flex justify-center items-center rounded-full `}
            onClick={toggleSideBar}
          >
            <span className="material-symbols-outlined text-xl">
              chevron_left
            </span>
          </div>
        </div>

        {/* sideBar items */}
        <div className="mt-14 flex flex-col px-5 gap-7">
          {/* Employee */}
          <div className="">
            <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-400  px-3 py-1 rounded-lg duration-200  ">
              <div className="">
                <span className={`material-symbols-outlined text-xl`}>
                  badge
                </span>
              </div>
              <div className="flex  w-full justify-between">
                <p className={`${toggle ? "" : "hidden"} font-semibold`}>
                  Employee
                </p>
                {/* dropdown icon */}
                <div
                  className={`${toggle ? "" : "hidden"} ${
                    down ? "rotate-0 duration-100" : "rotate-180 duration-100"
                  } select-none`}
                  onClick={toggleDrop}
                >
                  <span className="material-symbols-outlined">expand_less</span>
                </div>
              </div>
            </div>

            {/* Dropdown of the Employee */}
            <div
              className={`${
                toggle
                  ? "text-sm border-l border-gray-400 py-1 px-2 ms-auto tracking-wider mt-2 w-4/5"
                  : "hidden"
              } ${down ? "" : "hidden"} select-none`}
              id="submenu"
            >
              <p className=" cursor-pointer py-1 px-2  hover:bg-gray-400 rounded-lg mt-1">
                HelloOne
              </p>
              <p className=" cursor-pointer py-1 px-2  hover:bg-gray-400 rounded-lg mt-1">
                HelloTwo
              </p>
              <p className=" cursor-pointer py-1 px-2  hover:bg-gray-400 rounded-lg mt-1">
                HelloThree
              </p>
            </div>
          </div>

          {/* Dashboard */}
          <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-400 px-3 py-1 rounded-lg duration-200 ">
            <div className="">
              <span className="material-symbols-outlined text-xl">
                dashboard
              </span>
            </div>
            <p className={`${toggle ? "" : "hidden"} font-semibold`}>
              Dashboard
            </p>
          </div>

          {/* Files */}
          <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-400 px-3 py-1 rounded-lg duration-200 ">
            <div className="">
              <span className="material-symbols-outlined  text-xl">folder</span>
            </div>
            <p className={`${toggle ? "" : "hidden"} font-semibold`}>Files</p>
          </div>

          {/* Accounts */}
          <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-400 px-3 py-1 rounded-lg duration-200 ">
            <div className="">
              <span className="material-symbols-outlined text-xl">
                manage_accounts
              </span>
            </div>
            <p className={`${toggle ? "" : "hidden"} font-semibold`}>
              Accounts
            </p>
          </div>

          {/* Settings */}
          <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-400 px-3 py-1 rounded-lg duration-200 ">
            <div className="">
              <span className="material-symbols-outlined text-xl">
                settings
              </span>
            </div>
            <p className={`${toggle ? "" : "hidden"} font-semibold`}>
              Settings
            </p>
          </div>
        </div>
      </div>

      {/* rightSide */}
      <div className="flex-1 h-screen">
        <Navbar />
        <h1 className="flex justify-center mt-52">
          What's up! this is Dashboard
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
