import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const[suggestions,setSuggestions]=useState([]); 
  const [showSuggestions, setShowSuggestions]=useState(false); 
  
  const searchCache=useSelector(store=>store.search);
  const dispatch=useDispatch();

  useEffect(()=>{
   const timer=setTimeout(()=>{if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery])
   } else{
    getSearchSuggestions()
   } },200);

   return()=>{
    clearTimeout(timer);
   }
  },[searchQuery])


  const getSearchSuggestions=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json=await data.json();
     setSuggestions(json[1]);
     dispatch(cacheResults({
      [searchQuery]:json[1],
     }))
  }


  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }

    return (
      <div className="flex items-center justify-between p-2 m-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <a href="/">
          <img
          onClick={()=>toggleMenuHandler()}
            className="h-8 cursor-pointer"
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
            alt="hamburger"
          />
          </a>
          <img
            className="h-12"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
            alt="Logo"
          />
        </div>
        <div className="relative flex items-center space-x-1">
    <div className="relative">
      <input
        type="text"
        className="border border-gray-400 rounded-l-full px-6 py-1 w-[30rem] focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click on suggestions
      />
      <button className="px-4 py-1 bg-blue-500 text-white rounded-r-full">
        🔍
      </button>

      {showSuggestions && (
        <div className="absolute top-full left-0 bg-white py-2 px-4 w-full mt-1 shadow-lg rounded-lg border border-gray-300 z-50">
          <ul>
            {suggestions.map((s) => (
              <li
                key={s}
                className="py-2 px-3 hover:bg-gray-100 cursor-pointer rounded-md"
              >
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
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
