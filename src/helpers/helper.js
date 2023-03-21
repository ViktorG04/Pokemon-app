export const parseName = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};

export const groupPokemons = (pokemons) => {
  const group = [];
  do {
    group.push(pokemons.splice(0, 3));
  } while (pokemons.length !== 0);

  return group;
};

export const url = () => {
  const url = window.location.href.split("/");
  const foundUrl = url.splice(3, url.length);
  return foundUrl.join("/");
};
