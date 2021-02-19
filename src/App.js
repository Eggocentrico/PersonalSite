import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import themes from "./utils/theme";
//COMPONENTS
import Navbar from "./components/Navbar";
//ROUTES
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
//UTILITIES

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    font-family: 'Montserrat';
  }
  #root {
    height: 100%;
  }
  * {
    transition: color 0.25s ease-out, background-color 0.25s ease-out;
  }
`;

const SHome = styled(Home)`
  margin: 0;
  padding: 0;
`;

export default function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <GlobalStyles />
      <Router>
        <Navbar
          title="Jhonatan"
          themeIndex={themeIndex}
          setThemeIndex={setThemeIndex}
        ></Navbar>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/">
            <SHome></SHome>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
