import { createSlice } from "@reduxjs/toolkit";

const searchPageSlice = createSlice({
    name:"searchPage",
    initialState:{
        isSearchPage : false,
    },
    reducers:{
        toggleSearchPage:(state,action)=>{
            state.isSearchPage = state.isSearchPage ? false:true;
        }
    }
});

export const {toggleSearchPage} = searchPageSlice.actions;
export default searchPageSlice.reducer;