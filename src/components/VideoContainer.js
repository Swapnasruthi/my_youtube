import { useEffect, useState } from "react";
import { youtube_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const VideoContainer = ()=> {
    const dispatch = useDispatch();
    const [videoInfo, setVideoInfo] = useState([]);
    const searchInfo = useSelector((store) => store.search.searchText);
    const fetchVideos = async() => {
        const data = await fetch(youtube_API);
        const json = await data.json();
        setVideoInfo(json?.items);
       dispatch(addVideos(json?.items));
    }
    useEffect(()=>{
        fetchVideos();
    },[]);
    const filteredData = videoInfo.filter((item)=> 
                                    item?.snippet?.tags?.some((tag)=>
                                        tag.toLowerCase().includes(searchInfo.toLowerCase())));
  

    return videoInfo && (
        <div className="flex flex-wrap w-12/12 justify-center z-0">
            {filteredData.map((video)=> <VideoCard info={video}/>)}
        </div>
    )
}

export default VideoContainer;