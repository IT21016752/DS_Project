import express from "express";
import Item from "../models/item.js";
//import cloudinary from "../utilities/uploadImage.js";

const itemRouter = express.Router();

itemRouter.route("/add").post((req,res)=>{

    const itemName = req.body.itemName;
    const itemPrice = Number(req.body.itemPrice);
    const url = req.body.url;

    const newItem =  new Item({
        itemName,
        itemPrice,
        url,
    })

    // const result = await cloudinary.UploadStream.upload(itemImage, {
    //     folder: item,
    //     width:300,
    //     crop: "scale"
    // })

    newItem.save().then(()=>{
        res.json("Item added successfully")
    }).catch((err)=>{
        console.log(err);
    })
})

itemRouter.route("/").get((req,res)=>{
    Item.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err)
    })
})

itemRouter.route("/update/:id").put(async (req, res) => {
    let itemID = req.params.id;
    const {itemName, itemPrice} = req.body;

    const updateItem = {
        itemName, 
        itemPrice
    }

    const update = await Item.findByIdAndUpdate(itemID, updateItem).then(() => {
        res.status(200).send({status: "Item updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating items", error: err.message});
    })
})

itemRouter.route("/delete/:id").delete(async (req,res) => {
    let itemID = req.params.id;

    await Item.findByIdAndDelete(itemID).then(() => {
        res.status(200).send({status: "Item deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting item", error: err.message});
    })
})

itemRouter.route("/get/:id").get(async (req,res) => {
    let itemID = req.params.id;
    await Item.findById(itemID).then((item) => {
        res.status(200).send({status: "Item fetched", item})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching item", error: err.message});
    })
})

export default itemRouter;