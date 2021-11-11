import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export const BadRequest: React.FC = () => {
  const [min, setMin] = useState<number>(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setMin((state) => state - 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <BadRequestWrapper>
      <Emoji>😑</Emoji>{" "}
      <h4>Oh no! Too many requests. Wait {min} seconds and try again.</h4>
    </BadRequestWrapper>
  );
};

const BadRequestWrapper = styled.div`
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

const Emoji = styled.span`
  width: auto;
  animation: 1s ${rotate} infinite;
  margin-right: 2rem;
`;
