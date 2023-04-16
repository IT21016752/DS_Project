import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../../styles/itemStyles.css'

function DisplayItems() {

    const [items, setItems] = useState([]);

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
            <div class="container shadow rounded">
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DisplayItems;