import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    //create variables for the colors
    :root {
        --primaryHSL: 217, 26%;
        --primary-900: hsl(var(--primaryHSL), 10%);
        --primary-800: hsl(var(--primaryHSL), 20%);
        --primary-700: hsl(var(--primaryHSL), 30%);
        --primary-600: hsl(var(--primaryHSL), 40%);
        --primary-500: hsl(var(--primaryHSL), 50%);
        --primary-400: hsl(var(--primaryHSL), 60%);
        --primary-300: hsl(var(--primaryHSL), 70%);
        --primary-200: hsl(var(--primaryHSL), 80%);
        --primary-100: hsl(var(--primaryHSL), 90%);
        
    }


    body {
        background-color: var(--primary-900);
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;

export default GlobalStyles;
