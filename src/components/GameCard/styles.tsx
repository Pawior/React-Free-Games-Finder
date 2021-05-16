import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {
  secondaryColor,
  primaryTextColor,
  secondaryTextColor,
  tertiaryTextColor,
  backgroundColor,
} from "src/styles/theme";
import { breakpoints } from "src/styles/breakpoints";
import { CgBrowser, CgWindows } from "react-icons/cg";

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  background-color: ${secondaryColor};
  border-radius: 4px;
  text-decoration: none;
`;
export const StyledImg = styled.img`
  width: 100%;
  padding-left: -0px !important;
`;
export const StyledTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 510;
  padding-left: 3px;
  color: ${primaryTextColor};
  @media (min-width: ${breakpoints.tablet}) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Details = styled.div`
  padding: 20px;
  padding-left: 3px;
  @media (min-width: ${breakpoints.tablet}) {
    white-space: nowrap;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  padding-left: 3px;
  color: ${secondaryTextColor};
  @media (min-width: ${breakpoints.tablet}) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Genre = styled.p`
  padding: 2px 4px;
  margin: 0 8px 0 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: ${tertiaryTextColor};
  background-color: ${backgroundColor};
  float: right;
`;
const IconStyle = css`
  font-size: 2rem;
  color black;
  margin-right: 8px;
  padding-left: 3px;
`;
export const StyledCgBrowser = styled(CgBrowser)`
  ${IconStyle}
`;
export const StyledCgWindows = styled(CgWindows)`
  ${IconStyle}
`;
