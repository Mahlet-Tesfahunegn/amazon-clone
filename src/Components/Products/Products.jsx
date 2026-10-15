import react, { useEffect, useState } from "react"
import axios from 'axios'
import ProductsCard from './ProductsCard'
import classes from './Products.module.css'
import Loader from "../Loader/Loader"


const Product = () => {
    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setProducts(res.data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            {isLoading ? <Loader/> : <section className = {classes.product_container}>
                {
                    products?.map((singleProduct) => {
                        return <ProductsCard product = {singleProduct} key = {singleProduct.id}/>
                    })
                }
            </section>}
        </>
        
    );
}

export default Product;