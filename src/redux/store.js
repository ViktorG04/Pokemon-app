import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { STORE_KEY } from "../config/config";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import pokemonReducer from "./slice/pokemonSlice";
import favoriteReducer from "./slice/favoriteSlice";

const combination = combineReducers({
  pokemons: pokemonReducer,
  favorite: favoriteReducer,
});

const persistConfig = {
  key: "pokemon",
  storage,

  transforms: [
    encryptTransform({
      secretKey: STORE_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, combination);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persist = persistStore(store);
