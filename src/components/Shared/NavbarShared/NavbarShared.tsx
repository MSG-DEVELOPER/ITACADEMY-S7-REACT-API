import { Link } from "react-router-dom";
import { Header,StyledLink } from "./NavbarShared.style";

function SharedNavbar() {
  return (
    <Header >
    
      <StyledLink to='/'>
        {" "}
        <button>HOME</button>
      </StyledLink>

        <Link to='/films'>
        {" "}
        <button>FILMS</button>
      </Link>


    </Header>
  );
}

export default SharedNavbar;
