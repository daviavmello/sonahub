import React, { useState } from "react";
import { IUserRepo, IUsers, SearchContext } from "./contexts/searchContext";

import GlobalStyle from "./style/GlobalStyle";
import { Main } from "./components/Main";
import { Navbar } from "./components/navbar/Navbar";
import { darkTheme, lightTheme } from "./style/colors";
import { ThemeProvider } from "styled-components";

const App: React.FC = () => {
  const [colorMode, setColorMode] = useState<string>(
    localStorage.getItem("color-mode") || "dark"
  );
  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState<IUsers>({});
  const [userRepo, setUserRepo] = useState<IUserRepo>({
    owner: "",
    repo: "",
    openModal: false,
  });
  const [badRequest, setBadRequest] = useState<boolean>(false);

  return (
    <ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
      <SearchContext.Provider
        value={{
          search,
          setSearch,
          users,
          setUsers,
          colorMode,
          setColorMode,
          userRepo,
          setUserRepo,
          badRequest,
          setBadRequest,
        }}
      >
        <GlobalStyle />
        <Navbar />
        <Main />
      </SearchContext.Provider>
    </ThemeProvider>
  );
};

export default App;
