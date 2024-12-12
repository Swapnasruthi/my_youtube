import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"videos",
    initialState:{
        videoList:[],
    },
    reducers:{
        addVideos:(state,action)=>{
            state.videoList.push(action.payload);
        }
    }
});

export const {addVideos} = videoSlice.actions;
export default videoSlice.reducer;