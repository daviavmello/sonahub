import { createContext, useContext } from "react";

export interface IUsers {
  total_count?: number;
  incomplete_results?: boolean;
  items?: any[];
}

export interface IUserRepo {
  owner: string;
  repo: string;
  openModal: boolean;
}

export interface ISearchContext {
  search: string;
  setSearch: (search: string) => void;
  users: IUsers;
  setUsers: (users: IUsers) => void;
  theme: string;
  setTheme: (theme: string) => void;
  userRepo: IUserRepo;
  setUserRepo: (repo: IUserRepo) => void;
}

export const SearchContext = createContext<ISearchContext>({
  search: "",
  setSearch: (search: string) => search,
  users: {},
  setUsers: (users: IUsers) => users,
  theme: "dark",
  setTheme: (theme: string) => theme,
  userRepo: { owner: "", repo: "", openModal: false },
  setUserRepo: (repo: IUserRepo) => repo,
});
export const useSearch = () => useContext(SearchContext);
