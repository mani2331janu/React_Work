import React from 'react'
import useFetch from '../custom-hooks/fetch'

const Dashboard = () => {
  let {product} =  useFetch("http://localhost:4000/product");
  return (
    <div className='p-6'>
      <h2>Dashboard</h2>
      <p>Total Product - {product.length}</p>
    </div>
  )
}

export default Dashboard
