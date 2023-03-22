import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { API_URL } from "../../config/config";
import { toast } from "react-hot-toast";
import { Type } from "./styled/PokemonElements";
import {
  Container,
  NamePokemon,
  Image,
  ContainerTypes,
  Exit,
  Level,
  Inner,
} from "./styled/PokemonDetailsElements";
import PokemonStat from "./PokemonStat";

const defaultValues = {
  name: "",
  sprites: { other: {} },
  base_experience: "",
  weight: "",
  stats: [],
  types: [],
};

const PokemonDetails = ({ idPokemon, onCloseModal }) => {
  const [informationPokemon, setInformationPokemon] = useState(defaultValues);
  const [imageVisible, setImageVisible] = useState(false);

  const { data, error, loading } = useFetch(`${API_URL}/pokemon/${idPokemon}`);

  const {
    name,
    sprites: { other },
    base_experience,
    weight,
    stats,
    types,
  } = informationPokemon;

  useEffect(() => {
    if (error) {
      toast.error("ERROR! getting details");
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setInformationPokemon({ ...data });
    }
  }, [data]);

  return (
    <Container>
      <Exit onClick={onCloseModal}>X</Exit>

      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <NamePokemon>{name}</NamePokemon>
          {imageVisible ? (
            <Image
              src={other["official-artwork"]?.front_shiny}
              alt={name}
              onClick={() => setImageVisible(false)}
            />
          ) : (
            <Image
              src={other["official-artwork"]?.front_default}
              alt={name}
              onClick={() => setImageVisible(true)}
            />
          )}
          <ContainerTypes>
            Type:
            {types.map((type, index) => (
              <Type key={`type-${parseInt(index)}`} color={type?.type?.name}>
                {type?.type?.name}{" "}
              </Type>
            ))}
          </ContainerTypes>
          <PokemonStat name="Base Experience" information={base_experience} />
          <PokemonStat name="Weight" information={weight} />

          {stats.slice(0, 3).map((stat, index) => (
            <div key={`stat-${parseInt(index)}`}>
              <PokemonStat name={stat?.stat?.name} information={stat?.base_stat} />
              <Level>
                <Inner stat={stat?.stat?.name} level={stat?.base_stat} />
              </Level>
            </div>
          ))}
        </>
      )}
    </Container>
  );
};

export default PokemonDetails;
