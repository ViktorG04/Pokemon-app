import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addPokemon } from "../../redux/slice/favoriteSlice";
import Input from "../formComponents/Input";
import Textarea from "../formComponents/Textarea";
import useForm from "../../hooks/useForm";

import { Container, Form, ContainerButtons, Button } from "./FormElements";

const AddFavorite = ({ pokemon, onCloseModal }) => {
  const { values, errors, validate, onHandleChange } = useForm({
    id: pokemon.id,
    alias: "",
    image: pokemon.image,
    comment: "",
  });

  const dispatch = useDispatch();

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      dispatch(addPokemon(values));
      toast.success("Pokemon added");
      onCloseModal();
    }
  };

  return (
    <Container>
      <Form onSubmit={onHandleSubmit}>
        <h2>Safe Pokemon</h2>
        <h3>{pokemon?.name}</h3>
        <Input
          label="Alias"
          name="alias"
          value={values?.alias}
          placeholder="alias"
          onHandleChange={onHandleChange}
          error={errors?.alias}
        />
        <Textarea
          label="Comments"
          value={values?.comment}
          onHandleChange={onHandleChange}
          error={errors?.comment}
        />
        <ContainerButtons>
          <Button type="Reset" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button>Safe</Button>
        </ContainerButtons>
      </Form>
    </Container>
  );
};

export default AddFavorite;
