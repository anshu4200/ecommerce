import React from 'react'
import MainCarousel from '../homeCarousel/MainCarousel'
import HomeSectionCarousel from '../homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/MensKurta'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} productSection={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} productSection={"Men's Shoe"}/>
        <HomeSectionCarousel data={mens_kurta} productSection={"Men's Shirt"}/>
        <HomeSectionCarousel data={mens_kurta} productSection={"Women Saree"}/>
      </div>
    </div>
  )
}

export default HomePage