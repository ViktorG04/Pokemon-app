import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const PokemonSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    addPokemon: (state, action) => {
      state.favorites.push(action.payload);
    },
    deletePokemon: (state, action) => {
      const list = state.favorites;
      state.favorites = list.filter((favorite) => favorite.alias !== action.payload);
    },
  },
});

export const { addPokemon, deletePokemon } = PokemonSlice.actions;
export default PokemonSlice.reducer;
