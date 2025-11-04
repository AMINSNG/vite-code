import axios from "axios";

export const getCharacter = async () =>
  axios.get("https://rickandmortyapi.com/api/character?page=2");
