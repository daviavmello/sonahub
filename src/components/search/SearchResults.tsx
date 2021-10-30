import React from "react";
import styled from "styled-components";
import { useSearch } from "../../contexts/searchContext";
import { SearchCard } from "./SearchCard";

export const SearchResults: React.FC = () => {
  const { users } = useSearch();
  return (
    <SearchResultsWrapper>
      <CardWrapper>
        {users &&
          users.items?.map((v, i) => {
            console.log(v.full_name);

            return (
              <SearchCard
                key={i}
                title={v.full_name}
                description={v.decription}
                stars={v.stargazers_count}
              ></SearchCard>
            );
          })}
      </CardWrapper>
    </SearchResultsWrapper>
  );
};

const CardWrapper = styled.div`
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const SearchResultsWrapper = styled.div`
  width: calc(50vw - 7.5rem);
  height: calc(95vh - 7rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0 0 1rem;
`;
