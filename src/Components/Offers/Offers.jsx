import React from 'react'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on best sellers products</p>
        <button>Check Me</button>
      </div>
      <div className="offers-right">
        <img src={require('../Assets/exclusive_image.png')} alt='' />
      </div>
    </div>
  )
}

export default Offers
