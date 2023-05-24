import React from 'react'
import classes from './Collection.module.css'
import { Product } from '../../components'
import { Product1, Product2, Product3, Product4 } from '../../assets'

const Feature = () => {

  const products = [
    { img: Product1, name: "candle 1", price: 111 },
    { img: Product2, name: "candle 2", price: 222 },
    { img: Product3, name: "candle 3", price: 333 },
    { img: Product4, name: "candle 4", price: 444 },
  ]

  return (
    <main className='collection'>
      <h2 className="heading__secondary center">Collections</h2>
      <div className={`${classes['collection__container']} flex`}>
        {
          products.map((item, index) => (
            <Product key={ item.name + index } img={ item.img } name={ item.name } price={ item.price } />
          ))
        }
      </div>
    </main>
  )
}

export default Feature