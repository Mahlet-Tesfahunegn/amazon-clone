import react, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFromatter from '../CurrencyFormatter/CurrencyFormatter';
import classes from './Products.module.css'
import {Link} from 'react-router-dom'
import { Type } from '../../Utility/action.type';
import {DataContext} from "../../DataProvider/DataProvider"

const ProductsCard = ({product, flex, renderDesc, renderAdd}) => {

    const {image, title, rating, price, id, description} = product;
    const[state, dispatch] = useContext(DataContext)
    
    const add_to_cart = () => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item:{
               image, title, rating, price, id, description 
            }
         })
    }

    return(
        <section className={`${classes.card_container} ${flex ? classes.product_flexed : " "}`}>
            <Link to = {`/products/${id}`} >
                <img src={image} alt="" />
            </Link>
            <div>
                {renderDesc && <div style = {{maxWidth : "750px", paddingTop: "15px"}}>{description}</div>}
                <h3>{title}</h3>
                <div className = {classes.rating}>
                    {/* rating */}
                    <Rating value ={rating?.rate} precision = {0.1}/>
                    {/* rating count */}
                    <small>{rating?.count}</small>
                </div>
                <div>
                    {/* price */}
                    <CurrencyFromatter amount = {price}/>
                </div>
                { renderAdd && <button className={classes.button} onClick={add_to_cart}>add to cart</button> }  
            </div> 
        </section>
    )
    
};

export default ProductsCard;