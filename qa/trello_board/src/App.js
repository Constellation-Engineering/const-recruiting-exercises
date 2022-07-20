import { ThemeProvider } from "styled-components";
import Board from "./board";
import { dummyData } from "./data";
import { GlobalStyle, lightTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Board initialData={dummyData} />
    </ThemeProvider>
  );
}

export default App;
