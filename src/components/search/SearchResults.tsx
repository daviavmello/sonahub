import React from "react";
import styled from "styled-components";
import { useSearch } from "../../contexts/searchContext";
import { Commits } from "./Commits";
import { SearchCard } from "./SearchCard";

export const SearchResults: React.FC = () => {
  const { users, userRepo } = useSearch();
  const { openModal } = userRepo;

  return (
    <SearchResultsWrapper>
      {openModal && <Commits />}
      <CardWrapper openModal={openModal}>
        {users &&
          users.items?.map((v, i) => (
            <SearchCard
              key={i}
              title={v.full_name}
              description={v.description}
              stars={v.stargazers_count}
              owner={v.owner.login}
              repo={v.name}
            ></SearchCard>
          ))}
      </CardWrapper>
    </SearchResultsWrapper>
  );
};

interface ICardWrapper {
  openModal: boolean;
}

const CardWrapper = styled.div<ICardWrapper>`
  position: ${(props) => (props.openModal ? "relative" : "static")};
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const SearchResultsWrapper = styled.div`
  width: calc(50vw - 7.5rem);
  height: calc(95vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;

  @media (max-width: 767px) {
    width: 100%;
    padding-left: 0;
  }

  @media (min-width: 768px) {
    width: calc(50vw - 3rem);
  }

  @media (min-width: 992px) {
    width: calc(40vw - 1rem);
  }
`;
