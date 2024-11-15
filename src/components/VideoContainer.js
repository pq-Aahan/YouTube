import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoContainer = () => {

  const[video, setVideos]=useState([]);

  useEffect(()=>{
   getVideos();
  },[]);


const getVideos=async()=>{
const data=await fetch(YOUTUBE_VIDEOS_API);
const json=await data.json();
console.log(json);
setVideos(json.items);
}


  return (
    <div>
      Video Container
    </div>
  )
}

export default VideoContainer
