import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/ToggleSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";

const WatchLater = ()=>{
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const singleVideo = useSelector((store) => store?.videos?.videoList[1].find((video) => video.id === videoId));

    console.log(singleVideo);

    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
    return(
        <div className="w-full">
        <div className="flex w-full relative">
            <div className="mt-16 ml-10 flex justify-center rounded-lg">
                <iframe width="1000" height="520" 
                className="rounded-xl"
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            
            <div className="w-full">
                <Livechat/>
            </div>
        </div>
            <div className="font-bold text-xl mx-12 absolute mt-[-3rem] w-8/12 ">
                <p >{singleVideo?.snippet?.title}</p>
            </div>
            <div className="flex flex-row w-8/12 border-black ml-10 justify-between p-2">
                <div className="flex flex-row items-center">
                    <div>
                        <img alt="user profile"
                        className="w-11 h-11 mr-2 rounded-full"
                        src={singleVideo?.snippet?.thumbnails?.medium?.url}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-lg">{singleVideo?.snippet?.channelTitle}</p>
                        <p className="text-sm text-gray-700 ">230k subscribers</p>
                    </div>
                    <div className="ml-5">
                        <button className="bg-black text-white p-2 rounded-3xl font-bold">subscribe</button>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div>
                        live and dislike
                    </div>
                    <div>
                        share
                    </div>
                    <div>
                        three dots
                    </div>
                </div>
            </div>
        <CommentsContainer/>
        </div>
    )
}
export default WatchLater;