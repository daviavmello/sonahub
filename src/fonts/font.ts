import { css } from "styled-components";
import Consolas from "./Consolas.woff";

export const typeface = css`
  @font-face {
    font-family: "Consolas";
    src: local("Consolas"), local("FontName"), url(${Consolas}) format("woff");
  }
`;
