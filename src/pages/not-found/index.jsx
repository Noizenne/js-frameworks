import React, { useEffect } from "react";
import { StyledNotFound } from "../../components/styles/NotFound.styles";
import { Block } from "@mui/icons-material";

export default function NotFound() {

    useEffect(() => {
        document.title = "Dings | Page not found";
    }, [])
    
    return (
        <StyledNotFound>
            <div><Block fontSize="large" style={{color: 'red'}}/></div>
            <h1>PAGE NOT FOUND</h1>
            <p>The link you have followed may be broken or the page may have been removed.</p>
        </StyledNotFound>
    )
}