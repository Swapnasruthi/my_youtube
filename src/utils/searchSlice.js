import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchText:"",
    },
    reducers:{
        addSearchText:(state,action)=>{
            state.searchText = action.payload;
        },
        removeSearchText:(state,action)=>{
            state.searchText = "";
        }
    }
});

export const {addSearchText,removeSearchText} = searchSlice.actions;
export default searchSlice.reducer;