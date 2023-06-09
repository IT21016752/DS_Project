import React, { useState } from 'react'
import '../../styles/itemStyles.css'
import axios from 'axios';

function AddItem() {  //ImageUpload

  const [itemName, setName] = useState("");
  const [itemPrice, setPrice] = useState("");
  const [itemImage, setImage] = useState("");


  //image
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
      });
    };

  function sendData(e) {
    e.preventDefault();

    const newItem = {
      itemName,
      itemPrice,
      url
    }

    axios.post("http://localhost:8091/item/add", newItem).then(() => {
      alert("Item added")
    }).catch((err) => {
      alert(err)
    })

  }

  const uploadImage = async (event) => {

    event.preventDefault()

    const file = event.target.files[0];
    const base64 = await convertBase64(file)
    setLoading(true);
    console.log(base64)
    axios.post("http://localhost:8091/uploadImage", { image: base64 }).then((res) => {
        setUrl(res.data);
        //res.data
        alert("Image uploaded Succesfully");
    }).then(() => setLoading(false))
        .catch(console.log);
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

        <div className="mb-3">
          <label for="itemImage">Item Image</label>
          <input type="file" class="form-control" id="itemImage"
            onChange={ uploadImage } />
        </div>
        <button type="submit" class="btn btn-primary">Add Item</button>
      </form>
    </div>
  )
}

export default AddItem;