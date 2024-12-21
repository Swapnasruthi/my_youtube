import { Link } from "react-router-dom";
import { generateRandomNumber } from "../utils/helper";

const SideVideoCard = ({vid,vidId})=>{
   
    return(
<div className="">
            <div className="">
            <div className="flex w-full/12 h-full">
            <div className="mx-1 flex justify-center w-5/12">
            <Link to={"/watch?v="+(vidId )}><img className=" rounded-lg m-4" alt="Thumbnail" src={vid?.snippet?.thumbnails?.high?.url}/></Link>
            </div>
           
            <div className="flex flex-col justify-start mx-5 mt-7 w-6/12">
            
                <p className="text-sm line-clamp-2">{vid?.snippet?.title}</p>
                <p className="my-2">{generateRandomNumber()}k</p>
            </div>
      
        </div>
        </div>
        </div>

    )
}
export default SideVideoCard;