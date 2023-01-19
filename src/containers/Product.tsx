import React from 'react'
import {useNavigate} from "react-router-dom"

interface ProductProps {
  title: string;
  image: string;
}

export const Product = ({title, image}: ProductProps) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(`products/${title.trim()}`)
  
  return (
    <div className='Product w-52 h-[400px]' onClick={handleClick}>
        <div className='Product__thumbnail w-full h-[300px]'>
            <img className='max-h-[300px]'
             src={image} alt="Product" />
        </div>

        <h2 className='Product__title text-xl'>
        {title}
        </h2>
    </div>
  )
}
