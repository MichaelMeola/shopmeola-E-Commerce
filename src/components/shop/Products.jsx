import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CardDisplay from './CardDisplay.jsx'

const Products = () => {

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        axios.get('/products')
        .then((res) => {
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    
    const cards = currentData.map((product) => <CardDisplay
    initialProductData={product}
    key={product.productId}
    />)



  return (
    <body>
        {cards}
    </body>
  )
}

export default Products