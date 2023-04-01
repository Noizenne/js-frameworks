import React from "react";
import { StyledError } from "../styles/Error.styles";
import { Error } from "@mui/icons-material";

export default function ErrorMessage() {
    return (
        <StyledError>
            <Error fontSize="large" />
            There's been an error.
        </StyledError>
    )
}