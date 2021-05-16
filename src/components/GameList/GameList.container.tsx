import React, { ReactElement, useState, useEffect } from "react";
import GameListRender from "./GameList.render";
import axios from "axios";
import { Game } from "../../types";
import { API_HOST, API_KEY } from "./constants";

const GameList = (): ReactElement => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
        params: {
          platform: "browser",
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setError(e.message));
  }, []);
  return <GameListRender err={err} games={games} />;
};

export default GameList;
