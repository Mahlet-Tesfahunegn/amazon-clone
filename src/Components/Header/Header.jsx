import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css'
import LowerHeader from "./LowerHeader";
import {Link} from "react-router-dom";


const  Header = () => {
  
  return (
    <section className= {classes.sticky_header
    }>
        <section>
          <div className={classes.header_container}>
            <div className={classes.logo_container}>
                {/* icon */}
                <Link to = "/">
                  <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </Link>

                {/* delivery */}
                <div className={classes.delivery}>
                  <span>
                    {/* icon */}
                    <SlLocationPin/>
                  </span>
                  <div>
                    <p>Deliver to </p>
                    <span>Ethiopia</span>
                  </div>
                </div>
            </div>

            <div className={classes.search}>
              {/* search */}
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" placeholder="Search Amazon" />
              {/* icon */}
              <BsSearch size={40} />
            </div>
      
            <div className={classes.order_container}>
              {/* right side link */}
              <a href="" className={classes.language}>
                <img src="https://pngimg.com/uploads/flags/flags_PNG14592.png" alt="" />

                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </a>
                  
              {/* three components */}
              <Link to = "/auth">
                <div>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </div>
              </Link>

              {/* orders */}
              <Link to = "/orders">
                <p>Returning</p>
                <span>& Orders</span>
              </Link>

              {/* cart */}
              <Link to = "/cart" className={classes.cart}>
                {/* icon */}
                <BiCart size={35}/>
                <span>0</span>
                <p>Cart</p>
              </Link>

            </div>
          </div>
        </section>
        <LowerHeader/>
    </section>
  ) 
}

export default Header;