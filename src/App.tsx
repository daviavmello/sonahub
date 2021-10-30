import React, { useState } from "react";
import { IUserRepo, IUsers, SearchContext } from "./contexts/searchContext";

import GlobalStyle from "./style/GlobalStyle";
import { Main } from "./components/Main";
import { Navbar } from "./components/navbar/Navbar";

const App: React.FC = () => {
  const [theme, setTheme] = useState("dark");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<IUsers>({});
  const [userRepo, setUserRepo] = useState<IUserRepo>({ openModal: false });
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        users,
        setUsers,
        theme,
        setTheme,
        userRepo,
        setUserRepo,
      }}
    >
      <GlobalStyle />
      <Navbar />
      <Main />
    </SearchContext.Provider>
  );
};

export default App;
