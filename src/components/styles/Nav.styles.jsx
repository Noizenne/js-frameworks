import styled from "styled-components";

export const StyledNav = styled.nav`
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${({theme}) => theme.colors.pink};
    padding: 1rem 2rem;
    margin-bottom: 20px;

    ul {
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 0;
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
        color: ${({theme}) => theme.colors.pink};
        }

        .CartIcon {
        align-self: center;
        margin-right: 20px;
        }
    }


`;