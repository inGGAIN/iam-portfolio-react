import React from 'react';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import Profile from '../assets/profile1.jpg';

function Home() {
  return (
    <div name="home"
     className="h-screen w-full bg-gradient-to-b from-indigo-700 via-indigo-700 to-gray-200">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center
       justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="capitalize text-4xl sm:text-7xl font-bold text-white">
            i'm web developer
          </h2>
          <p className="text-indigo-300 py-0 max-w-md">
            I have 3 years experience with web development.
            i have graduated from Wearnes Education Center Bali
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              portfolio
              <span className="hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img src={Profile}
           alt="profile"
           className="rounded-lg mx-auto h-2/3 w-full py-4" />
        </div>
      </div>
    </div>
  )
}

export default Home