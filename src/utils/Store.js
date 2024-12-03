import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";

const Store = configureStore({
    reducer:{
        toggle: ToggleSlice,
    }
});

export default Store;