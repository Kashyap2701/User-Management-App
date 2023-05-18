import { configureStore } from "@reduxjs/toolkit"
import userAuthSlice from "./userAuthSlice"


const store = configureStore({
    reducer:{
        'user':userAuthSlice.reducer,
    }
})

export default store;