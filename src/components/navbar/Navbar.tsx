import React from "react";
import { Sun } from "react-feather";
import styled from "styled-components";
import { colors } from "../../style/colors";
import { Logo } from "./Logo";

export const Navbar: React.FC = () => {
  return (
    <NavWrapper>
      <Logo />
      <ColorModeIcon />
    </NavWrapper>
  );
};
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* position: sticky; */
  margin-bottom: 2rem;
  height: 5vh;
`;

const ColorModeIcon = styled(Sun)`
  width: fit-content;
  color: ${colors.medium};
`;
