import styled from "styled-components";


export const StyledProductReviews = styled.div`
    margin: 0 2rem;
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;

        h3 {
            display: flex;
            justify-content: center;
        }
    }
`
export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;

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