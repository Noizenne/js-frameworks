import styled from "styled-components";

export const StyledViewProduct = styled.div`
    display: flex;
    justify-content: center;
`
export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
`

export const StyledInfoContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 40px;
    border-bottom: 1px solid ${({theme}) => theme.colors.blue};

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const StyledImg = styled.img`
    width: 300px;
    border-radius: 2rem;
    border: 1px solid white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (max-width: 800px) {
        width: 250px;
    }
    @media (max-width: 600px) {
        margin: auto;
    }
`

export const StyledProductInfo = styled.div`
    width: 350px;
    text-align: left;
    padding: 2rem;

    @media (max-width: 600px) {
        margin: auto;
    }
`
export const StyledPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-right: 50px;
    font-size: 20px;
`
export const StyledPrice = styled.div`
    color: ${(props) => (props.isValid ? 'black' : 'red')};
    text-decoration: ${(props) => (props.isValid ? 'none' : 'line-through')};
`
export const StyledDiscountedPrice = styled.div`
    color: #4D0F1A;
`

export const StyledBtn = styled.button`
    width: 130px;
    height: 30px;
    background-color: ${({theme}) => theme.colors.blue};
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
export const CalcedDiscount = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    float: right;
    color: #ffffff;
    background-color: #ff0000;
    width: 45px;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 60%;
`