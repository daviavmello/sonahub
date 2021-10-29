import React from "react";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";

export const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <h3>The best repositories one search away.</h3>
      <SearchBar />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  width: calc(50vw - 2rem);
  height: calc(95vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1rem;
`;
