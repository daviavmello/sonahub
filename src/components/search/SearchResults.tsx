import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearch } from "../../contexts/searchContext";
import { Loader } from "../../loader/Loader";
import { BadRequest } from "../error/BadRequest";
import { NotFound } from "../error/NotFound";
import { Commits } from "./Commits";
import { SearchCard } from "./SearchCard";

export const SearchResults: React.FC = () => {
  const { search, users, userRepo, badRequest } = useSearch();
  const { openModal } = userRepo;

  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<Array<any> | null>(null);

  useEffect(() => {
    const handleSearch = () => {
      if (users.items) {
        setResults(
          [...users.items]?.sort((a, b) =>
            a.stargazers_count < b.stargazers_count ? 1 : -1
          )
        );
        return setLoading(false);
      }
    };
    handleSearch();
    return () => setLoading(true);
  }, [users.items]);

  return (
    <SearchResultsWrapper openModal={openModal}>
      {openModal && <Commits />}
      {badRequest && <BadRequest />}
      <CardWrapper>
        {loading && !badRequest && search.length > 0 && <Loader />}
        {!loading &&
          results?.map((v, i) => (
            <SearchCard
              key={i}
              title={v.full_name}
              description={v.description}
              stars={v.stargazers_count}
              owner={v.owner.login}
              repo={v.name}
            ></SearchCard>
          ))}
        {!loading && !badRequest && results?.length === 0 && <NotFound />}
      </CardWrapper>
    </SearchResultsWrapper>
  );
};

interface ICardWrapper {
  openModal: boolean;
}

const CardWrapper = styled.div`
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const SearchResultsWrapper = styled.div<ICardWrapper>`
  position: ${(props) => (props.openModal ? "relative" : "static")};
  width: calc(50% - 7.5rem);
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
    width: calc(50% - 1rem);
  }

  @media (min-width: 992px) {
    width: calc(50% - 1rem);
  }
`;
