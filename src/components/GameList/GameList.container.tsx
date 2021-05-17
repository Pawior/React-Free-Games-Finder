import React, {
  ReactElement,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
} from "react";
import GameListRender from "./GameList.render";
import axios from "axios";
import { Game } from "../../types";
import { API_HOST, API_KEY } from "./constants";
import { Filter } from "./types";

const GameList = (): ReactElement => {
  const [filter, setFilter] = useState<Filter>({
    platform: "browser",
    sortBy: "relevance",
  });

  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
  }, []);
  return (
    <GameListRender err={err} games={games} onFilterChange={onFilterChange} />
  );
};

export default GameList;
