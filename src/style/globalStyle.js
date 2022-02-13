// globalStyles.js
import { createGlobalStyle } from 'styled-components';
// import * as variable from './lib';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');

*, *:before, *:after {
    box-sizing: border-box;
}

*{
  font-family: 'Raleway', sans-serif;
}

a{
  text-decoration: none;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
}

ol, ul {
  list-style: none;
}

main, footer{
  max-width: 1440px;
  margin: 0 auto;
}

header, footer{
  padding-left: ${'20px'};
  padding-right: ${'20px'};
}

main{
  padding: ${'20px'};
}

button, a{
  cursor: pointer;
}

@media (min-width:769px){
  header, footer{
    padding-left: ${'100px'};
    padding-right: ${'100px'};
  }

  main{
    padding: ${'80px 100px'};
  }
}
`;

export default GlobalStyle;
