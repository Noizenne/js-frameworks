import React from "react";
import * as S from "../styles/ViewProduct.styles";
import * as R from "../styles/ProductReviews.styles";
import { Rating } from "@mui/material";
import ProductReviews from "../ProductReviews";
import { useCart } from "../../zustandHook/useCart";

export default function ViewProduct({ product }) {

    const {id,
        title,
        imageUrl, 
        description,
        price,
        discountedPrice, 
        rating, 
        reviews} = product;

        const {addToCart} = useCart();
        function handleATCBtn() {
            addToCart(product);
        }
        const discount =  price !== discountedPrice &&
            Math.trunc((100 * (price - discountedPrice) / price));

        const showDiscount = price !== discountedPrice &&  discount + "%";

    return (
        
        <S.StyledViewProduct key={id}>
           <S.StyledContainer>
                <S.StyledInfoContainer>
                    <S.StyledImg src={imageUrl} alt={title} />
                     <S.StyledProductInfo>
                     {discount !== showDiscount && (
                        <S.CalcedDiscount> 
                            {showDiscount}
                        </S.CalcedDiscount> 
                    )}
                        <h2>{title}</h2>
                        <div>
                            <Rating 
                            value={rating}
                            max={5} 
                            readOnly={true}/>
                        </div>
                        <div>{description}</div>
                        <S.StyledPriceContainer>
                            <S.StyledDiscountedPrice>{discountedPrice < price && discountedPrice},-</S.StyledDiscountedPrice>
                            <S.StyledPrice isValid={price === discountedPrice}>{price},-</S.StyledPrice>
                        </S.StyledPriceContainer>
                        <S.StyledBtn onClick={() => handleATCBtn()}>Add to cart</S.StyledBtn>
                    </S.StyledProductInfo>
                </S.StyledInfoContainer>
                <R.StyledProductReviews>
                    <h3>Reviews</h3>
                    <ProductReviews reviews={reviews} />
                </R.StyledProductReviews>
           </S.StyledContainer>
        </S.StyledViewProduct>
    )
}