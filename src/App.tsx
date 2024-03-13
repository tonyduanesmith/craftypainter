import { ThemeProvider } from "styled-components";
import { Main } from "./pages/Main/Main";
import { theme } from "@xeno/theme/theme";
import { GlobalStyles } from "@xeno/theme/globalStyled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
}

export default App;
