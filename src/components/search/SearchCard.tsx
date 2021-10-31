import React from "react";
import { Star } from "react-feather";
import styled from "styled-components";
import { useSearch } from "../../contexts/searchContext";
import { colors } from "../../style/colors";

interface ISearchCard {
  title: string;
  description: string;
  stars: string;
  owner: string;
  repo: string;
}

export const SearchCard: React.FC<ISearchCard> = ({
  title,
  description,
  stars,
  owner,
  repo,
}) => {
  const { setUserRepo } = useSearch();

  return (
    <Card onClick={() => setUserRepo({ owner, repo, openModal: true })}>
      <h3>{title}</h3>
      <Description>
        <p>{description}</p>
      </Description>
      <IconWrapper>
        <StarIcon />
        <p>{stars}</p>
      </IconWrapper>
    </Card>
  );
};

const Card = styled.div`
  background: ${colors.medium};
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
  border: 2px solid ${colors.medium};
  border-radius: 0.5rem;
  &:hover {
    transition: all 0.5s linear;
    box-shadow: 0px 0px 15px 5px rgb(0 0 0 / 80%);
  }
`;

const Description = styled.div`
  margin-bottom: 0.5rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled(Star)`
  margin-right: 0.5rem;
  stroke: ${colors.primary};

  &:hover {
    fill: ${colors.primary};
  }
`;
