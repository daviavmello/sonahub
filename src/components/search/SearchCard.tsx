import React from "react";
import { Star } from "react-feather";
import styled from "styled-components";
import { useSearch } from "../../contexts/searchContext";
import { numberFormatter } from "../../helpers/numberHelper";

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
        <p>{numberFormatter(Number(stars))}</p>
      </IconWrapper>
    </Card>
  );
};

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.card};
  border-radius: 0.5rem;
  &:hover {
    transition: all 0.5s linear;
    box-shadow: 0px 0px 15px 5px rgb(0 0 0 / 30%);
  }
  @media (max-width: 767px) {
    margin: 1rem 0;
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
  stroke: ${({ theme }) => theme.primary};
`;
