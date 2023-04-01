import { Link } from "react-router-dom";
import { StyledFooter } from "../../styles/Footer.styles";
export default function Footer() {
    return (
      <StyledFooter>
        <p>&copy; Karla Mae Rabe |</p>
        <Link to="/">Dings</Link>
        </StyledFooter>
    )
  }