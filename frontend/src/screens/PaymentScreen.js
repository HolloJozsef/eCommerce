import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
function PaymentScreen(props){
    const [paymentMethod,setPaymentMethod]=useState('');
    const dispatch = useDispatch();
 
  
const SubmitHandler=(e)=>{
    e.preventDefault();
    dispatch(savePayment({paymentMethod}));
    props.history.push('placeorder');
}
 
    return <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className="form">
        <form onSubmit={SubmitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Payment</h2>
                </li>
              
                <li>
                <div>
                <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e)=>setPaymentMethod(e.target.value)}/>
                <label htmlFor="paymentMethod">Paypal</label>
                </div>
                    
                </li>
                
                <li>
                    <button className="button" type="submit">Continue</button>
                </li>
               
                
            </ul>
        </form>
    </div>
    </div>
   
}
export default PaymentScreen;