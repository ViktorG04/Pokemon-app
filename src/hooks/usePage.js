import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ITEMS_PER_PAGE } from "../config/config";

const usePage = (list, name) => {
  const [word, setWord] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [params, setParams] = useSearchParams({});

  useEffect(() => {
    if (word) {
      const filterPokemons = list.filter((pokemon) =>
        pokemon[name].toLocaleLowerCase().includes(word)
      );
      setCurrentItems(filterPokemons);
      setCurrentPage(0);
      setParams({ search: `${word}` });
    } else {
      setCurrentItems(list.slice(0, ITEMS_PER_PAGE));
    }
  }, [list, word, name, setParams]);

  useEffect(() => {
    const page = params.get("page");
    const search = params.get("search");

    if (!page && !search) {
      return;
    }

    if (page) {
      const index = page - 1;
      const firstIndex = index * ITEMS_PER_PAGE;
      const lastIndex = firstIndex ? firstIndex * 2 : ITEMS_PER_PAGE;
      setCurrentItems(list.slice(firstIndex, lastIndex));
      setCurrentPage(index);
    }

    if (search) {
      const filterPokemons = list.filter((pokemon) =>
        pokemon.name.toLocaleLowerCase().includes(search)
      );
      setCurrentItems(filterPokemons);
      setCurrentPage(0);
    }
  }, [params, list]);

  const buttonPrev = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) {
      return;
    }
    return setParams({ page: `${prevPage + 1}` });
  };

  const buttonNext = () => {
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;

    if (list.length <= firstIndex) {
      return;
    }

    setParams({ page: `${nextPage + 1}` });
  };

  const catchCharacters = (event) => {
    setWord((event?.target.value).toLocaleLowerCase());
  };

  return { word, catchCharacters, currentItems, currentPage, buttonPrev, buttonNext };
};

export default usePage;
