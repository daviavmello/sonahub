import React from "react";
import styled from "styled-components";

export const Commits: React.FC = () => {

  return (
      <CommitsWrapper>
        
      </CommitsWrapper>
  );
};

const CommitsWrapper = styled.div`
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const CommitsRow = styled.div``