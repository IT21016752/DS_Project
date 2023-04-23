import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../styles/itemStyles.css'

function DisplayItems() {

    const [items, setItems] = useState([]);
    const [url, setUrl] = useState('')

    //function to display all the items
    useEffect(() => {
        function getItems() {
            axios.get("http://localhost:8091/item/").then((res) => {
                setItems(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getItems();
    }, [])

    return (
        <>
            < div class="container text-center" >
                <div class="row">
                    {items.map(item => (

                        <div class="col-12 col-md-6 col-lg-4" >
                            <div class="card" style={{ width: "18rem", height: "24rem" }}>
                                <img src={item.url} style={{ width: "14rem", height: "14rem"}} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    {/* <h5 class="card-title">Item ID: {item._id}</h5> */}
                                    <h5 class="card-text">Item Name: {item.itemName}</h5>
                                    <h6 class="card-text">Item Price: {item.itemPrice}</h6>
                                    <a href="#" class="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div >

            {/* <div class="container shadow rounded">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Product ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.itemName}</td>
                                <td>{item.itemPrice}</td>
                                <td><img src={item.url} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </>
    )
}

export default DisplayItems;