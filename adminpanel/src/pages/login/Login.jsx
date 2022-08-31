import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebse";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let navv = useNavigate();
  let create = useNavigate();
  const handleCreate = () => {
    create("/signup");
  };

  const provider = new GoogleAuthProvider();

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };
  const handleGoogle = () => {
    try {
      signInWithPopup(auth, provider).then((result) => {
        navv("/");
      });
    } catch (err) {
      popup();
    }
  };

  const [popupStyle, showPopup] = useState("hide");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((firebaseUser) => {
        navigate("/");
      })
      .catch((err) => {
        popup();
      });
  };
  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="username"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />

        <div className="login-btn" onClick={handleLogin}>
          Login
        </div>
        <div className="login-btn signup" onClick={handleCreate}>
          Create Account
        </div>

        <p className="text">Or login using</p>

        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google" onClick={handleGoogle}></div>
        </div>

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
