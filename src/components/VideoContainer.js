import { useEffect, useState } from "react";
import { youtube_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";
import {API_KEY} from "../utils/constants";
import { closeMenu } from "../utils/ToggleSlice";
const VideoContainer = ()=> {
    const dispatch = useDispatch();
    const [videoInfo, setVideoInfo] = useState([]);
    const searchInfo = useSelector((store) => store.search.searchText).replace(/\s+/g, "");
    const fetchVideos = async() => {
        const data = await fetch(youtube_API);
        const json = await data.json();
        setVideoInfo(json?.items);
       dispatch(addVideos(json?.items));
    }

    const searchedVideos = async() => {
        const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchInfo+"&type=video&maxResults=50&key="+API_KEY);
        const json = await data.json();
        console.log(json);
        setVideoInfo(json?.items);
        dispatch(closeMenu());
       dispatch(addVideos(json?.items));
    }
    // if(searchInfo.length > 1){
    //     searchedVideos();
    // }
    useEffect(()=>{
    
        (searchInfo.length>0)? searchedVideos() : fetchVideos();

    },[searchInfo]);
   
    console.log(searchInfo);
    return videoInfo && (
        <div className="flex flex-wrap w-12/12 justify-center z-0">
            {videoInfo.map((video)=> <VideoCard info={video}/>)}
        </div>
    )
}

export default VideoContainer;