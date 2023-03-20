import styled from "styled-components"

export const StyledSearch = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    
    
`
export const StyledInputWrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: ${({theme}) => theme.colors.nav};
    border-radius: 5px;
    padding: 3px;
`

export const StyledInput = styled.input`
    border: none;
    width: 100%;
    border-radius: 10px;
    background-color: transparent;
    color: ${({theme}) => theme.colors.color};
    margin-left: 5px;

    :focus {
        outline: none;
    }

    ::placeholder {
        color: ${({theme}) => theme.colors.color};
    }
`

export const StyledSearchResults = styled.div`
    width: 100%;
    border: 0.5px solid ${({theme}) => theme.colors.nav};
    border-top: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const StyledSearchedItem = styled.a`
    display: flex;
    justify-content: left;
    height: 30px;
    margin-left: 10px;
    margin-top: 10px;
    text-decoration: none;
    color: black;

    :hover {
        font-size: 16.5px;
}
`