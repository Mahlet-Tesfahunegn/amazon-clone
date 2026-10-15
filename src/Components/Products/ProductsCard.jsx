import react from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFromatter from '../CurrencyFormatter/CurrencyFormatter';
import classes from './Products.module.css'
import {Link} from 'react-router-dom'

const ProductsCard = ({product, flex, renderDesc}) => {

    const {image, title, rating, price, id, description} = product;

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
                    {console.log(rating?.rate)}
                    {/* rating count */}
                    <small>{rating?.count}</small>
                </div>
                <div>
                    {/* price */}
                    <CurrencyFromatter amount = {price}/>
                </div>
                <button className={classes.button}>add to cart</button>
            </div> 
        </section>
    )
    
};

export default ProductsCard;