import { breakpoints } from "src/styles/breakpoints";
import styled from "styled-components";

export const List = styled.ul`
  box-sizing: border-box;
  display: block;
  max-width: 542px;
  margin: 0 auto;
  padding: 0 16px;
  list-style-type: none;

  @media (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
  }
`;

export const ListItem = styled.li`
  margin-bottom: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: inline-block;
    max-width: 332px;
    margin-right: 24px;
    &:nth-of-type(even) {
      margin-right: 0;
    }
  }
`;
