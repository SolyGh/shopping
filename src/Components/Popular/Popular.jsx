import './Popular.css'
import React from 'react'
import { useSelector } from 'react-redux';
import { ItemsList } from '../ItemsList/ItemsList';
const Popular = () => {
  const popular = useSelector(state => state.popular);
  return (
    <div className='popular'>
      <h1>Popular in Women</h1>
      <div className="popular-item">
        <ItemsList items={popular} />
      </div>
    </div>
  )
}

export default Popular
