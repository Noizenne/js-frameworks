import styled from "styled-components";


export const StyledProductReviews = styled.div`

    @media (max-width: 400px) {
        margin: auto;
        width: 300px;
    }
`
export const StyledWrapper = styled.div`
    display: flex;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        width: 400px;
    }

    @media (max-width: 400px) {
        width: 300px;
    }
`

export const StyledContainer = styled.div`
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.colors.blue};
`
export const StyledDesc = styled.div`
    margin-bottom: 20px;
`
export const StyledUsername = styled.div`
`

export const StyledRating = styled.div`
    display: flex;
`