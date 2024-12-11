import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";
import chatSlice from "./chatSlice";
const Store = configureStore({
    reducer:{
        toggle: ToggleSlice,
        chat: chatSlice,
    }
});

export default Store;