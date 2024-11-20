import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams]=useSearchParams(); 
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(closeMenu())   
    },[])
  return (
    <div className='px-5'>
      <iframe width="1200" height="600" src={"https://www.youtube.com/embed/" + searchParams.get('v')} title="YouTube video player" framebo rder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>  
    </div>
  )
}

export default WatchPage