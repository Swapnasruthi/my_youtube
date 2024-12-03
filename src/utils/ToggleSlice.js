import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
    name:"toggle",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const {toggleMenu} = ToggleSlice.actions;
export default ToggleSlice.reducer;