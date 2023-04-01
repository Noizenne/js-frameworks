import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    background: ${({theme}) => theme.colors.bg};
    margin: 0;
    font-family: 'Inter', sans-serif;
}

h1 {
    font-size: 30px;
    color: ${({theme}) => theme.colors.blue};
    padding: 0 4rem;
}

h2 {
    font-size: 28px;
    color: ${({theme}) => theme.colors.blue};
}

h3 {
    font-size: 25px;
    color: ${({theme}) => theme.colors.pink};
}


.ProductsContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 4rem;
}

`
export default GlobalStyles;