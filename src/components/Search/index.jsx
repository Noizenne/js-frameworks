import React from "react";
import { Search } from "@mui/icons-material";
import * as S from "../styles/Search.styles";
/**
 * This will perform a search input
 */
export default function SearchBar({searchInput, onSearchInputChange, filteredProducts}) {

    function onChange(event) {
        onSearchInputChange(event.currentTarget.value)
    }

    return (
        <S.StyledSearch>
            <S.StyledInputWrapper>
                <Search 
                fontSize="large" 
                sx={{color: "white"}} 
                />
                <S.StyledInput 
                onChange={onChange} 
                value={searchInput} 
                placeholder="Search..."/>
            </S.StyledInputWrapper>
            <S.StyledSearchResults> 
                {filteredProducts.map((item) => (
                    <S.StyledSearchedItem href={`/product/${item.id}`} key={item.id}>
                        {item.title}
                    </S.StyledSearchedItem>
                ))}
            </S.StyledSearchResults>
        </S.StyledSearch>
    )
}
