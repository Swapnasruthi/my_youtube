import { useSelector } from "react-redux";
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"
import Header from "./Header";

const MainContainer = ()=>{
    const selector = useSelector((store)=> store.toggle.isMenuOpen);

    return(
        <div >
            <Header/>
       
            <div className={selector? "mt-20 ml-[7rem] relative z-0" : "mt-20"}>
            <ButtonList/>
            </div>
            
            <div className={selector? " ml-[15rem] relative z-0" : ""}>
            <VideoContainer/>
            </div>
            
        </div>
    )
}
export default MainContainer