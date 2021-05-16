import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Game } from "../../types";
import {
  StyledLink,
  StyledImg,
  StyledTitle,
  Description,
  Genre,
} from "./styles";

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre } = content;

  const link = `/game/${id}`;

  return (
    <StyledLink to={link}>
      <StyledImg alt={` ${title} thumbnail`} src={thumbnail}></StyledImg>
      <StyledTitle> {title} </StyledTitle>
      <Description> {short_description}</Description>
      <Genre> {genre}</Genre>
    </StyledLink>
  );
};

export default GameCard;
