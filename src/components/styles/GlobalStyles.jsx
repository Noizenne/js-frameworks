import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    background: ${({theme}) => theme.colors.color};
    margin: 0;
}

.NavBar {
    display: flex;
    justify-content: space-evenly;
    
    ul {
        padding: 0;
    }
}

.CartIcon {
    align-self: center;
}

h1 {
    font-size: 30px;
}

.ProductsContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
`
export default GlobalStyles;