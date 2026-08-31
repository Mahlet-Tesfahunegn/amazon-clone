import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css'
import LowerHeader from "./LowerHeader";


function Header (){
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
              {/* icon */}
              <a href="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
              </a>

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
            <input type="text" placeholder="search product" />
            {/* icon */}
            <BsSearch size={25} />
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
            <a href="">
              <div>
                <p>Hello, Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>

            {/* orders */}
            <a href="">
              <p>Returning</p>
              <span>& Orders</span>
            </a>

            {/* cart */}
            <a href="" className={classes.cart}>
              {/* icon */}
              <BiCart size={35}/>
              <span>0</span>
            </a>

          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  )
}

export default Header