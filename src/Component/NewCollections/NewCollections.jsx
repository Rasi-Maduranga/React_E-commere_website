import React from 'react'
import './Newcollections.css'
import Item from '../Item/Item'
import new_collection from '../Assets/new_collection'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <br />
      <h1>NEW ARRIVED</h1>
      <hr />
      <div className="collection">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
