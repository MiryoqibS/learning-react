import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
        font: inherit;
    }

    img {
        max-width: 100%;
        display: block;
    }

    /* Глобальные стили */
    body {
        font-family: "Inter", sans-serif;
        background-color: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        line-height: 1.5;
    }  
`;