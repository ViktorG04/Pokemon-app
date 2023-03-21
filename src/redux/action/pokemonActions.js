import { createAsyncThunk } from "@reduxjs/toolkit";
import consultPokemons from "../../helpers/apiPokemon";

export const getPokemons = createAsyncThunk("pokemons/All", async (_, { rejectWithValue }) => {
  try {
    const result = await consultPokemons();
    return result;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});
