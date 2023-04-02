import CartItems from "../../components/Cart"
import { StyledHeader } from "../../components/styles/Cart.styles"
import { useEffect } from "react";

export default function Checkout() {

  useEffect(() => {
    document.title = "Dings | Checkout";
  }, []);
  
    return (
      <div>
        <StyledHeader>My Cart</StyledHeader>
        <CartItems />
        </div>
    )
  }