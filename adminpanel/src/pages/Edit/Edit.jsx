import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { useState } from "react";
import Axios from "axios";

import { useLocation } from "react-router-dom";

const Edit= ({ inputs, title }) => {
  const location = useLocation();
  const {data} = location.state;
 
  const [name, setName] = useState(data.name);
  const [username, setUsername] = useState(data.username);
  const [phone, setPhone] = useState(data.phone);
  const [password, setPassword] = useState(data.password);
  const [address, setAddress] = useState(data.address);
  const [email, setEmail] = useState(data.email);
  const [country, setCountry] = useState(data.country);



  console.log(data.name);



  console.log(data._id)
  
  const updateData = () =>{


    try{
      window.open('/users')
      Axios.put("http://localhost:3001/update", {
      id: data._id,
      name: name,
      username:username,
      email: email,
      phone: phone,
      address: address,
      country: country,
    });
    
    

  }
  catch(err)
  {
    alert(err);
  }


  }






  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
         
          <div className="right">
            <form>
              

              <form id="new_user">

                <div className="formInput">
                  <label>Username</label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="formInput">
                  <label>Name</label>
                  <input type="text" value={name} placeholder="John Doe" onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="formInput">
                  <label>Email</label>
                  <input type="mail"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="formInput">
                  <label>Phone</label>
                  <input type="text"  value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>

                <div className="formInput">
                  <label>Password</label>
                  <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="formInput">
                  <label>Address</label>
                  <input type="text"  value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>

                <div className="formInput">
                  <label>Country</label>
                  <input type="text"  value= {country} onChange={(e) => setCountry(e.target.value)}/>
                </div>
              </form>
             
              <button  onClick={updateData}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
