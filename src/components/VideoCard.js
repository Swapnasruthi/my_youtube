import { Link } from "react-router-dom";

const VideoCard = ({info}) => {
    
    const {snippet,statistics} = info;
    return info && (
        <div className="m-2 mb-5">
            <div className="w-[25rem] h-96">
            <Link to={"/watch?v="+info.id}><img className="rounded-2xl" alt="Thumbnail" src={snippet.thumbnails.high.url}/>
            <p className="font-semibold w-[24rem] text-base line-clamp-2">{snippet.title}</p>
            <p className="text-gray-600">{snippet.channelTitle}</p>
            {statistics? (
                <p className="text-gray-600">{statistics.viewCount}</p>
                ) : null}
            </Link>
            </div>
            
        </div>
    )
}
export default VideoCard;