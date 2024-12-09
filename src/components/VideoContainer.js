import { useEffect, useState } from "react";
import { youtube_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = ()=> {
    const [videoInfo, setVideoInfo] = useState([]);
    const fetchVideos = async() => {
        const data = await fetch(youtube_API);
        const json = await data.json();
        setVideoInfo(json?.items);
    }

    useEffect(()=>{
        fetchVideos();
    },[]);
    
    return videoInfo && (
        <div className="flex flex-wrap w-12/12 justify-center z-0">
            {videoInfo.map((video)=> <VideoCard info={video}/>)}
        </div>
    )
}

export default VideoContainer;