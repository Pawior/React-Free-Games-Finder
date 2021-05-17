import { Game } from "src/types";
import { Filter } from "src/components/GameList/types";

type Response = {
  game: Game[];
  error?: string;
};

const useFetch = (params: Filter): Response => {};
