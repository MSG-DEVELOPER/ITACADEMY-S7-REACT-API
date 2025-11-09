import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../../bbdd/config";

import {
  Header,
  NavContainer,
  LeftSection,
  Brand,
  BrandAccent,
  NavLinks,
  NavLink,
  AuthGroup,
  UserGreeting,
  LogoutButton,
  AuthButton,
} from "./NavbarShared.style";

function SharedNavbar() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  function handleLogout() {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  }

  return (
    <Header>
      <NavContainer>
        <LeftSection>
          <Brand to="/">
            Movie<BrandAccent>Zone</BrandAccent>
          </Brand>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/films">Films</NavLink>
          </NavLinks>
        </LeftSection>

        <AuthGroup>
          {user && user.email ? (
            <>
              <UserGreeting>Bienvenido, {user.email}</UserGreeting>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </>
          ) : (
            <>
              <AuthButton to="/login">Login</AuthButton>
              <AuthButton to="/register" $primary>
                Register
              </AuthButton>
            </>
          )}
        </AuthGroup>
      </NavContainer>
    </Header>
  );
}

export default SharedNavbar;