import React from "react";
import styled from "styled-components";
import { useSearch } from "../../contexts/searchContext";
import { numberFormatter } from "../../helpers/numberHelper";
import { SearchBar } from "./SearchBar";

export const Hero: React.FC = () => {
  const { users } = useSearch();

  return (
    <HeroWrapper>
      <h2>
        The best
        <br />
        repositories
        <br />
        one search away.
      </h2>
      <SearchBar />
      {users.items ? (
        <SearchResultsText>
          There are {numberFormatter(users.total_count!)} repos available.
        </SearchResultsText>
      ) : (
        <SearchResultsText>&nbsp;</SearchResultsText>
      )}
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  width: calc(50% - 7.5rem);
  height: calc(95vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1rem;

  @media (max-width: 767px) {
    width: 100%;
    padding-right: 0;
  }

  @media (min-width: 768px) {
    width: calc(50% - 1rem);
  }

  @media (min-width: 992px) {
    width: calc(50% - 1rem);
  }
`;

const SearchResultsText = styled.h4`
  font-family: "Consolas", "Courier", monospace;
  color: ${({ theme }) => theme.tertiary};
`;
