import React, {useState, useEffect} from "react";
import LayOut from "../../Components/LayOut/LayOut";
import axios from 'axios'
import { productUrl } from "../../Api/endpoints";
import { useParams } from "react-router-dom";
import ProductsCard from '../../Components/Products/ProductsCard'
import classes from '../../Components/Products/Products.module.css'
import Loader from "../../Components/Loader/Loader";

const Result = () => {
    const {categoryName} = useParams();
    console.log(categoryName)
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${productUrl}products/category/${categoryName}`)
        .then((res) => {
            setResult(res.data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
    }, []);


    return(   
        <LayOut>
            {isLoading ? <Loader/> : <section>
                <h3 style = {{padding: "30px"}}>Results</h3>
                <p style = {{padding: "30px"}}>Category / {categoryName}</p>
                <hr />
                <div className = {classes.product_container}>
                    {
                        result?.map((product) => {
                            return <ProductsCard product = {product} key = {product.id}/>
                        }) 
                    }
                </div>

            </section> }
            
        </LayOut>
    );
};

export default Result;