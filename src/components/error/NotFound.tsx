import React, { Fragment } from "react";
import styled from "styled-components";

export const NotFound: React.FC = () => {
  return (
    <Fragment>
      <h2>Whoopsie!</h2>
      <NotFoundWrapper>
        <h4>Repo not found&nbsp;</h4>
        <span role="img">💔</span>
        <h4>.</h4>
      </NotFoundWrapper>
    </Fragment>
  );
};

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
`;