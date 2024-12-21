import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import SideVideoCard from "./SideVideoCard";

const SideVideos = ({id})=>{
    // console.log(id);
    const [video, setVideos] = useState([]);
    const fetchingVideos = async()=>{
        const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&videosCategoryId="+id+"&key="+API_KEY);
        const json = await data.json();
        setVideos(json?.items);
        // console.log(json);
    }
    useEffect(()=>{
        fetchingVideos();
    },[]);
    
    return video && (
        <div>
            {video.map((vid) => <SideVideoCard vid = {vid} vidId = {vid?.id?.videoId}/>)}
        </div>
    )
}
export default SideVideos;