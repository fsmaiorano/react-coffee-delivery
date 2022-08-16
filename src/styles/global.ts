import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background:${props => props.theme["background"]};
        color: ${props => props.theme["gray-300"]};
        -webkit-font-smoothing: antialiased;

        width: 100%;
        margin: 0 auto;

        color: ${props => props.theme["gray-700"]};
        user-select: none;
    }
 
    body, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 { 
        color: ${props => props.theme["gray-900"]};
        font-family: "Baloo 2", serif;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }

    button {
        cursor: pointer;
    }
`;
