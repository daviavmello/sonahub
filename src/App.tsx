import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import GlobalStyle from "./style/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
};

export default App;
