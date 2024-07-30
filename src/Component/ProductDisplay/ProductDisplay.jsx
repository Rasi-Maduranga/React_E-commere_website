import React, { useContext } from 'react'
import './ProductDisplay.css'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
          <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              Rs.{product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              Rs.{product.new_price}
            </div>
          </div>
          <div className="productdisplay-right-description">
          Ultra-clear 200MP camera with OIS
          1.5K 120Hz AMOLED curved display
          MediaTek Dimensity 7200-Ultra
          All-star durability
          120W HyperCharge with 5000mAh (typ) battery
          IP68 dust and water resistance*
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDisplay

