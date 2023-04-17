import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function AllDelInfo(){

    const [delivery,setDelivery]=useState([]);
    const [Uid, setuid] = useState('');
    const [contactName, setName] = useState('');
    const [address, setAddress] = useState('');
    const [province, setProvince] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');
    const [time, setTime] = useState('');


    useEffect(()=>{
        function getDeliveryinfo() {
            axios.get("http://localhost:8091/delivery/").then((res)=>{
                //setDelivery(res)
                console.log(res.data);
            }).catch((err) =>{
                alert(err.message);
            })

        }
        getDeliveryinfo();
    },[])

//function to get one item
function getOneItem(did) {
    axios.get("http://localhost:8091/delivery/get/" + did).then((res) => {
        setuid(res.data.delivery.uid);
        setName(res.data.delivery.contactName);
        setAddress(res.data.delivery.address);
        setProvince(res.data.delivery.province);
        setPhone(res.data.delivery.phone);
        setPrice(res.data.delivery.price);
        setTime(res.data.delivery.time);

    }).catch((err) => {
        alert(err.message);
    })
}

const showUpdateBox = () => {
    document.getElementById('update-box').style.display = "block"
}

//Update function
function sendData(e) {
    e.preventDefault();
    
    const newDelivery = {
        uid,
        contactName,
        address,
        province,
        phone,
        price,
        time
    }
    
    const uid = Uid;

    axios.put("http://localhost:8091/delivery/update/"+uid, newDelivery).then(()=>{
      alert("delivery Details Updated");
      window.location.reload();
    }).catch((err) =>{
      alert(err)
    })

  }

//delete function
function deleteItem(uid){
    axios.delete("http://localhost:8091/delivery/delete/" + uid).then((res) => {
        alert('Item Deleted');
        window.location.reload();
    }).catch((err) => {
        alert(err.message);
    })
}
    return(
        <>
            <div class="container shadow rounded">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">UID</th>
                            <th scope="col">contactName</th>
                            <th scope="col">address</th>
                            <th scope="col">province</th>
                            <th scope="col">phone</th>
                            <th scope="col">price</th>
                            <th scope="col">Time</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {delivery.map(delivery => (
                            <tr>
                                <td>{delivery.UID}</td>
                                <td>{delivery.contactName}</td>
                                <td>{delivery.address}</td>
                                <td>{delivery.province}</td>
                                <td>{delivery.phone}</td>
                                <td>{delivery.price}</td>
                                <td>{delivery.Time}</td>

                                <td>
                                    <button type="button" class="btn btn-success m-3 mt-0 mb-0" onClick={() => {
                                        getOneItem(delivery.UID);
                                        showUpdateBox();
                                    }}>Update</button>
                                    <button type="button" class="btn btn-danger"onClick={() => {
                                        deleteItem(delivery.UID);
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div id="update-box" className="container">
                <form onSubmit={sendData}>
                    <div className="mb-3">
                        <label for="UID">UID</label>
                        <input type="text" class="form-control" id="UID" value={Uid}
                            disabled />
                    </div>
                    <div className="mb-3">
                        <label for="contactName">Contact name:</label>
                        <input type="text" class="form-control" id="contactName" placeholder="Enter It" value={contactName}
                            onChange={(e) => {
                                setName(e.target.value);
                            }} />
                    </div>
                   

                    <div className="mb-3">
                        <label for="address">Address:</label>
                        <input type="text" class="form-control" id="address" placeholder="Enter Contact name" value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="province">Province:</label>
                        <input type="text" class="form-control" id="province" placeholder="Ex:Central" value={province}
                            onChange={(e) => {
                                setProvince(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="Phone">Phone:</label>
                        <input type="text" class="form-control" id="Phone" placeholder="+94 754236541" value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="Price">Price:</label>
                        <input type="text" class="form-control" id="Price" placeholder="Rs:2000 /-"  value={price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }} />
                    </div>
                    <div className="mb-3">
                        <label for="Time">Time:</label>
                        <input type="text" class="form-control" id="Time" placeholder="tt" value={time}
                            onChange={(e) => {
                                setTime(e.target.value);
                            }} />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Confirm</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Update data</button>
                </form>
            </div>
        </>
    )
}

