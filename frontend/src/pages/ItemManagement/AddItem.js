import React, { useState } from 'react'
import '../../styles/itemStyles.css'
import axios from 'axios';

 function AddItem() {

  const [itemName, setName] = useState("");
  const [itemPrice, setPrice] = useState("");

  function sendData(e) {
    e.preventDefault();
    
    const newItem = {
      itemName,
      itemPrice
    }

    axios.post("http://localhost:8091/item/add", newItem).then(()=>{
      alert("Item added")
    }).catch((err) =>{
      alert(err)
    })

  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label for="itemName">Item Name</label>
          <input type="text" class="form-control" id="itemName" placeholder="Enter Item Name"
            onChange={(e) => {
              setName(e.target.value);
            }} />
        </div>
        <div className="mb-3">
          <label for="itemPrice">Item Price</label>
          <input type="text" class="form-control" id="itemPrice" placeholder="Enter Item Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }} />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Confirm</label>
        </div>
        <button type="submit" class="btn btn-primary">Add Item</button>
      </form>
    </div>
  )
}

export default AddItem