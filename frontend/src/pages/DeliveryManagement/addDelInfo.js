import React,{useState} from "react"
import axios from "axios";

export default function AddDeliveryInfo(){


  const [Cname,setName]= useState("");
  const [Address,setAddress]= useState("");
  const [Province,setProvince]= useState("");
  const [Phone,setPhone]= useState("");
  const [Price,setPrice]= useState("");
  const [Time,setTime]= useState("");

function sendData(e){
  e.preventDefault(); 

  const newDelivery ={
    Cname,
    Address,
    Province,
    Phone,
    Price,
    Time,

  }

  axios.post("http://localhost:8091/delivery/add",newDelivery).then(()=>{
    alert("delivery infromation added")
  }).catch((err)=>{
    alert(err)
  })
}

    return(
<div className="container">
  <form onSubmit={sendData}>
  <div class="form-group">
    <label for="Cname">Contact name:</label>
    <input type="text" class="form-control" id="Cname"  placeholder="Enter Contact name" onChange={(e)=>{

setName(e.target.value);
    }}/>
   
  </div>
  <div class="form-group">
  <label for="Address">Address:</label>
    <input type="text" class="form-control" id="Address"  placeholder="34/123 nobel place ,kamdy"  onChange={(e)=>{

setAddress(e.target.value);
    }}/>
  </div>
  <div class="form-group">
  <label for="Province">Province:</label>
    <input type="text" class="form-control" id="Province"  placeholder="Ex:Central"onChange={(e)=>{

setProvince(e.target.value);
    }}/>
  </div>
  <div class="form-group">
  <label for="Phone">Phone:</label>
    <input type="text" class="form-control" id="Phone"  placeholder="+94 754236541"  onChange={(e)=>{

setPhone(e.target.value);
    }}/>
  </div>
  <div class="form-group">
  <label for="Price">Price:</label>
    <input type="text" class="form-control" id="Price"  placeholder="Rs:2000 /-"  onChange={(e)=>{

setPrice(e.target.value);
    }}/>
  </div>
  <div class="form-group">
  <label for="Time">Time:</label>
    <input type="text" class="form-control" id="Time"  placeholder="tt"  onChange={(e)=>{

setTime(e.target.value);
    }}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    )


}