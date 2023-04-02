import styled from "styled-components";

export const StyledHeader = styled.header`
    border: 0;
    background-color: ${({theme}) => theme.colors.white};
    
    a {
        color: ${({theme}) => theme.colors.blue};
    }

    img {
        margin: 15px 0;
    }
    `;