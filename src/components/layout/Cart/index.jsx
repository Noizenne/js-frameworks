import { ShoppingCart } from "@mui/icons-material"
import { useCart } from "../../../zustandHook/useCart"


export default function CartIcon() {
    const {cart} = useCart();

return (
    <div>
        <ShoppingCart fontSize="large" style={{color: '#4c00ff'}}/>
        <span>
            <span>{cart.reduce((totalQnty, cart) => totalQnty + cart.totalItems, 0)}</span>
        </span>
    </div>
)
}