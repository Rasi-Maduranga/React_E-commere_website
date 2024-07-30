import React, { useEffect, useState } from 'react'
import './Shopping.css'
import Item from '../Item/Item'

const Shopping = () => {

  const [all_product,setAll_Product] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:4000/allproduct')
      .then((response)=>response.json())
      .then((data)=>setAll_Product(data))
  },[])

  return (
    <div className='shopitem'>
        <h1>WELCOME M Mobile</h1>
        <hr />
        <div className="shopitem-item">
            {all_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Shopping
