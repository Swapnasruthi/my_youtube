import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
import channelSlice from "./channelSlice";
import searchPageSlice from "./searchPageSlice";
import buttonSlice from "./buttonSlice";
const Store = configureStore({
    reducer:{
        toggle: ToggleSlice,
        chat: chatSlice,
        search:searchSlice,
        videos:videoSlice,
        channel:channelSlice,
        searchPage:searchPageSlice,
        button:buttonSlice,
    }
});

export default Store;