import Buttons from "./Buttons";

const ButtonList = ()=>{
    const button_list = ["All","Music","Mixes","Podcasts","Movies","Web series","startup company","Game shows","Live","Visual Effects","valentines","pushpa 2"];
    return(
        <div className="m-2 flex justify-center">
            {button_list.map((name) => <Buttons names={name}/>)}
            
        </div>
    )
}

export default ButtonList;