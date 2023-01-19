import React, {useState, useContext} from 'react'
import { StateInterface } from '../globalTypes'
import { ctx } from '../context'
import { Product } from '../containers/Product'

export const Home = () => {
    const state = useContext(ctx) as StateInterface
  return (
    <>
        {
        state.products.length ? (
          <>
             {state.products.map(product =>(
                <Product 
                key={product.id}
                title={product.title}
                image={product.image} />
             ))}
          </>
         
        ): ( 
          <h2>Loading....</h2>
        )
      }

    </>
  )
}
