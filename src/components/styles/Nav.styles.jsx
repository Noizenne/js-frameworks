import styled from "styled-components";

export const StyledNav = styled.nav`

    font-family: 'Inter', sans-serif;
    margin-bottom: 30px;


    .container {
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }


    .menu {
        display: none;
    }

    .nav-elements ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }

    .nav-elements ul li:not(:last-child) {
        margin-right: 60px;
    }

    .nav-elements ul a {
        font-size: 22px;
        font-weight: 400;
        color: ${({theme}) => theme.colors.blue};
        text-decoration: none;
    }

    .nav-elements ul a.active {
        color: ${({theme}) => theme.colors.blue};
        font-weight: 500;
        position: relative;
    }

    .nav-elements ul a.active::after {
    content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${({theme}) => theme.colors.blue};
    }

    @media (max-width: 768px) {
    .nav-elements ul li:not(:last-child) {
        margin-right: 30px;
    }
    }

    @media (max-width: 600px) {
    .menu {
        display: block;
        cursor: pointer;
    }

    .nav-elements {
        position: absolute;
        right: 0;
        top: 60px;
        background-color: ${({theme}) => theme.colors.white};
        width: 0px;
        height: calc(100vh - 60px);
        transition: all 0.3s ease-in;
        overflow: hidden;
    }

    .nav-elements.active {
        width: 270px;
    }

    .nav-elements ul {
        display: flex;
        flex-direction: column;
    }

    .nav-elements ul li {
        margin-right: unset;
        margin-top: 22px;
    }
}

`;