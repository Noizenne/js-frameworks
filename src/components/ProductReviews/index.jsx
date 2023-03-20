import React from "react";
import { Rating } from "@mui/material";
import * as S from "../styles/ProductReviews.styles";

export default function ProductReviews({reviews}) {
    
    console.log(reviews)
    const userReviews = reviews && reviews.map((review) => {
        return (
            <S.StyledContainer key={review.id}>
                <S.StyledDesc>- {review.description}</S.StyledDesc>
                <div><Rating value={review.rating} max={5} readOnly={true}/>{review.rating}</div>
                <S.StyledUsername>{review.username}</S.StyledUsername>
            </S.StyledContainer>
        )
    })

    return (
        <S.StyledWrapper>
            {userReviews && userReviews.length > 0 ? (
                userReviews
            ) : (<div>No reviews</div>)}
        </S.StyledWrapper>
    )
}