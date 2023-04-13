import React,{useState} from "react"

export default function AddDeliveryInfo(){

    return(

        <div class="col-50">
            <h3>Billing Address</h3>
            <label for="name"><i class="fa fa-user"></i> Contact Name</label>
            <input type="text" id="name" name="name" placeholder="John M. Doe"/>
            <label>   
            Phone :  
            </label>  
            <input type="text" name="country code"  value="+94" size="2"/>   
            <input type="text" name="phone" size="10"/>  <br/>  
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="province"><i class="fa fa-institution"></i> Province</label>
            <input type="text" id="province" name="province" placeholder="Central"/>
            <label for="Amount"> Amount</label>
            <input type="text" id="amount" name="amount" placeholder="Rs. 1000/="/>
            <label for="time"> Time</label>
            <input type="text" id="amount" name="amount" placeholder="A.M. or P.M."/>
          </div>
    )


}