import { Header,StyledLink } from "./NavbarShared.style";

function SharedNavbar() {
  return (
    <Header >
    
      <StyledLink to='/'  style={{ textDecoration: 'none', color: 'white', fontWeight: '700'  }}>
        {" "}
       Home
      </StyledLink>

        <StyledLink to='/films' style={{ textDecoration: 'none', color: 'white', fontWeight: '700'  }}>
        {" "}
        Films
      </StyledLink>


    </Header>
  );
}

export default SharedNavbar;
