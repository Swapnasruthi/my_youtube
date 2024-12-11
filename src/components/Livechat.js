import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";

const Livechat = ()=>{
    const [liveMessage, setLiveMessage] = useState("");
    const selector = useSelector((store) => store.chat.messages);
    const dispatch = useDispatch();
    useEffect(()=>{
        const i = setInterval(()=>{
            //api polling 
            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomString(15)
            }));

        },2000);

        return ()=> clearInterval(i);
    },[]);

   const handleMessage = ()=>{
        dispatch(addMessage({
            name:"swapna",
            message:liveMessage,
        }));
        setLiveMessage("");

   }
    return(
        <div>
            <div className="mt-16 relative ml-5 text-center  ">
            <p className="p-1 font-bold text-white bg-slate-700 w-[26.5rem] shadow-xl rounded-lg rounded-b-none">  Top Chat: </p>
            </div>
            <div className=" border border-gray-600 h-[30.5rem] mx-5 p-2 rounded-b-none rounded-t-none rounded-r-lg rounded-l-lg bg-slate-200 overflow-y-scroll flex flex-col-reverse">
                
            
                {selector.map((m) => (
                    <ChatMessage 
                    name={m.name}
                    message={m.message}
                    />
                ))}
            </div>

            <div className="border border-gray-600 h-16 w-[26.5rem] ml-5 rounded-lg rounded-t-none flex items-center    ">
                <input
                    type="text"
                    placeholder="chat.."
                    className="border border-gray-300 m-4 outline-none px-2 py-1 w-10/12 rounded-2xl"
                    value={liveMessage}
                    onChange={(e)=>setLiveMessage(e.target.value)}
                />
              
                <div onClick={handleMessage} >
                    <svg className="hover:bg-gray-200 rounded-2xl p-1 mr-4" xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 24 24" width="34" focusable="false" aria-hidden="true"><path d="M5 12 3 3l19 9-19 9 2-9zm.82.93-1.4 6.29L19.66 12 4.42 4.78l1.4 6.29L17 12l-11.18.93z" fill-rule="evenodd"></path></svg>

                </div>
                
                
            </div>
        </div>
    )
}
export default Livechat;