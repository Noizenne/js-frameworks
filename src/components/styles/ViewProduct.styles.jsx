import styled from "styled-components";

export const StyledViewProduct = styled.div`
    display: flex;
    justify-content: center;
`
export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledInfoContainer = styled.div`
    margin-top: 50px;
    width: 800px;
    display: flex;
    justify-content: space-between;
`

export const StyledImg = styled.img`
    width: 300px;
    border-radius: 2rem;
    border: 1px solid white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const StyledProductInfo = styled.div`
    width: 350px;
    text-align: left;
    padding-left: 0px;
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
    color: ${(props) => (props.isValid ? 'initial' : 'grey')};
    text-decoration: ${(props) => (props.isValid ? 'none' : 'line-through')};
`
export const StyledDiscountedPrice = styled.div`
color: #4D0F1A;
`

export const StyledBtn = styled.button`
    width: 130px;
    height: 25px;
    background-color: #4D0F1A;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
export const CalcedDiscount = styled.div`
position: absolute;
color: red;
font-size: 20px;
font-weight: bold;
`