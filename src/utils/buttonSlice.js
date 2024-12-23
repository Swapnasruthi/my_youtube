import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
    name:"button",
    initialState:{
        buttonName:"",
    },
    reducers:{
        addButton :(state,action)=>{
            state.buttonName = action.payload;
        }
    }
});

export const {addButton} = buttonSlice.actions;
export default buttonSlice.reducer;