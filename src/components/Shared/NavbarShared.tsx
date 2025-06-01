import { Link } from "react-router-dom";

function SharedNavbar() {
  return (
    <div style={{border:"solid red 2px"}}>
      Navbar Shared
      <Link to='/'>
        {" "}
        <button>HOME</button>
      </Link>

        <Link to='/films'>
        {" "}
        <button>FILMS</button>
      </Link>


    </div>
  );
}

export default SharedNavbar;
