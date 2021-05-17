import { breakpoints } from "src/styles/breakpoints";
import styled from "styled-components";

// export const List = styled.ul`
//   box-sizing: border-box;
//   display: block;
//   max-width: 542px;
//   margin: 0 auto;
//   padding: 0 16px;
//   list-style-type: none;

//   @media (min-width: ${breakpoints.tablet}) {
//     max-width: ${breakpoints.tablet};
//   }
//   @media (min-width: ${breakpoints.desktop}) {
//     max-width: ${breakpoints.desktop};
//   }
// `;

// export const ListItem = styled.li`
//   margin-bottom: 24px;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transform: scale(1.03);
//   }
//   @media (min-width: ${breakpoints.tablet}) {
//     display: inline-block;
//     max-width: 332px;
//     margin-right: 24px;
//     &:nth-of-type(even) {
//       margin-right: 0;
//     }
//   }
//   @media (min-width: ${breakpoints.desktop}) {
//     display: inline-block;
//     max-width: 312px;

//     &:nth-of-type(even) {
//       margin-right: 24px;
//     }
//     &:nth-of-type(3n + 3) {
//       margin-right: 0;
//     }
//   }
// `;
export const List = styled.ul`
  box-sizing: border-box;
  display: grid;
  max-width: 90%;
  margin: 0 auto;
  padding: 0 16px;
  list-style-type: none;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  grid-gap: 3rem;
  justify-content: center;
`;

export const ListItem = styled.li`
  transition: all 0.2s ease-in-out;
  grid-column: auto;
  &:hover {
    transform: scale(1.03);
  }
`;
