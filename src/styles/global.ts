import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --primary: #204ED9;
        --secondary: #000000;
        
        --gray: #979797;
        --blue: #4578FF;
        --white: #FFFFFF;
        --darkBlue: #1E2C3B;
        --darkGray: #222223;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        scroll-behavior: smooth;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, select {
        font: 16px 'Montserrat', sans-serif;
        color: #000;
    }

    a, a:hover  {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
