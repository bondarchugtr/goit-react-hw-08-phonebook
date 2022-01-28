import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import contactsReducer from "../redux/telbook/reducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE,
  PERSIST,
} from "redux-persist";

const logger = createLogger();

const middleware = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
  logger,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    rootReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    devTools: process.env.NODE_ENV === "development",
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middleware),
});

export const persistor = persistStore(store);
