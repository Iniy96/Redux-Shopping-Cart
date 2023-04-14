import React from 'react'
import Products from '../../components/Products'

const Home = () => {
  return (
    <div>
      <h1 className='text-center'>Welcome to Redux Store</h1>
      <div className='container'>
        <h4>Products</h4>
        <Products/>
      </div>
    </div>
  )
}

export default Home