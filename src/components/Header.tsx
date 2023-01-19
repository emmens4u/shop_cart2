import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Header = ({children}:any ) => {
    const navigate = useNavigate();
  return (
    <>
    {/* check the distance/spacing between these texts */}
    <div className='header h-20 bg-red-400'>
        <button onClick={()=>navigate('/')}>
        Presh's Shop 
        </button>
        <button 
        onClick={() => navigate('/cart')}
        className=''>Go to cart</button>
    </div>
    <div className="products-container w-[90%] max-w-[900px] grid grid-cols-3 gap-20 mx-auto my-6 ">
        {children} 
    </div>
    </>

  )
}
