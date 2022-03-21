import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        padding: 0;
        background: #fff;
        color: #333;
        font-family: sans-serif !important;
        font-weight: 400;
        font-style: normal;
        transition: all 0.50s linear;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Lato', sans-serif;
    }

    ul, li {
        list-style-type: none;
    }

    input, textarea, button {
        font-family: inherit
    }
`;