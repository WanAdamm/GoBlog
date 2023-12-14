import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";;

const Navbar = () => {

  const logOut = async () => {
    await signOut(auth);
    console.log("logout");
  };

  return (
    <nav className="navbar">
      <h1>Go Blog</h1>
      <button className="btn btn-danger" onClick={logOut}>
        Log Out
      </button>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
