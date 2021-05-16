import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Game } from "../../types";
import { WINDOWS, BROWSER } from "./constants";
import { SiWindows } from "react-icons/si";
import { GoBrowser } from "react-icons/go";
import { CgBrowser, CgWindows } from "react-icons/cg";
import {
  StyledLink,
  StyledImg,
  StyledTitle,
  Description,
  Genre,
  StyledCgBrowser,
  StyledCgWindows,
  Details,
} from "./styles";

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre, platform } = content;
  console.log(platform);
  const icons = platform.split(",").map((p) => {
    let icon = null;
    switch (p.trim()) {
      case BROWSER:
        icon = <StyledCgBrowser />;
        break;
      case WINDOWS:
        icon = <StyledCgWindows />;
        break;
      default:
        break;
    }
    return icon;
  });
  const link = `/game/${id}`;

  return (
    <StyledLink to={link}>
      <StyledImg alt={` ${title} thumbnail`} src={thumbnail}></StyledImg>
      <Details>
        <StyledTitle> {title} </StyledTitle>
        <Description> {short_description}</Description>
        <Genre> {genre}</Genre>
        {icons}
      </Details>
    </StyledLink>
  );
};

export default GameCard;
