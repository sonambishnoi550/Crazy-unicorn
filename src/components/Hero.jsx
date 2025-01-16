import React from 'react'

const Hero = () => {
  return (
    <div data-aos="zoom-in" id='home' className='relative'>
      <div className='absolute left-0 top-[16%] max-w-[485px] -z-10'>
        <img src="./assets/images/png/hero-left-star.png" alt="star" />
      </div>
      <div className='absolute right-0 max-w-[485px] top-[51%] -z-10'>
        <img src="./assets/images/png/hero-right-star.png" alt="star" />
      </div>
      <div className="container">
        <img className='xl:max-w-[1066px] mx-auto pt-[165px]' src="./assets/images/png/hero-image.png.webp" alt="hero" />
      </div>
    </div>
  )
}
export default Hero