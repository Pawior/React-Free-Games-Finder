import { Game } from "src/types";
import { Filter } from "src/components/GameList/types";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_HOST, API_KEY } from "src/components/GameList/constants";

type Response = {
  games: Game[];
  error?: string;
};

const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setError] = useState<string>("");
  const { platform, genre, tag, sortBy } = params;

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
        params: {
          platform,
          category: genre,
          tag,
          "sort-by": sortBy,
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setError(e.message));
  }, [platform, genre, tag, sortBy]);
  return {
    games,
    error: err,
  };
};
export default useFetch;
