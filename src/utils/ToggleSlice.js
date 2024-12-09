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
        closeMenu :(state) => {
            state.isMenuOpen = false;
        }
    },
});

export const {toggleMenu, closeMenu} = ToggleSlice.actions;
export default ToggleSlice.reducer;