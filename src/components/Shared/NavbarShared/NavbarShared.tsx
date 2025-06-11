import { Header, StyledLink, NavGroup } from "./NavbarShared.style";

function SharedNavbar() {
  return (
    <Header>
      <NavGroup>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/films'>Films</StyledLink>
      </NavGroup>

      <NavGroup>
        <StyledLink to='/login' $auth={true}>Login</StyledLink>
        <StyledLink to='/register' $auth = {true}   >Register</StyledLink>
      </NavGroup>
    </Header>
  );
}

export default SharedNavbar;
