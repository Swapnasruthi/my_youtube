import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/ToggleSlice";
import { useSearchParams } from "react-router-dom";

const WatchLater = ()=>{
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
    return(
        <div className="my-16 mx-14 flex justify-center rounded-lg">
            <iframe width="1000" height="520" 
            className="rounded-xl"
            src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}
export default WatchLater;