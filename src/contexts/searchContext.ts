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
  colorMode: string;
  setColorMode: (colorMode: string) => void;
  userRepo: IUserRepo;
  setUserRepo: (repo: IUserRepo) => void;
  badRequest: boolean;
  setBadRequest: (badRequest: boolean) => void;
}

export const SearchContext = createContext<ISearchContext>({
  search: "",
  setSearch: (search: string) => search,
  users: {},
  setUsers: (users: IUsers) => users,
  colorMode: "dark",
  setColorMode: (colorMode: string) => colorMode,
  userRepo: { owner: "", repo: "", openModal: false },
  setUserRepo: (repo: IUserRepo) => repo,
  badRequest: false,
  setBadRequest: (badRequest: boolean) => badRequest
});
export const useSearch = () => useContext(SearchContext);
