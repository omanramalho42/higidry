import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *,html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.colors.background};
    }

    button {
        cursor: pointer;
    }
    
    input: {
        cursor: pointer;
        border: none;
    }
`