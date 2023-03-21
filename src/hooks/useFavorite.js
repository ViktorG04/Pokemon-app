import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deletePokemon } from "../redux/slice/favoriteSlice";

const useFavorite = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idPokemon, setIdPokemon] = useState(null);

  const dispatch = useDispatch();

  const onHandleDelete = (id) => {
    dispatch(deletePokemon(id));
    toast.success("pokemon removed from favorites list");
  };

  const onHandleDetails = (id) => {
    setIdPokemon(id);
    setIsOpenModal(true);
  };

  const onHandleCloseModal = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, idPokemon, onHandleCloseModal, onHandleDetails, onHandleDelete };
};

export default useFavorite;
