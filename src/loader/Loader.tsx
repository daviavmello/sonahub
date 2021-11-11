import React from "react";
import { Box } from "react-feather";
import styled, { keyframes } from "styled-components";

export const Loader: React.FC = () => {
  return (
    <LogoWrapper>
      <BoxLogo />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const BoxLogo = styled(Box)`
  width: auto;
  color: ${({ theme }) => theme.secondary};
  animation: 1s ${rotate} infinite;
`;
