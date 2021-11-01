import React from "react";
import { Box } from "react-feather";
import styled from "styled-components";

export const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      <BoxLogo />
      <h1>sonahub</h1>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const BoxLogo = styled(Box)`
  margin-right: 1rem;
  width: fit-content;
  color: ${({ theme }) => theme.medium};
`;
