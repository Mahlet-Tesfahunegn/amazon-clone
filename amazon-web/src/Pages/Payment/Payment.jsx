import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import  classes  from "./Payment.module.css"
import ProductsCard from "../../Components/Products/ProductsCard"
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const Payment = () => {
    const [{user, basket}] = useContext(DataContext);
    const totalItem = basket?.reduce((amount, item) => {
        return item.amount + amount
    }, 0); 
    const stripe = useStripe();
    const elements = useElements();

    return(
        <LayOut>
            {/* header*/}
            <div className={classes.payment_container}>
                Checkout ({totalItem}) items
            </div>
            <hr />

            {/* payment method */}
            <section className={classes.payment}>
                {/* address */}
                <div className={classes.flex}>
                    <h3>Delivery Address</h3>
                    <div>
                        <div>{user.email}</div>
                        <div>123 React lane</div>
                        <div>Chicago, IL</div>
                    </div>
                </div>
                <hr />

                {/* product */}
                <div className={classes.flex}>
                    <h3>Review items and delivery</h3>
                    <div>
                        {
                            basket?.map((item) => {
                                return <ProductsCard product={item} flex={true}/>
                            })
                        }
                    </div>
                </div>
                <hr />

                {/* card form */}
                <div className={classes.flex}>
                    <h3>Payment Methods</h3>
                    <div className={classes.payment_form_container}>
                        <div>
                            <form action="">
                                <CardElement />
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                
            </section>
        </LayOut>
    )
};

export default Payment;