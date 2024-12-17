import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
    name:"channel",
    initialState:{
        channelId : "",
    },
    reducers:{
        addChannel:(state, action)=>{
            state.channelId = action.payload;
        }
    }
});

export const {addChannel} = channelSlice.actions;
export default channelSlice.reducer;