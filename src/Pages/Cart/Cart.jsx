import React, {useContext} from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductsCard from "../../Components/Products/ProductsCard"
import CurrencyFormatter from "../../Components/CurrencyFormatter/CurrencyFormatter"
import {Link} from "react-router-dom";
import classes from "../Cart/Cart.module.css"

const Cart = () => {
    const [{basket, user}, dispatch] = useContext(DataContext)
    const total = basket.reduce((amount, item) => {
        return item.price * item.amount + amount
    }, 0)

    console.log(basket)

   

    return(
        <LayOut>
            <section className = {classes.container}>

                <div className={classes.cart_container}>
                    <h2>Hello</h2>
                    <h3>Your shopping basket</h3>
                    <hr />
                        {
                            basket?.length == 0 ? 
                            (<p>Opps! No item in your cart</p>) :
                            (basket.map((item, i) => {
                                return (
                                    <ProductsCard 
                                        key = {i}
                                        flex={true}
                                        renderDesc={true}
                                        product = {item}
                                        renderAdd = {false}
                                    />
                                )
                            }))
                        }
                </div>
    
                {basket.length !== 0 && 
                    <div className = {classes.subtotal}>
                        <div>
                            <p>Subtotal ({basket.length}) items</p>
                            <CurrencyFormatter amount = {total}/>
                        </div> 
                        <span>
                            <input type="checkbox" />
                            <small>This order contains gift</small>
                        </span> 
                        <Link to = {"/payment"}>Continue to checkout</Link>
                        
                    </div> 
                }
                   
            </section>
        </LayOut>
    )
    
};

export default Cart;