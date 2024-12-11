import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const Livechat = ()=>{
    const selector = useSelector((store) => store.chat.messages);
    const dispatch = useDispatch();
    useEffect(()=>{
        const i = setInterval(()=>{
            //api polling 
            dispatch(addMessage({
                name:"swapna",
                message:"This is Namaste React Live!"
            }));

        },2000);

        return ()=> clearInterval(i);
    },[]);


    return(
        <div className="mt-16 border border-black h-[32.5rem] mx-5 p-2 rounded-lg bg-slate-200 overflow-scroll">
            <div className="mb-10 flex justify-center text-center ">
            <p className="font-bold text-white bg-slate-700 w-[25rem] shadow-xl fixed rounded-lg">  Top Chat: </p>
            </div>
           
            {selector.map((m) => (
                <ChatMessage 
                name={m.name}
                message={m.message}
                />
            ))}
        </div>
    )
}
export default Livechat;