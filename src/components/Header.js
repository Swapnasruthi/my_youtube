import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/ToggleSlice";

const Header = ()=> {

    const dispatch = useDispatch();
    const handleMenuToggle = () => {
        dispatch(toggleMenu());
    }
    return(
        <div className="flex justify-between mt-4 shadow-lg items-center p-1">
            <div className="flex">
                <img 
                    onClick={() => handleMenuToggle()}
                    className="mr-2 w-14 h-12"
                    alt="menu" 
                    src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
                />
                <img alt="yt logo" 
                    className="w-24 h-12"
                    src="https://cdn.worldvectorlogo.com/logos/youtube-6.svg"
                />
            </div>

            <div className="flex w-6/12 h-9 relative">
                <input className="border border-gray-400 focus:outline-none w-full mr-1 rounded-2xl p-4" type="text" />
                <button className="absolute right-1 border border-gray-400 bg-slate-200 p-2 rounded-2xl font-bold w-9"><img alt="seach" src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png"/></button>
            </div>

            <div className="">
                <img alt="user profile"
                    className="w-16 h-10 mr-5"
                    src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"/>
            </div>
        </div>
    )
}
export default Header;