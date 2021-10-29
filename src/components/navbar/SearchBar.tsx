import React from "react";
import styled from "styled-components";
import { colors } from "../../style/colors";

export const SearchBar: React.FC = () => {
  return <Input type="search" placeholder="search" />;
};

const Input = styled.input`
`;
