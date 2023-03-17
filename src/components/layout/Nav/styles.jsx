import styled from "styled-components";

export const StyledNav = styled.nav`
    font-family: 'Inter', sans-serif;
    font-size: 24px;

    ul {
     display: flex;
     justify-content: center;

      li {
          list-style: none;
          padding: 10px;
       }

       a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.color};
       }
    }
    `;