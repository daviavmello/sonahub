import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
}
html {
  background: ${colors.primary};
h1 {
  text-transform: capitalize;
  color: ${colors.medium};
  margin: 0;
  font-weight: 400;
  font-size: x-large;
}

h2 {
  color: ${colors.tertiary};
  margin-bottom: 2rem;
}

p {
  line-height: 1.7rem;
}

input {
  box-sizing: border-box;
  background: transparent;
  color: ${colors.secondary};
  border: 0;
  border: 2px solid ${colors.medium};
  border-radius: 0.5rem;
  padding: 0.5rem;
  ::placeholder {
    font-family: "Consolas", "Courier", monospace;
    color: ${colors.medium};
    text-transform: capitalize;
  }
  :focus {
    outline: none;
    box-shadow: 0px 0px 15px 5px rgb(0 0 0 / 30%);
    border: 2px solid ${colors.tertiary};
    transition: all 0.5s linear;
  }
}

button {
  color: ${colors.medium};
  background: ${colors.primary};
  padding: 0.25rem 0.5rem;
  border: 1px solid ${colors.medium};
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-family: "Consolas", "Courier", monospace;
  font-size: 0.75rem;
  cursor: pointer;
  &:hover {
    outline: none;
    border: 1px solid ${colors.tertiary};
    color: ${colors.tertiary};
    transition: all 0.5s linear;
  }
}
}

 /* Small devices (phones, up to 767px) */
@media (max-width: 767px) {
    html {
      margin: 1rem;
    }
    h2 {
      font-size: 2rem;
    }
} 

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
    html {
      margin: 2rem;
    }
    h2 {
      font-size: 2rem;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    html {
      margin: 2rem 10vw;
    }
    h2 {
      font-size: 3rem;
    }
}
`;

export default GlobalStyle;
