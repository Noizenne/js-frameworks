import React from "react"
import * as S from "../styles/Products.styles"
import { Star } from "@mui/icons-material";

export default function Product({product: {title, imageUrl, price, discountedPrice, rating}}) {
    return (
        <S.ProductWrapper>
            <S.ProductImageContainer>
                <S.ProductImage src={imageUrl} alt={title}></S.ProductImage>
            </S.ProductImageContainer>
            <S.ProductTitle>
            <S.ProductHeading>{title}</S.ProductHeading>
            <S.ProductRating><Star sx={{color: "orange"}}/>({rating})</S.ProductRating>
            </S.ProductTitle>
            <S.ProductPrices>
                <div>{discountedPrice < price && discountedPrice}</div>
                <S.ProductPrice isValid={price === discountedPrice}>{price}</S.ProductPrice>
            </S.ProductPrices>
            <S.ProductButtons>
            <S.ProductAddButton>Add to cart</S.ProductAddButton>
            <S.ProductsView href="/src/pages/product/:id">View</S.ProductsView>
            </S.ProductButtons>
        </S.ProductWrapper>
    )
}