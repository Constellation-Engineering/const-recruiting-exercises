import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  boardBackground: "#8993A4",
  primaryButton: "#61bd4f",
  columnBackground: "#EBECF0",
  columnBackgroundHover: "#E3FCEF",
  addNewItemHover: "#C1C7D0",
  cardDraggingOver: "#FFEBE6",
  cardDraggingFrom: "#E6FCFF",
  cardDraggingBorder: "rgba(9, 30, 66, 0.71)",
  lightest: "#FFFFFF",
  cardBackgroundDragging: "#EAE6FF",
  cardBorder: "#091E42",
  cardShallow: "#A5ADBA",
  columnNameFocus: "#eeb0b0",
  modalOverlay: "rgba(103, 103, 103, 0.75)",
};

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  border: none;
  cursor: pointer;
}
`;
