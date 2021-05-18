import React, { ReactElement, ChangeEvent } from "react";
import { PLATFORMS, GENRES, TAGS, SORT_BY } from "./constants";
import { Label, StyledSelect, Form } from "./styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

interface Props {
  onChange?: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GameFilter = ({ onChange }: Props): ReactElement => {
  return (
    <Form onChange={onChange}>
      <Label htmlFor="platform-select">
        Platform:
        <StyledSelect name="platform" id="platform-select">
          {PLATFORMS.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.display}
            </option>
          ))}
        </StyledSelect>
      </Label>
      <Label htmlFor="genre-select">
        Genre:
        <StyledSelect name="genre" id="genre-select">
          <option value="">All Genres</option>
          {GENRES.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.display}
            </option>
          ))}
        </StyledSelect>
      </Label>
      <Label htmlFor="sortBy-select">
        Sort By:
        <StyledSelect name="sortBy" id="sortBy-select">
          {SORT_BY.map((sortBy) => (
            <option key={sortBy.value} value={sortBy.value}>
              {sortBy.display}
            </option>
          ))}
        </StyledSelect>
      </Label>
    </Form>
  );
};

export default GameFilter;
