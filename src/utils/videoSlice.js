import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"videos",
    initialState:{
        videoList:[],
    },
    reducers:{
        addVideos:(state,action)=>{
            state.videoList.push(action.payload);
        },
        removeVideos:(state,action)=>{
            state.videoList = [];
        }
    }
});

export const {addVideos, removeVideos} = videoSlice.actions;
export default videoSlice.reducer;