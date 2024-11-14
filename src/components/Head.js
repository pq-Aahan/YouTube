import React from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Head = () => {

  const dispatch=useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }

    return (
      <div className="flex items-center justify-between p-2 m-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <img
          onClick={()=>toggleMenuHandler()}
            className="h-8 cursor-pointer"
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
            alt="hamburger"
          />
          <img
            className="h-12"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
            alt="Logo"
          />
        </div>
  
        <div className="flex items-center space-x-1">
          <input
            type="text"
            className="border border-gray-400 rounded rounded-l-full px-6  py-1"
            placeholder="Search"
          />
          <button className="px-4 py-1  bg-blue-500 text-white rounded rounded-r-full">🔍</button>
        </div>
  
        <div>
          <img
            className="h-10"
            src="https://t3.ftcdn.net/jpg/02/13/55/90/360_F_213559068_B3t1KuDASHhKh6FFQC0Ym6fOTuWuK3gM.jpg"
            alt="UserIcon"
          />
        </div>
      </div>
    );
  };
  

export default Head 
