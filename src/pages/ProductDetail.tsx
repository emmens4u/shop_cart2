import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import { ctx } from '../context'
import { ActionInterface, ProductInterface } from '../globalTypes'

interface ProductDetailProps{
    dispatch: React.Dispatch<ActionInterface>
}

export const ProductDetail = ({dispatch} :any) => {
// use data & print on UI

    const state = useContext(ctx)
    const {title} = useParams()
    const product : ProductInterface = state?.products.find(
        product => product.title.trim() === title?.trim()
    ) as ProductInterface

    console.log("product", product)

    const handleClick = () =>{
        dispatch({type: "ADD_TO_CART", payload: product})
        // console.log('added to cart', product)
    }
  return (
    
    <>
    <h2>{title}</h2>
    <button onClick={handleClick}>
        Add to cart
    </button>
    </>
  )
}
