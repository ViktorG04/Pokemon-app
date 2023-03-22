import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 20;

const usePage = (list, name) => {
  const [word, setWord] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (word) {
      const filterPokemons = list.filter((pokemon) =>
        pokemon[name].toLocaleLowerCase().includes(word)
      );
      setCurrentItems([...filterPokemons]);
      setCurrentPage(0);
    } else {
      setCurrentItems([...list].splice(0, ITEMS_PER_PAGE));
    }
  }, [list, word, name]);

  const buttonPrev = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) {
      return;
    }

    const firstIndex = prevPage * ITEMS_PER_PAGE;
    setCurrentItems([...list].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  };

  const buttonNext = () => {
    const allElements = list.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;

    if (allElements <= firstIndex) {
      return;
    }
    setCurrentItems([...list].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);
  };

  const catchCharacters = (event) => {
    setWord((event?.target.value).toLocaleLowerCase());
  };

  return { word, catchCharacters, currentItems, currentPage, buttonPrev, buttonNext };
};

export default usePage;
