import React from "react";
import * as S from "../styles/ViewProduct.styles";
import * as R from "../styles/ProductReviews.styles";
import { Rating } from "@mui/material";
import ProductReviews from "../ProductReviews";

export default function ViewProduct({ product: {
    id,
    title,
    imageUrl, 
    description,
    price,
    discountedPrice, 
    rating, 
    reviews
    }}) {

        const discount = price !== discountedPrice &&
            Math.trunc(price - discountedPrice);
        const showDiscount = price !== discountedPrice && "Save" + " " + discount + ",- !"

    return (
        <S.StyledViewProduct key={id}>
           <S.StyledContainer>
            <S.StyledInfoContainer>
            <S.CalcedDiscount>  
                {showDiscount}
            </S.CalcedDiscount>
            <S.StyledImg src={imageUrl} alt={title} />
             <S.StyledProductInfo>
                    <h2>{title}</h2>
                    <div>
                     <Rating 
                      value={rating}
                      max={5}/>
                    </div>
                    <div>{description}</div>
                    <S.StyledPriceContainer>
                        <S.StyledDiscountedPrice>{discountedPrice < price && discountedPrice},-</S.StyledDiscountedPrice>
                        <S.StyledPrice isValid={price === discountedPrice}>{price},-</S.StyledPrice>
                    </S.StyledPriceContainer>
                 <S.StyledBtn>Add to cart</S.StyledBtn>
            </S.StyledProductInfo>
            </S.StyledInfoContainer>
            <h3>Reviews</h3>
            <R.StyledProductReviews>
                        <ProductReviews reviews={reviews} />
                 </R.StyledProductReviews>
           </S.StyledContainer>
        </S.StyledViewProduct>
    )
}