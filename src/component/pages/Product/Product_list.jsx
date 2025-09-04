import React, { useEffect, useState } from 'react'

const Product_list = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/product')
      .then((res) => res.json())   // parse JSON
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h2>Product List</h2>
      <ol>
        {product.map((p) => (
          <li key={p.id}>
            <label>{p.title}</label>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Product_list
