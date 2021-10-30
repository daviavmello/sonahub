import React from "react";
import styled from "styled-components";
import { useSearch } from "../../contexts/searchContext";
import { SearchCard } from "./SearchCard";

export const SearchResults: React.FC = () => {
  const { users } = useSearch();
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <SearchResultsWrapper>
      <CardWrapper>
        {users &&
          users.items?.map((v, i) => {
            // console.log(v);

            return (
              <SearchCard
                key={i}
                title={v.full_name}
                description={v.description}
                stars={v.stargazers_count}
                owner={v.owner.login}
                repo={v.name}
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
  height: calc(95vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
`;
