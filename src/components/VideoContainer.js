import { useEffect, useState } from "react";
import { youtube_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, removeVideos } from "../utils/videoSlice";
import {API_KEY} from "../utils/constants";
import { closeMenu } from "../utils/ToggleSlice";
import { addSearchText } from "../utils/searchSlice";
import { toggleSearchPage } from "../utils/searchPageSlice";
const VideoContainer = ()=> {
    const dispatch = useDispatch();
    const [videoInfo, setVideoInfo] = useState([]);
    const searchInfo = useSelector((store) => store.search.searchText).replace(/\s+/g, "");
  
    const searchPage = useSelector((store)=> store.searchPage.isSearchPage);
    const fetchVideos = async() => {
        const data = await fetch(youtube_API);
        const json = await data.json();

        dispatch(toggleSearchPage());
        
        setVideoInfo(json?.items);
        dispatch(removeVideos());
        dispatch(addSearchText(""));

       dispatch(addVideos(json?.items));
        
    }

    const searchedVideos = async() => {
        const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchInfo+"&type=video&maxResults=30&key="+API_KEY);
        const json = await data.json();
        setVideoInfo(json?.items);
        dispatch(toggleSearchPage());
        console.log(searchPage);

        dispatch(closeMenu());
        dispatch(removeVideos());
        dispatch(addVideos(json?.items));
    }

    const channelInfo = async(channelId) => {
        const channelData = await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id="+channelId+"&key="+API_KEY);
        const channelJson = await channelData.json();
        console.log(channelJson);
    }
   
    useEffect(()=>{
    
        (searchInfo.length>0)? searchedVideos() : fetchVideos();

    },[searchInfo]);
   
    
    return videoInfo && (
        <div className={!searchPage ? "flex flex-wrap w-12/12 justify-center z-0" : "flex flex-col w-full justify-center z-0"}>
            {videoInfo.map((video)=> <VideoCard info={video}/>)}
        </div>
    )
}

export default VideoContainer;