import React, {useContext} from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductsCard from "../../Components/Products/ProductsCard"

const Cart = () => {
    const [{basket, user}, dispatch] = useContext(DataContext)

    return(
        <LayOut>
            <section>
                <div>
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

                <div>
                </div>
            </section>
        </LayOut>
    )
    
};

export default Cart;