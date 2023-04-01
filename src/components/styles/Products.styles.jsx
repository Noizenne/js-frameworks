import styled from "styled-components";

export const ProductWrapper = styled.div`
    border: 1px solid white;
    border-radius: 2rem;
    list-style: none;
    width: 200px;
    margin: 1rem;
    box-shadow: rgba(255, 163, 228, 0.2) 0px 8px 24px;
`;

export const ProductTitle = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const ProductHeading = styled.h4`
    margin: 5px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ProductImageContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;

export const ProductImage = styled.img`
    border-radius: 2rem 2rem 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ProductRating = styled.div`
    display: flex;
    align-self: center;
    `;

export const ProductPrice = styled.div`
    color: ${(props) => (props.isValid ? 'black' : 'red')};
    text-decoration: ${(props) => (props.isValid ? 'none' : 'line-through')};
`;

export const ProductPrices = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const ProductButtons = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem;
`;

export const ProductAddButton = styled.button`
    background-color: ${({theme}) => theme.colors.blue};
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

export const ProductsView = styled.a`
    border-radius: 5px;
    border: ${({theme}) => theme.colors.blue} 1px solid;
    padding: 2px;
    color: ${({theme}) => theme.colors.blue};
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`