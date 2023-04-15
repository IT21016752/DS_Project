import React,{useState} from "react"

export default function AddDeliveryInfo(){

    return(
<div className="container">
        <form>
  <div class="form-group">
    <label for="exampleInputname">Contact name:</label>
    <input type="text" class="form-control" id="exampleInputname"  placeholder="Enter Contact name"/>
   
  </div>
  <div class="form-group">
  <label for="exampleInputAddress">Address:</label>
    <input type="text" class="form-control" id="exampleInputAddress"  placeholder="34/123 nobel place ,kamdy"/>
  </div>
  <div class="form-group">
  <label for="exampleInputProvince">Province:</label>
    <input type="text" class="form-control" id="exampleInputProvince"  placeholder="Ex:Central"/>
  </div>
  <div class="form-group">
  <label for="exampleInputPhone">Phone:</label>
    <input type="text" class="form-control" id="exampleInputPhone"  placeholder="+94 754236541"/>
  </div>
  <div class="form-group">
  <label for="exampleInputPrice">Price:</label>
    <input type="text" class="form-control" id="exampleInputPrice"  placeholder="Rs:2000 /-"/>
  </div>
  <div class="form-group">
  <label for="exampleInputTime">Time:</label>
    <input type="text" class="form-control" id="exampleInputTime"  placeholder="tt"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    )


}