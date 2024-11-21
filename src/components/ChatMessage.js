import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center  '>
        <img className='h-8' alt='user' src='https://t3.ftcdn.net/jpg/02/13/55/90/360_F_213559068_B3t1KuDASHhKh6FFQC0Ym6fOTuWuK3gM.jpg'/>
        <span className='font-bold px-3'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
