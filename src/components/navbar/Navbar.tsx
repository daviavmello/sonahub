import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

export const Navbar: React.FC = () => {
  return (
    <NavWrapper>
      <Logo />
      <SearchBar />
    </NavWrapper>
  );
};
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding-bottom: 2rem;
`;
