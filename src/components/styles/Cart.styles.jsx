import styled from "styled-components";
export const StyledHeader = styled.h2`
    display: flex;
    justify-content: center;
`
export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledItem = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    border: 1px solid ${({theme}) => theme.colors.blue};
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 2rem;
    padding: 1rem;

    img {
        width: 100px;
        height: 120px;
        object-fit: cover;
    }

    p {
        margin: 0 10px;
    }
`

export const StyledBtn = styled.button`
    display: flex;
    justify-content: center;
    margin: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const StyledTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const StyledBtns = styled.div`
    display: flex;
`
export const StyledClearBtn = styled.button`
    margin: 5px;
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.blue};
    border: 1px solid ${({theme}) => theme.colors.blue};
    border-radius: 20px;
    width: 100px;
    height: 30px;
`
export const StyledCheckoutBtn = styled.button`
    margin: 5px;
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.blue};
    color: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 20px;
    width: 100px;
    height: 30px;
`