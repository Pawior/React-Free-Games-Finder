import React, { ReactElement, ChangeEvent } from "react";
import { PLATFORMS, GENRES, TAGS, SORT_BY } from "./constants";
import { Label, Select, Form } from "./styles";

interface Props {
  onChange?: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GameFilter = ({ onChange }: Props): ReactElement => {
  return (
    <form>
      <Label htmlFor="platform-select">
        Platform:
        <Select name="platform" id="platform-select">
          {PLATFORMS.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.display}
            </option>
          ))}
        </Select>
      </Label>
      <Label htmlFor="genre-select">
        Genre:
        <Select name="genre" id="genre-select">
          <option value="">All Genres</option>
          {GENRES.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.display}
            </option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="tag-select">
        Tag:
        <Select name="tag" id="tag-select">
          <option value="">All Tags</option>
          {TAGS.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.display}
            </option>
          ))}
        </Select>
      </Label>

      <Label htmlFor="sortBy-select">
        Sort By:
        <Select name="sortBy" id="sortBy-select">
          {SORT_BY.map((sortBy) => (
            <option key={sortBy.value} value={sortBy.value}>
              {sortBy.display}
            </option>
          ))}
        </Select>
      </Label>
    </form>
  );
};

export default GameFilter;
