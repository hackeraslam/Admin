import React from "react";
import { useState } from "react";
import { auth } from "../../firebse";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState(0);

  let navigate = useNavigate();
  let navv = useNavigate();
  const handleSignup = async () => {
    let databody = {
      name: name,
      username: username,
      email: email,
      phone: phone,
      password: password,
      address: address,
      country: country,
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        try {
          axios
            .post("https://adminserverr.herokuapp.com/users", databody)
            .then(() => {
              navigate("/");
            });
          //  document.getElementById("new_user").reset();
          alert("User Created Sucessfully");
        } catch (err) {
          console.log(err);
          popup();
        }

        // nav("/");
      })
      .catch((err) => {
        alert(err);
        popup();
      });
  };

  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  return (
    <div className="page">
      <div className="cover">
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="mail"
          placeholder="Email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />

        <div className="login-btn" onClick={handleSignup}>
          Create Account
        </div>
        <div
          className="login-btn signup"
          onClick={() => {
            navv("/login");
          }}
        >
          Login
        </div>

        <div className={popupStyle}>
          <h3>SignUp Failed</h3>
          <p>Error While Creating Account</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
