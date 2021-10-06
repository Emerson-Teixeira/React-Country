import { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme1, theme2 } from "./assets/theme/themes.js";
import { GlobalStyle } from "./assets/GlobalStyle/GlobalStyle";

import Header from "./components/Header.js";
import Home from "./components/Home.js";
//import DescriptionPage from "./components/DescriptionPage.js";

import { Container } from "./components/styles/Container.styled";
//<Route component={DescriptionPage} path="/:name" exact />
const objTheme = {
  dark: theme1,
  light: theme2,
};

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={objTheme[theme]}>
      <GlobalStyle />
      <Container>
        <Header setTheme={setTheme} theme={theme} />
        <BrowserRouter>
          <Route component={Home} path="/" exact />
          
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
