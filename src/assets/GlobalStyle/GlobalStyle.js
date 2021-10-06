import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background: ${({ theme }) => theme.background};
        color:  ${({ theme }) => theme.text};
        font-family: 'Nunito Sans', sans-serif;
        font-size:16px;
        min-width: 375px;
    }
    
`;
