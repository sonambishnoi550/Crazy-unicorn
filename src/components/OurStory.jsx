import React from 'react'
import CustomHeading from '../common/CustomHeading'
import CustomDescription from '../common/CustomDescription'
const OurStory = () => {
  return (
    <div data-aos="fade-up" id='story' className='pt-[200px] pb-[159px] relative'>
      <div className='absolute left-0 top-[-9%] -z-10'>
        <img src="./assets/images/png/about-left-star.png" alt="footer-star" />
      </div>
      <div className="container">
        <div className="relative">
          <img className='max-w-[118px] absolute left-[56%] -top-[70%]' src="./assets/images/png/heading-unicorn.png" alt="unicorn" />
          <CustomHeading
            text={'Our Story'}
            classStyle={'lg:!pb-[22px]'}
          />
        </div>
        <CustomDescription classStyle={'!text-center !max-w-[1109px] !mx-auto'} text={'Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi, sit. Sagittis, ac velit gravida a nullam lobortis in malesuada. Cras pellentesque convallis semper dolor at velit diam odio. Nullam quam sollicitudin urna eget. In gravida maecenas amet tincidunt feugiat tellus, pulvinar nulla. Ultricies eu lectus consequat et imperdiet eget elementum. Euismod placerat amet nisl sagittis arcu, et, sodales velit. Pretium elit volutpat orci accumsan, a ac id rutrum enim. Tellus luctus eget elit vitae eget nisl ante.'} />
        <CustomDescription classStyle={'!text-center !max-w-[953px] !mx-auto'} text={'Sed lectus ut elit id lectus diam massa nisl pretium. Vel amet, sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius lobortis. Morbi sit sit magna lorem arcu facilisi ipsum sed amet. At bibendum egestas in maecenas.'} />
      </div>
      
     
    </div>
  )
}

export default OurStory