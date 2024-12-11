const Comments = ({content})=>{
    
    return(
        <div className="flex flex-row items-center bg-gray-200 rounded-lg mb-2 p-1">
            <img 
            className="w-16 h-10"
            alt="user" src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"/>
            <div className="flex flex-col">
                <p className="font-semibold">{content.name}</p>
                <p>{content.text}</p>
            </div>
            
        </div>
    )
}
export default Comments;