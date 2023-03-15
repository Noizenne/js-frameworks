import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    background: ${({theme}) => theme.colors.color};
    margin: 0;
}
`
export default GlobalStyles;