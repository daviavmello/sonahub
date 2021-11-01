import React, { useEffect } from "react";
import styled from "styled-components";
import { getUsers } from "../../api/searchHelper";
import { useSearch } from "../../contexts/searchContext";

export const SearchBar: React.FC = () => {
  const { search, setSearch, setUsers } = useSearch();

  useEffect(() => {
    const fetchSearch = async () => {
      const data = await getUsers(search);
      setUsers(data);
    };
    if (search.length > 0) fetchSearch();
    else setUsers({});
  }, [search, setSearch, setUsers]);

  return (
    <Input
      type="search"
      placeholder="search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

const Input = styled.input``;
