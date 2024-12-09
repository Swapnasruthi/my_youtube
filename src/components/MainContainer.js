import { useSelector } from "react-redux";
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = ()=>{
    const selector = useSelector((store)=> store.toggle.isMenuOpen);

    return(
        <div className={selector? "mt-20 ml-[15rem] relative z-0" : "mt-20"}>
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}
export default MainContainer