import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch } from 'react-redux'
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {

 const dispatch=useDispatch();

    useEffect(()=>{
        const i=setInterval(()=>{
    //Api polling
    dispatch(addMessage({
        name:"Aahan",
        message:"Lorem ipsum dolor",
    }))
        },2000);
        return ()=>clearInterval(i)
    },[])

  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-lg'>
      <ChatMessage name="Aahan" message="This is youtube with react"/>
    </div>
  )
}

export default LiveChat
