import React, {useState} from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e) {
        e.preventDefault();
    
        const newUser = {
          email,
          password
        }
    
        axios.post("http://localhost:8091/user/login", newUser).then((res) => {
          alert("User Logged in")
          console.log(res.data.token)
        }).catch((err) => {
          alert(err)
        })
    
      }

    return (
        <div className="container">
            <form onSubmit={sendData}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    onChange={(e) => {
                        setEmail(e.target.value);
                      }}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" 
                    onChange={(e) => {
                        setPassword(e.target.value);
                      }}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login;
