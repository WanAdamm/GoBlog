import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";

const Authentication = () => {
    const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    // avoding null user
    if (currentUser) {
      setUser(currentUser);
    }
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form className="pb-5">
        <div className="form-group">
          <input
            className="form-control"
            placeholder="email"
            type="text"
            required
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="password"
            type="text"
            required
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-danger" onClick={register}>
          Create User
        </button>
      </form>
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="email"
            type="text"
            required
            value={registerEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="password"
            type="text"
            required
            value={registerPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-danger" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Authentication;
