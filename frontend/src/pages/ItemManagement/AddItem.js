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

  // //image
  // function UploadInput() {
  //   return (
  //     <div class="flex items-center justify-center w-full">
  //       <label for="dropZone-file"
  //         class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray">
  //         <div class="flex flex-col items-center justify-center pt-5 pb-6">
  //           <svg
  //             aria-hidden="true"
  //             class="w-10 h-10 mb-3 text-gray-400"
  //             fill="none"
  //             stroke="currentColor"
  //             viewBox='0 0 24 24'
  //             xmlns='http://www/w3.org/2000/svg'
  //           >
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0"></path>
  //           </svg>
  //           <p class="mb-2 text-gray-500 dark:text-gray-400">
  //             <span class="font-semibold">Click to upload</span>or drag and dropZone
  //           </p>
  //           <p class="text-xs text-gray-500 dark:text-gray-400">
  //             SVG, PNG, JPG or GIF (MAX. 800*400px)
  //           </p>
  //         </div>
  //         <input onchange={AddItem}
  //           id="dropzone-file"
  //           type="file"
  //           class="hidden" />
  //       </label>
  //     </div>
  //   )
  // }


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

        <img src={url}>
        </img>
        
        <button type="submit" class="btn btn-primary">Add Item</button>
      </form>
    </div>
  )
}

export default AddItem;