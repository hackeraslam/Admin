import React from 'react'
import './model.scss'
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


function Model(prop, title) {
 
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");



  return (
    <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            <form id="new_user">

              <div className="formInput">
                <label>Username</label>
                <input type="text"  placeholder="john_doe" onChange={(e) => setUsername(e.target.value)}/>
              </div>

              <div className="formInput">
                <label>Name</label>
                <input type="text"  placeholder="John Doe" onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="formInput">
                <label>Email</label>
                <input type="mail"  placeholder="john@mail.com" onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="formInput">
                <label>Phone</label>
                <input type="text"  placeholder="+1 494 4848" onChange={(e) => setPhone(e.target.value)}/>
              </div>

              <div className="formInput">
                <label>Password</label>
                <input type="password"  placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <div className="formInput">
                <label>Address</label>
                <input type="text"  placeholder="Islamabad" onChange={(e) => setAddress(e.target.value)}/>
              </div>

              <div className="formInput">
                <label>Country</label>
                <input type="text"  placeholder="Pakistan" onChange={(e) => setCountry(e.target.value)}/>
              </div>
            </form>
           
            <button onClick={""}>Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Model
