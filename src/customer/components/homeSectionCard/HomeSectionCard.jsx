import React from 'react'

function HomeSectionCard({ product }) {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg
    overflow-hidden w-[15rem] mx-3' data-value={product[1]}>

      <div className='h-[13rem] w-[10rem]'>
        <img
          className='object-cover object-top w-full h-full'
          src= {product[0].imageUrl}
          alt=''>
        </img>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product[0].brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product[0].title}</p>

      </div>

    </div>
  )
}

export default HomeSectionCard