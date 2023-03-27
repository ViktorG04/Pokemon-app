import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const PokemonSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    addPokemon: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    deletePokemon: (state, action) => {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload);
    },
  },
});

export const { addPokemon, deletePokemon } = PokemonSlice.actions;
export default PokemonSlice.reducer;
