import styled from "styled-components";

export const StyledNav = styled.nav`
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    display: flex;
    justify-content: center;

    ul {
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 100%;

        .NavLinks {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        li {
          list-style: none;
          padding: 10px;
        }

        a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.color};
        }

        .CartIcon {
        align-self: center;
        margin-right: 20px;
        }
    }


`;