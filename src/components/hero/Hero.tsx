import React from "react";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";

export const Hero: React.FC = () => {
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
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  width: calc(50vw - 7.5rem);
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
    width: calc(50vw - 3rem);
  }

  @media (min-width: 992px) {
    width: calc(40vw - 1rem);
  }
`;
