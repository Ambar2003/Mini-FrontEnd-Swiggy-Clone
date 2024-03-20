import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import AccordionBody from "./AccordionBody";
import { SmilingCJ } from "../utils/constants";
import Order from "./Order";
const Cart = () =>{
    let totalCost = 0;
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    cartItems.map(function costCalculator(cartItems){
        totalCost+= cartItems.card.info.price == null?cartItems.card.info.defaultPrice/100:cartItems.card.info.price/100;
    })
    console.log(totalCost);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart()); 
};
    return(
        <div className="m-auto">
            <h1 className="font-bold text-2xl text-center">Cart</h1>
            <div>
                    <button className ="bg-green-300 mx-[51rem] hover:bg-green-600 content-center" onClick = {handleClearCart}>Clear Cart</button>
                    {cartItems.length === 0 && <div>
                        <h1 className="text-center text-6xl m-4">Cart is Empty! Do Some Shopping!</h1>
                        <img src = {SmilingCJ} className="border-4 m-4 border-indigo-600 mx-auto h-80"></img>
                        </div>}
                        <AccordionBody items = {cartItems}></AccordionBody>
                        <div className="text-center text-4xl m-10">
                            <h1 className="m-10">Total Cost:<span className="bg-cyan-400">₹{totalCost}</span></h1>
                            {cartItems.length != 0 && <span className=" bg-green-300 hover:bg-green-600" onClick = {handleClearCart} link to>
                                <Link to = "/Order">Order Your Food!!!!
                        </Link></span>
}
                        </div>
                    
            </div>
            
        </div>
    )
}
export default Cart;