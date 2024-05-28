import React from 'react'
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt='' />
      </div>

      <div className='textPart bg-white p-3'>
        <p className='font-bold opacity-60'>{product.brand}</p>
        <p>{product.title}</p>
      </div>
      <div className='flex items-center space-x-2'>
        <p className='font-semibold'>₹289</p>
        <p className='line-through opacity-50'>₹2899</p>
        <p className='text-green-600 font-semibold'>70% off</p>
      </div>
    </div>
  )
}

export default ProductCard