import React from "react"
import { StyledNav } from "../../styles/Nav.styles"
import { Link } from "react-router-dom"
import CartIcon from "../Cart"
import { Logo } from "../Logo"

export default function Nav() {
    return (
      <StyledNav>
          <ul>
            <Link to="/"><Logo src="./images/logo.jpg" alt="Logo"/> </Link>
            <div className="NavLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            </div>
            <div className="CartIcon">
              <Link to="/checkout"><CartIcon /></Link>
            </div>
          </ul>
      </StyledNav>
    )
}