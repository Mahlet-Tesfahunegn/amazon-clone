import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import Category from "../../Components/Category/Category"
import Carousel from "../../Components/Carousel/Carousel"
import Products from "../../Components/Products/Products"


const Landing = () => {
    return(
        <LayOut>
            <Carousel/>
            <Category/>
            <Products/>
         </LayOut>
    )
    
};

export default Landing;