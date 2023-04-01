import React, {useState} from "react"
import { StyledNav } from "../../styles/Nav.styles"
import { NavLink } from "react-router-dom"
import CartIcon from "../Cart"
import { Menu } from "@mui/icons-material"

export default function Nav() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
    return (
      <StyledNav>
        <div className="container">
        <div className="logo">
        <NavLink to="/"><img src="/images/logo.jpg" alt="Logo"/></NavLink>
        </div>
        <div className="menu" onClick={handleShowNavbar}>
          <Menu style={{color: '#4c00ff'}} fontSize="large"/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <div className="CartIcon">
              <NavLink to="/checkout"><CartIcon /></NavLink>
            </div>
          </ul>
        </div>
      </div>
          {/*   <Link to="/"><img src="/images/logo.jpg" alt="Logo"/></Link>
            <Link to="#" className="ToggleButton">
                <div className="Bar"><Menu fontSize="large"/></div>
            </Link>    
            <div className="NavLinks">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="CartIcon">
              <Link to="/checkout"><CartIcon /></Link>
            </div> */}
      
      </StyledNav>
    )
}