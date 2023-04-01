import CartItems from "../../components/Cart"
import { StyledHeader } from "../../components/styles/Cart.styles"

export default function Checkout() {
    return (
      <div>
        <StyledHeader>My Cart</StyledHeader>
        <CartItems />
        </div>
    )
  }