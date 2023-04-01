import React from "react";
import { useCart } from "../../zustandHook/useCart";
import { Link } from "react-router-dom";
import * as S from "../styles/Cart.styles";
import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";
import { Clear } from "@mui/icons-material";


export default function CartItems() {
    const {cart, add, decrease, remove, clearCart} = useCart();

    console.log(cart)
    return (
        <S.StyledWrapper>
            <S.StyledContainer>
                {cart.length > 0 ? (
                <>
                    <div>
                    {cart.map((id) => {
                        const product = cart.find(
                        (addedProducts) => addedProducts === id
                        );
                        return (
                        <S.StyledItem>
                            <S.StyledBtn onClick={() => remove(product.id)}><Clear /></S.StyledBtn>
                            <img
                                src={product.imageUrl}
                                alt="Product"
                            />
                                <p>{product.title}</p>
                                <p>NOK {product.discountedPrice},-</p>
                                <S.StyledBtn onClick={() => decrease(product.id)} ><Remove /></S.StyledBtn>
                                <span>{product.totalItems}</span>
                                <S.StyledBtn onClick={() => add(product.id)}><Add /></S.StyledBtn>
                        </S.StyledItem>
                        );
                    })}
                    </div>
                    <div>
                        <h3>Order Details</h3>
                    <S.StyledTotal>
                       <p>Discount:</p> NOK {" "}
                        {cart
                        .reduce(
                            (totalSaved, cart) =>
                            totalSaved +
                            (cart.price - cart.discountedPrice / cart.totalItems) *
                                cart.totalItems, 0).toFixed(2)}{",-"}
                    </S.StyledTotal>
                    </div>
                    <div>
                        <S.StyledTotal>
                        <p>Total amount:</p> NOK {" "}
                            {cart
                            .reduce(
                                (totalSum, cart) =>
                                totalSum +
                                (cart.discountedPrice / cart.totalItems) *
                                    cart.totalItems, 0).toFixed(2)}{",-"}
                        </S.StyledTotal>
                    </div>
                    <S.StyledBtns>
                        <S.StyledClearBtn onClick={() => clearCart()} >Clear Cart</S.StyledClearBtn>
                        <Link to="/checkoutSuccess">
                            <S.StyledCheckoutBtn onClick={() => clearCart()} >Checkout</S.StyledCheckoutBtn>
                        </Link>
                    </S.StyledBtns>
                </>
                ) : (
                <div>
                    <p>No items in the cart.</p>
                </div>
                )}
            </S.StyledContainer>

        </S.StyledWrapper>
    );
}