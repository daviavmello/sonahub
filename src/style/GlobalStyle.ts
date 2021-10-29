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

h3 {
  color: ${colors.light};
}

input {
  box-sizing: border-box;
  background: transparent;
  color: ${colors.secondary};
  border: 0;
  border: 2px solid ${colors.medium};
  border-radius: 0.5rem;
  padding: 0.5rem;
  /* flex: 1 1 calc(10% - 2rem); */
  ::placeholder {
    color: ${colors.medium};
    text-transform: capitalize;
  }
  :focus {
    outline: none;
    box-shadow: -5px 0px 15px 5px rgb(0 0 0 / 40%);
    border: 2px solid ${colors.light};
    transition: all 0.5s linear;
  }
}
}

 /* Small devices (phones, up to 767px) */
@media (max-width: 767px) {
    html {
      margin: 1rem;
    }
    h3 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
} 

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
    html {
      margin: 2rem;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    html {
      margin: 2rem 10vw;
    }
    h3 {
      font-size: 4rem;
      margin-bottom: 2rem;
    }
}
`;

export default GlobalStyle;
