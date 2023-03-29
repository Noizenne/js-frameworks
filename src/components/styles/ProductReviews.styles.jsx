import styled from "styled-components";


export const StyledProductReviews = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
`
export const StyledWrapper = styled.div`
    display: flex;

`

export const StyledContainer = styled.div`
    background-color: #f7eaed;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.colors.pink};

`
export const StyledDesc = styled.div`
    margin-bottom: 20px;
`
export const StyledUsername = styled.div`
`

export const StyledRating = styled.div`
    display: flex;
`