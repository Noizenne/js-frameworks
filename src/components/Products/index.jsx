import React from "react"
import ProductCard from "../ProductCard"
import { ProductsContainer } from "../styles/Products.styles"

export default function Products({products}) {
    return (
        <ProductsContainer>
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </ProductsContainer>
    )
}