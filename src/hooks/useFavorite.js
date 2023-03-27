import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deletePokemon } from "../redux/slice/favoriteSlice";

const useFavorite = (openViewPokemon) => {
  const [idPokemon, setIdPokemon] = useState(null);

  const dispatch = useDispatch();

  const onHandleDelete = (id) => {
    dispatch(deletePokemon(id));
    toast.success("pokemon removed from favorites list");
  };

  const onHandleDetails = (id) => {
    setIdPokemon(id);
    openViewPokemon();
  };

  return { idPokemon, onHandleDetails, onHandleDelete };
};

export default useFavorite;
