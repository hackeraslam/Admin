import "./login.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebse";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  useEffect(() => {
    auth.signOut();
  });

  const handleGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {});
    navigate("/");
  };

  const handleLogin = () => {
    try {
      signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button className="google" onClick={handleGoogle}>
          Login With Google
        </button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
