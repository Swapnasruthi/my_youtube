import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/ToggleSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";

const WatchLater = ()=>{
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const singleVideo = useSelector((store) => store?.videos?.videoList[1].find((video) => video.id === videoId));

    console.log(singleVideo);

    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
    return(
        <div className="w-full">
        <div className="flex w-full relative">
            <div className="mt-16 ml-10 flex justify-center rounded-lg">
                <iframe width="1000" height="520" 
                className="rounded-xl"
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            
            <div className="w-full">
                <Livechat/>
            </div>
        </div>
            <div className="font-bold text-xl mx-12 absolute mt-[-3rem] w-8/12 ">
                <p >{singleVideo?.snippet?.title}</p>
            </div>
            <div className="flex flex-row w-8/12 border-black ml-10 justify-between p-2">
                <div className="flex flex-row items-center">
                    <div>
                        <img alt="user profile"
                        className="w-11 h-11 mr-2 rounded-full"
                        src={singleVideo?.snippet?.thumbnails?.default?.url}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-lg">{singleVideo?.snippet?.channelTitle}</p>
                        <p className="text-sm text-gray-700 ">230k subscribers</p>
                    </div>
                    <div className="ml-5">
                        <button className="bg-black text-white p-2 rounded-3xl font-bold">subscribe</button>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="w-[10rem]">
                        <div className="flex hover:bg-gray-300  bg-slate-200 border-black p-2 rounded-3xl mr-5">
                            <p className=" rounded-3xl rounded-r-none flex w-9/12  border border-l-0 border-t-0 border-b-0 border-r-2 border-black"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                                    </svg>
                            <span className="mx-1 font-semibold">{singleVideo?.statistics?.likeCount}</span>
                            
                            </p>
                            <p className="w-3/12 ml-2 rounded-3xl  hover:bg-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                            </svg>

                            </p>
                        </div>
                        
                    </div>
                    <div>
                    <div className="hover:bg-gray-300 flex p-2 items-center bg-slate-200 rounded-3xl">
                            <p className=" rounded-3xl flex items-center"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                </svg>

                                <span className="mx-1 font-semibold text-center">Share</span>

                            </p>
                    </div>
                    </div>
                    <div>
                        <div className="mx-2 hover:bg-gray-300 flex p-2 items-center bg-slate-200 rounded-3xl">
                                <p className=" rounded-3xl flex items-center"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>


                                    <span className="mx-1 font-semibold text-center">Download</span>

                                </p>
                        </div>
                    </div>

                    <div>
                        <div className="mx-2 hover:bg-gray-300 flex p-2 items-center bg-slate-200 rounded-3xl">
                                <p className=" rounded-3xl flex items-center"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>


                                </p>
                        </div>
                    </div>
                </div>
            </div>
        <CommentsContainer/>
        </div>
    )
}
export default WatchLater;