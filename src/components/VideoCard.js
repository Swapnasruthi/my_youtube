import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addChannel } from "../utils/channelSlice";
import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";

const VideoCard = ({info}) => {
    
   
    const {snippet,statistics} = info;
    // console.log(info);
    const channelID = info?.snippet?.channelId;
    // console.log(channelID);
    const searchPage = useSelector((store)=> store.searchPage.isSearchPage);
    const [channelData, setChannelData] = useState([]);
     const channelInfo = async() => {
                const channelData = await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id="+channelID+"&key="+API_KEY);
                const channelJson = await channelData.json();
                setChannelData(channelJson?.items[0]);
        }
    
    
    useEffect(()=>{
        channelInfo()
    },[]);
    
   
    return info && (
        <div className="m-2 mb-5">
            <div className={searchPage? "w-full h-96 flex justify-center ml-24" : "w-[25rem] h-96"}>
            <div className={searchPage? "mr-5" : ""}>
            <Link to={"/watch?v="+(info?.id?.videoId ? info?.id?.videoId: info?.id )}><img className="rounded-2xl" alt="Thumbnail" src={snippet.thumbnails.high.url}/></Link>
            </div>
            <div>
            <div className="flex justify-center items-center mt-2">
                {!searchPage && <img alt="user profile"
                        className="w-8 h-8 mr-2 justify-center items-center rounded-full"
                        src={channelData?.snippet?.thumbnails?.default?.url}/>}
                <p className={searchPage? "font-semibold w-[30rem] text-base line-clamp-2 mt-5 mb-1" : "font-semibold w-[24rem] text-base line-clamp-2"}>{snippet.title}</p>
            </div>
            <div>
                {searchPage && <p className="mx-1 mb-2 text-gray-600">{channelData?.statistics?.viewCount}</p>}
            </div>
            <div className={searchPage ? "flex" : "flex ml-8"}>
            
                {searchPage && <img alt="user profile"
                        className="w-8 h-8 mr-2 justify-center items-center rounded-full"
                        src={channelData?.snippet?.thumbnails?.default?.url}/>}
                <p className="text-gray-600">{snippet.channelTitle}</p>
            </div>
            <div>
                {searchPage && <p className="font-semibold w-[30rem] text-base line-clamp-2 my-5 text-gray-500">{channelData?.snippet?.description}</p>}
            </div>
            {statistics? (
                <p className="text-gray-600 ml-8">{statistics.viewCount}</p>
                ) : null}
            </div>
            
            </div>
            
        </div>
    )
}
export default VideoCard;