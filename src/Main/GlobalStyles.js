import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
  
    li {
        list-style: none;
    }
  
    a {
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
    
    img {
        border: 0;
    }
    
    ul {
        padding-left: 0px;
    }
    
    section {
        height: auto;
    }
`;
export default GlobalStyles;
