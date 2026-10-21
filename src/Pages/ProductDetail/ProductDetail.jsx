import React, { useEffect,  useState } from "react";
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { productUrl } from "../../Api/endpoints";
import ProductsCard from "../../Components/Products/ProductsCard";
import Loader from "../../Components/Loader/Loader";

const ProductDetail = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${productUrl}products/${id}`)
        .then((res) => {
            setProduct(res.data);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
    }, []);

    return (
        <LayOut>
             {isLoading ? <Loader/> : 
             <ProductsCard 
             product = {product}
             flex = {true}
             renderDesc = {true}
             renderAdd = {true}
             />}     
        </LayOut>
          
    );
}

export default ProductDetail