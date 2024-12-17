import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
import channelSlice from "./channelSlice";
const Store = configureStore({
    reducer:{
        toggle: ToggleSlice,
        chat: chatSlice,
        search:searchSlice,
        videos:videoSlice,
        channel:channelSlice,
    }
});

export default Store;