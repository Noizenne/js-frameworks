import React from "react"
import * as S from "../styles/Products.styles"
import { Star } from "@mui/icons-material";
import { useCart } from "../../zustandHook/useCart";


export default function ProductCard({product}) {

    const {id, title, imageUrl, price, discountedPrice, rating} = product;

    const {addToCart} = useCart();
    
    function handleATCBtn() {
        addToCart(product);
    }
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
                <div>NOK {discountedPrice < price && discountedPrice}</div>
                <S.ProductPrice isValid={price === discountedPrice}>{price}</S.ProductPrice>
            </S.ProductPrices>
            <S.ProductButtons>
            <S.ProductsView href={`/product/${id}/`}>View</S.ProductsView>
            <S.ProductAddButton onClick={() => handleATCBtn()}>Add to cart</S.ProductAddButton>
            </S.ProductButtons>
        </S.ProductWrapper>
    )
}