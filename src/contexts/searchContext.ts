import { createContext, useContext } from "react";

export interface IUsers {
  total_count?: number;
  incomplete_results?: boolean;
  items?: any[];
}

export interface ISearchContext {
  search: string;
  setSearch: (search: string) => void;
  users: IUsers;
  setUsers: (users: IUsers) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export const SearchContext = createContext<ISearchContext>({
  search: "",
  setSearch: (search: string) => search,
  users: {},
  setUsers: (users: IUsers) => users,
  theme: "dark",
  setTheme: (theme: string) => theme,
});
export const useSearch = () => useContext(SearchContext);
