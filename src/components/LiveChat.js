import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {

const[liveMessage, setLiveMessage]=useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat?.messages || []);

  useEffect(() => {
    const i = setInterval(() => {
      // Simulate API polling
      dispatch(
        addMessage({
          name: "Aahan",
          message: "Lorem ipsum dolor",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex-col-reverse">
     <div> {chatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}</div>
      
    </div>
     <form className="w-full p-2  ml-2 border border-black" onSubmit={(e)=>{e.preventDefault();
        console.log("on form submit", liveMessage);
        dispatch(addMessage({name:"Tukun",
            message:liveMessage, 
        }))
        setLiveMessage("")
     }}>
        <input className="w-95 px-2 " type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
        <button className="px-2 mx-2 bg-green-50">Submit</button>
     </form>
     </>
  );
};

export default LiveChat;
