import React from "react"
import ProductCard from "../ProductCard"

export default function Products({products}) {
    return (
        <ul className="ProductsContainer">
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    )
}