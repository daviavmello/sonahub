import React from "react";
import styled from "styled-components";
import { Hero } from "./hero/Hero";
import { SearchResults } from "./search/SearchResults";

export const Main: React.FC = () => {
  return (
    <MainWrapper>
      <Hero />
      <SearchResults />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
