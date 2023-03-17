import React from "react"
import { StyledNav } from "./styles"
import { Link } from "react-router-dom"
import CartIcon from "../Cart"
import { Logo } from "../Logo"

export default function Nav() {
    return (
      <StyledNav>
        <nav className="NavBar">
          <Logo src="./images/logo.jpg" alt="Logo"/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="src/pages/products">Products</Link>
            </li>
            <li>
              <Link to="src/pages/contact">Contact</Link>
            </li>
          </ul>
          <div className="CartIcon">
              <Link to="src/pages/checkout"><CartIcon /></Link>
          </div>
      </nav>
      </StyledNav>
    )
}