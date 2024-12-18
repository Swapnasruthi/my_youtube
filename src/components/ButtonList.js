import Buttons from "./Buttons";

const ButtonList = ()=>{
    const button_list = ["All","Music","podcast","news"];
    return(
        <div className="flex ml-36 m-2">
            {button_list.map((name) => <Buttons names={name}/>)}
            
        </div>
    )
}

export default ButtonList;