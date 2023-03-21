import { createSlice } from "@reduxjs/toolkit";
import { getPokemons } from "../action/pokemonActions";

const initialState = {
  loading: false,
  request: true,
  error: null,
  pokemons: [],
};

export const PokemonSlice = createSlice({
  name: "pokemons",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => ({
        ...state,
        loading: true,
        request: false,
      }))
      .addCase(getPokemons.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        pokemons: action.payload,
      }))
      .addCase(getPokemons.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }));
  },
});

export default PokemonSlice.reducer;
