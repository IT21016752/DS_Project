import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema({

    itemName : {
        type : String,
        required : true
    },
    itemPrice : {
        type : Number,
        required : true
    },
    itemImage : {
        public_id: {
            type : String,
            required: true
        },
        url: {
            type : String,
            required: true
        }
    }
})

const Item = mongoose.model("Item", itemSchema);

export default Item;