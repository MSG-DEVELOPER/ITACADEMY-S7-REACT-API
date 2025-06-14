import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import Credits from "./pages/Credits/Credits";
import SharedNavbar from "./components/Shared/NavbarShared/NavbarShared";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedRoutes from "./routes/protectedRoutes";

function App() {
  return (
    <>
      <SharedNavbar />

      <Routes>
        <Route path="/" element=<Home />>
          {" "}
        </Route>

          <Route path="/films" element= <ProtectedRoutes> 
          <Films /> 
          </ProtectedRoutes>/>
      
        <Route path="/credits/:filmId" element=<Credits />>
          {" "}
        </Route>
        <Route path="/login" element=<Login /> />
        <Route path="/register" element=<Register />>
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
