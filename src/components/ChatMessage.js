const ChatMessage = ({name, message})=>{
    return(
        <div className="flex items-center rounded-lg shadow-lg p-2">
            <img alt="user profile"
                    className="w-10 h-6 "
                    src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"/>
            <span className="font-bold mr-2">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage;