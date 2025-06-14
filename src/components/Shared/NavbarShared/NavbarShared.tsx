import { useSelector } from "react-redux";
import { logout } from "../../../redux/userSlice";
import { signOut } from "firebase/auth";
import {auth} from '../../../bbdd/config'
import { useDispatch } from "react-redux";

import {
 
  Header,
  StyledLink,
  NavGroup,
  UserGreeting,
  LogoutButton,
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
      <NavGroup>
        <StyledLink to="/" $auth={false}>Home</StyledLink>
        <StyledLink to="/films" $auth={false}>Films</StyledLink>
      </NavGroup>

      <NavGroup>
        {user && user.email ? (
          <>
            <UserGreeting>Bienvenido, {user.email}</UserGreeting>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        ) : (
          <>
            <StyledLink to="/login" $auth={true}>Login</StyledLink>
            <StyledLink to="/register" $auth={true}>Register</StyledLink>
          </>
        )}
      </NavGroup>
    </Header>
  );
}

export default SharedNavbar;
