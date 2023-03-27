import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, ALL_POKEMONS } from "../../config/config";
import { parseName } from "../../helpers/helper";

export const getPokemons = createAsyncThunk("pokemons/All", async (_, { rejectWithValue }) => {
  try {
    const result = await consultPokemons();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const consultPokemons = async () => {
  const listPokemons = [];
  for (let i = 1; i <= ALL_POKEMONS; i++) {
    const response = await fetch(`${API_URL}/pokemon/${i}`);
    const data = await response.json();
    const { id, name, sprites, types } = data;
    const parse = parseName(name);
    const typePokemon = types.map((type) => type?.type.name);

    listPokemons.push({ id, name: parse, image: sprites.front_default, types: typePokemon });
  }

  return listPokemons;
};
