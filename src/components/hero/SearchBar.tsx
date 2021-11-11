import _ from "lodash";
import React, { useEffect } from "react";
import styled from "styled-components";
import { getUsers } from "../../api/searchHelper";
import { useSearch } from "../../contexts/searchContext";

export const SearchBar: React.FC = () => {
  const { search, setSearch, setUsers, setBadRequest } = useSearch();

  useEffect(() => {
    const fetchSearch = async () => {
      const data = await getUsers(search);
      if (data.status >= 400) {
        setBadRequest(true);
        setTimeout(() => {
          setBadRequest(false);
          fetchSearch();
        }, 61000);
      }
      setUsers(data);
    };
    if (search.length > 0) fetchSearch();
    else setUsers({});
  }, [search, setBadRequest, setSearch, setUsers]);

  return (
    <Input
      type="search"
      placeholder="search"
      onInput={_.throttle((e) => setSearch(e.target.value), 1000)}
    />
  );
};

const Input = styled.input``;
