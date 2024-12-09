const Buttons = ({names}) => {
    return(
        <div>
            <button className="text-sm px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl font-semibold m-1">
                {names}
            </button>
        </div>
    )
}
export default Buttons;