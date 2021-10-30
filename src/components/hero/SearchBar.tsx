import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useSearch } from "../../contexts/searchContext";
import { colors } from "../../style/colors";

export const SearchBar: React.FC = () => {
  const { search, setSearch, setUsers } = useSearch();

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/search/repositories?q=${search}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
          },
        }
      );

      try {
        if (res.status === 200) {
          setUsers(res.data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    if (search.length > 0) getUsers();
  }, [search, setUsers]);

  return (
    <Input
      type="search"
      placeholder="search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

const Input = styled.input``;
