import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { authApi } from "./auth/services";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    authApi: authApi.reducer,
    authReducer: persistedReducer,
  },
  middleware: [thunk, authApi.middleware],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
