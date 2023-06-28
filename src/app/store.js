import { configureStore } from "@reduxjs/toolkit";

//store is our systems state of truth

import { cryptoapi } from "../services/cryptoapi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
export default configureStore({
    reducer: {
        [cryptoapi.reducerPath] : cryptoapi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoapi.middleware).concat(cryptoNewsApi.middleware),
});