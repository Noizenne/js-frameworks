import React from "react";
import { StyledWrapper } from "../styles/SuccessStyles";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";

export default function CheckoutMessage() {
    return (
        <StyledWrapper>
            <CheckCircle fontSize="large" style={{color: '#00C013'}}/>
            <h1>Thanks for shopping with us!</h1>
            <p>Your ordernumber: 00000001</p>
            <p>You will receive an email confirming your order with detailed info.</p>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button><ArrowBackIos />Continue Shopping</button>
            </Link>
        </StyledWrapper>
    )
}