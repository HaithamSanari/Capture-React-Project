import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1700px){
    font-size: 75%;
  }
}

body {
  background: #1b1b1b;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

h2 {
  font-size: 4rem;
  font-weight: lighter;
  color: white;
  overflow: hidden;
}

h3 {
  font-size: 1rem;
  color: white;
}

h4 {
  font-weight: bold;
  font-size: 2rem;
  color: white;
}

a {
  font-size: 1.1rem;
}

span {
  font-weight: bold;
  color:#23d997;
}

p {
  padding: 3rem 0rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
}

button {
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: 0.5s all ease;
  font-family: 'Inter', sans-serif;
  &:hover {
    background-color: #23d997;
    color: white;
  }
}
`;

export default GlobalStyle;
