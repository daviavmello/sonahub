import React from "react";
import styled from "styled-components";
import { colors } from "../../style/colors";

interface ISearchCard {
  title: string;
  description: string;
  stars: string;
}

export const SearchCard: React.FC<ISearchCard> = ({
  title,
  description,
  stars,
}) => {
  return (
    // <CardWrapper>
      <Card>
        <h3>{title}</h3>
      </Card>
    /* </CardWrapper> */
  );
};

// const CardWrapper = styled.div`
// `;

const Card = styled.div`
  background: ${colors.medium};
  margin: 1rem;
  :first-child {
    margin-top: 0;
  }
`;
