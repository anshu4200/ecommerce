import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';


const HomeSectionCarousel = ({data, productSection}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => { console.log(activeIndex) }, [activeIndex])
  
  const items = data
  .slice(0, 8)
  .map((item, index) => 
  <HomeSectionCard product={[item,index]} />)
  //this.setState({items: items})
  
  const slidePrev = () => {
    console.log(slidePrev)
    setActiveIndex(activeIndex - 1)
  };
  const slideNext = () => setActiveIndex(activeIndex + 1)

  const Carousel = () => (
    <AliceCarousel
    items={items}
    autoWidth
    disableButtonsControls
    disableDotsControls
    activeIndex={activeIndex}
  />
  );
  return (
    <div className='relative px-4 lg:px-8'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{productSection}</h2>
      <div className='relative p-5 '>
      <Carousel />
        <Button
          variant='contained'
          className='z-50'
          onClick={slideNext}
          sx={{
            position: 'absolute',
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white"
          }}
          aria-label='next'>
          <KeyboardArrowLeftIcon
            sx={{
              transform: "rotate(90deg)",
              color: "black"
            }} />
        </Button>

        {activeIndex !== 0 &&
          <Button
            variant='contained'
            className='z-50'
            onClick={slidePrev}
            sx={{
              position: 'absolute',
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white"
            }}
            aria-label='previous'>
            <KeyboardArrowLeftIcon
              sx={{
                transform: "rotate(90deg)",
                color: "black"
              }} />
          </Button>
        }
      </div>
    </div>
  )
}

export default HomeSectionCarousel