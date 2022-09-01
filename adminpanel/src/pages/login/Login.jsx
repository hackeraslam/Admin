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
        <div className="alt-loginn">
          <div class="facebook btn">
            <i class="fa-brands fa-square-facebook icon"></i> Facebook
          </div>
          <div class="google btn" onClick={handleGoogle}>
            <i class="fab fa-google icon"></i>Google
          </div>
        </div>
        <h4 className="upper-Text">Email</h4>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="username"
        />
        <h4 className="upper-Text">
          Password <span className="gray-text forgot">Forgot?</span>
        </h4>

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />

        <div className="login-btnn" onClick={handleLogin}>
          Login
        </div>
        <p className="gray-text">
          Not a member?{" "}
          <span className="signup-text" onClick={handleCreate}>
            Signup Here
          </span>
        </p>

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
