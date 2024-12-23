import { useDispatch, useSelector } from "react-redux"
import { addButton } from "../utils/buttonSlice";

const Buttons = ({names}) => {
    const dispatch = useDispatch();
    const buttonClick = (names)=>{
        dispatch(addButton(names.toLowerCase()));
    }
    return(
        <div>
            <button 
            onClick={()=> buttonClick(names)}
            className="text-sm px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl font-semibold m-1">
                {names}
            </button>
        </div>
    )
}
export default Buttons;