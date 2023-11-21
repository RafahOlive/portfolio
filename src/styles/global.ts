import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1;

  background: #0F172A;

  font-family: 'IBM Plex Sans';

}

a{
  text-decoration: none;
  color: #94a3b8;
  font-weight: bold;
}

p{
  font-size: 16px;
  color: #94A3B8;
}

h1{
  font-size: 2.5rem;
  line-height: 2.5rem;
}

h2{
    font-size: 1.125rem;
    line-height: 1.75rem;

    font-weight: 500;
}

h1, h3 {
    color: #e2e8f0;
  }

`;
