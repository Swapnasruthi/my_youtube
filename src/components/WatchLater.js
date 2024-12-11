import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/ToggleSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";

const WatchLater = ()=>{
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
    return(
        <div className="w-full">
        <div className="flex w-full">
            <div className="my-16 ml-10 flex justify-center rounded-lg">
                <iframe width="1000" height="520" 
                className="rounded-xl"
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        
            <div className="w-full">
                <Livechat/>
            </div>
        </div>
        <CommentsContainer/>
        </div>
    )
}
export default WatchLater;