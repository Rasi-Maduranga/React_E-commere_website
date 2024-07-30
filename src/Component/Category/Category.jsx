import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className="category">
        <div className="category-list">
            <ul className='cat-menu'>
            <li><Link style={{textDecoration: 'none'}} to='/apples'>Apple</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/samsungs'>Samsung</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/redmis'>Redmi</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/sonys'>Sony</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/realmes'>Realme</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/oppos'>Oppo</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/vivos'>Vivo</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/pocos'>Poco</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Category
