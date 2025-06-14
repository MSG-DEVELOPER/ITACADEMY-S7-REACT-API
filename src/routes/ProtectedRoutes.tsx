import type { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate,useLocation } from "react-router-dom";


function ProtectedRoutes(props: {children:ReactElement}) {

const user=useSelector((state:unknown)=>state.user);
const location=useLocation();

if(!user.email){
    return <Navigate to="/Login" replace state={{from:location}} />
}

  return (
  <> {props.children}</> 
 
  )
}

export default ProtectedRoutes