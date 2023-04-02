import CheckoutMessage from "../../components/CheckoutSuccess"
import { useEffect } from "react";

export default function CheckoutSuccess() {

  useEffect(() => {
    document.title = "Dings | Checkout Success";
  }, []);

    return (
      <div>
        <CheckoutMessage />
        </div>
    )
  }