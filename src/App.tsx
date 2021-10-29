import React from "react";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import GlobalStyle from "./style/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
