import React from 'react'

const Hero = () => {
  return (
    <div data-aos="zoom-in" id='home' className='relative max-md:pb-10 max-w-[1920px] mx-auto'>
      <div className='absolute md:-bottom-[54%] -bottom-[33%] -z-10 w-full '>
        <img className='w-full lg:hidden block ' src="./assets/images/png/cloud.png" alt="cloud" />
        <img className='w-full rotate-180 -mt-1 lg:hidden block' src="./assets/images/png/cloud.png" alt="cloud" />
      </div>
      <div className='absolute left-0 top-[16%] max-w-[485px] max-xl:max-w-[300px] -z-10 md:block hidden'>
        <img src="./assets/images/png/hero-left-star.png" alt="star" />
      </div>
      <div className='absolute right-0 max-w-[485px] max-xl:max-w-[300px] top-[51%] -z-10 md:block hidden'>
        <img src="./assets/images/png/hero-right-star.png" alt="star" />
      </div>
      <div className="container">
        <img className='xl:max-w-[1149px] mx-auto lg:pt-[165px] md:pt-16 pt-6' src="./assets/images/png/hero-image.png" alt="hero" />
      </div>
    </div>
  )
}
export default Hero