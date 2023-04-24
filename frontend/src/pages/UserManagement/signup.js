import React, { useState } from "react";
import axios from "axios";

function Signup() {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [userType, setUserType] = useState('user');
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function sendData(e) {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      userType,
      email,
      password
    }

    axios.post("http://localhost:8091/user/add", newUser).then(() => {
      alert("User added")
    }).catch((err) => {
      alert(err)
    })

  }

    return (
        <div className="container">
        <form onSubmit={sendData}>
            <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="firstName" class="form-control" 
                 onChange={(e) => {
                    setFirstName(e.target.value);
                  }} />
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="lastName" class="form-control" 
                 onChange={(e) => {
                    setLastName(e.target.value);
                  }} />
            </div>
            {/* <div class="mb-3">
                <label for="userType" class="form-label">User Type</label>
                <input type="userType" class="form-control" 
                 onChange={(e) => {
                    setUserType(e.target.value);
                  }} />
            </div> */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                 onChange={(e) => {
                    setEmail(e.target.value);
                  }} />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" 
                 onChange={(e) => {
                    setPassword(e.target.value);
                  }} />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default Signup;
