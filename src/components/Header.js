import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/ToggleSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { addSearchText } from "../utils/searchSlice";

const Header = ()=> {
    const [search, setSearch] = useState("");
    const [suggestion, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleMenuToggle = () => {
        dispatch(toggleMenu());
    }
    

    useEffect(()=>{
        //here we'll make api calls after every update of search key
        //but if the difference between 2 api calls is <200ms. them, decline the api
        const timer = setTimeout(()=> fetchingSearchSuggestions(), 200);

        return () => {
            clearTimeout(timer);
        }
        
    },[search]);
    

  
    const fetchingSearchSuggestions = async()=>{
        const res = await fetch(YOUTUBE_SEARCH_API+search);
        const data = await res.json();
        setSuggestions(data[1]);
    }
    const handleSuggestions = (e) =>{
        setSearch(e.target.value);
    }

    const handleSearch = (e)=>{
        dispatch(addSearchText(search));
    }
    const combination = (e) =>{
        handleSearch(e);
        handleSuggestions(e);
    }
    
    const onClickSuggestion = (e) => {
        const suggestiontext = e.target.innerText.split(" ").join("+");
    
        setSearch(e.target.innerText);
      
      };

    const logoClick = ()=>{
        
        dispatch(addSearchText(""));
        setSearch("");
        navigate("/");
        
    }
    return(
        <div className="bg-white flex justify-between shadow-lg items-center p-1 fixed w-full z-10">
            <div className="flex">
                <img 
                    onClick={() => handleMenuToggle()}
                    className="mr-2 w-14 h-12 cursor-pointer"
                    alt="menu" 
                    src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
                />
                <img alt="yt logo"
                    onClick={()=>(logoClick())} 
                    className="w-24 h-12 cursor-pointer"
                    src="https://cdn.worldvectorlogo.com/logos/youtube-6.svg"
                />
            </div>

            <div >
                <div className="flex w-[40rem] h-9 relative">
                <input 
                placeholder="search..."
                value={search}
                onChange={handleSuggestions}
                onFocus={()=> setShowSuggestions(true)}
                onBlur={()=> setShowSuggestions(false)}
                className="border border-gray-400 focus:outline-none w-full mr-1 rounded-2xl p-4" type="text" />
                <button  
                onClick={()=>handleSearch()}
                className="absolute right-1 border border-gray-400 bg-slate-200 p-2 rounded-2xl font-bold w-9"><img alt="seach" src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png"/></button>
                </div>
                {showSuggestions && <div className={suggestion.length!=0 ? "fixed bg-white w-[38rem] py-4 px-2 rounded-lg shadow-lg border border-gray-200" : "hidden"}>
                    <ul>
                       {suggestion && suggestion.map((item)=> 
                       (<li 
                          
                            onMouseDown={(e) => onClickSuggestion(e)}
                            className="flex items-center hover:bg-gray-200 w-full p-1 rounded-lg">
                            
                            <svg 
                            
                            className="mr-1"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="18" viewBox="0 0 24 24" width="18" focusable="false" aria-hidden="true"><path clipRule="evenodd" d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z" fillRule="evenodd"></path></svg>
                            <div>
                                {item} 
                            </div>
                           
                           </li>))}

                            
                        
                        
                        
                    </ul>
                </div>}
                
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