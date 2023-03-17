import React from "react"
import Product from "../Product"

export default function Products({products}) {
    return (
        <ul className="ProductsContainer">
            {products.map((product) => (
            <Product key={product.id} product={product} />
            ))}
        </ul>
    )
}