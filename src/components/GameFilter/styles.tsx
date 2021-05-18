import styled from "styled-components";
import { backgroundColor, secondaryTextColor } from "src/styles/theme";
import { breakpoints } from "src/styles/breakpoints";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 542px;
  padding: 0 16px;
  margin: 24px auto;
  color: ${secondaryTextColor};
  box-sizing: border-box;
  @media (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
  }
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 1010px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-right: 16px;
  flex-basis: 25%;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  margin-top: 8px;
  color: #32383e;
  background-color: ${backgroundColor};
  border: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    color: black;
  }
`;
