import React from "react";
import styled from "styled-components";
import { useSearch } from "../../contexts/searchContext";
import { numberFormatter } from "../../helpers/numberHelper";
import { SearchBar } from "./SearchBar";

export const Hero: React.FC = () => {
  const { users, badRequest } = useSearch();

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
      {!badRequest && users.items ? (
        <h4>
          There are {numberFormatter(users.total_count!)} repos available.
        </h4>
      ) : (
        <h4>&nbsp;</h4>
      )}
      <Credit>
        <CreditText>
          Made with&nbsp; <span>❤️</span>&nbsp; by{" "}
          <span
            onClick={() =>
              window.open("https://github.com/daviavmello", "_blank")
            }
          >
            Davi Mello
          </span>
          .
        </CreditText>
      </Credit>
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

const Credit = styled.div`
  position: absolute;
  bottom: 2rem;
`;

const CreditText = styled.p`
  color: ${({ theme }) => theme.medium};

  span {
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.medium};
    }
  }
`;
