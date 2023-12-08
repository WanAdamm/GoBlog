import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    }
  });

  const logOut = async () => {
    await signOut(auth);
    console.log("logout");
  };

  return (
    <nav className="navbar">
      <h1>Go Blog</h1>
      <div>
        <p>{user?.email}</p>
      </div>
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
