import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
  favorites: [],
};

export const PokemonSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    addPokemon: (state, action) => {
      state.notification = "successful";
      state.favorites.push(action.payload);
    },
    deletePokemon: (state, action) => {
      state.notification = "deleted";
      const list = state.favorites;
      state.favorites = list.filter((favorite) => favorite.id !== action.payload);
    },
  },
});

export const { addPokemon, deletePokemon } = PokemonSlice.actions;
export default PokemonSlice.reducer;
