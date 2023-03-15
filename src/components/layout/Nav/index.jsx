import React from "react"
import { StyledNav } from "./styles"
import { Link } from "react-router-dom"
import CartIcon from "../Cart"

export default function Nav() {
    return (
      <StyledNav>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="src/Components/pages/products">Products</Link>
            </li>
            <li>
              <Link to="src/Components/pages/contact">Contact</Link>
            </li>
            <li>
              <Link to="src/Components/pages/cart"><CartIcon /></Link>
            </li>
          </ul>
      </nav>
      </StyledNav>
    )
  }