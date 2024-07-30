import React from 'react'
import './Breadcrum.css'
import { SlArrowRight } from "react-icons/sl";

const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
      Home <SlArrowRight /> Shop <SlArrowRight /> {product.category} <SlArrowRight /> {product.name}
    </div>
  )
}

export default Breadcrum