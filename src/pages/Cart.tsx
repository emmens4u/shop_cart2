import React, { useContext } from 'react'
import { ctx } from '../context'
import { StateInterface } from '../globalTypes'
import { Product } from '../containers/Product'

export const Cart = () => {
    const state = useContext(ctx) as StateInterface
  return (
    <>
        {state.shoppingCart.length ? (
        <div>
            {state.shoppingCart.map(product => (
                <Product
                key={product.id}
                image={product.image}
                title={product.title}
                 />
            ))}
        </div>
        ) : (
            <h2>Cart is empty</h2>
        
        )}        
    </>
  )
}
