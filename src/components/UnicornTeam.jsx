import React from 'react'
import CustomHeading from '../common/CustomHeading'
const UnicornTeam = () => {
  return (
    <div data-aos="flip-left" id='team' className='pb-[147px] pt-[700px]'>
      <div className="container pt-[150px]">
        <div className="relative ">
          <img className='max-w-[118px] absolute left-[52%] -top-[87%]' src="./assets/images/png/heading-unicorn.png" alt="unicorn" />
          <CustomHeading
            text={'team'}
          />
        </div>
        <div className="flex max-xl:flex-wrap gap-6 justify-center pt-[170px]">
          <div className="border-2 backdrop-blur-[164] border-pink rounded-[25px] mt-10 bg-offwhite lg:px-[55px] px-6 pb-5 hover:scale-y-110 hover:origin-bottom transition-all duration-500">
            <img className="lg:max-w-[312px] max-w-[286px] -mt-10" src="./assets/images/png/team-unicorn.png" alt="unicorn" />
            <h3 className="text-center text-custom-4xl font-normal md:pt-[28px] uppercase font-pinky">Jerome Bell</h3>
            <p className="text-center text-custom-xl md:pt-[13px] leading-custom-3xl">(CEO)</p>
          </div>

          <div className='border-2 backdrop-blur-[164] border-pink rounded-[25px] mt-10 bg-offwhite lg:px-[55px] px-6 pb-5 hover:scale-y-110 hover:origin-bottom transition-all duration-500'>
            <img className='lg:max-w-[312px] max-w-[286px] -mt-10' src="./assets/images/png/team-unicorn.png" alt="unicorn" />
            <h3 className='text-center text-custom-4xl font-normal md:pt-[28px] uppercase font-pinky'>Jenny Wilson</h3>
            <p className='text-center text-custom-xl md:pt-[13px] leading-custom-3xl'>(founder)</p>
          </div>
          <div className='border-2 backdrop-blur-[164] border-pink rounded-[25px] mt-10 bg-offwhite lg:px-[55px] px-6 pb-5 hover:scale-y-110 hover:origin-bottom transition-all duration-500'>
            <img className='lg:max-w-[312px] max-w-[286px] -mt-10' src="./assets/images/png/team-unicorn.png" alt="unicorn" />
            <h3 className='text-center text-custom-4xl font-normal md:pt-[28px] uppercase font-pinky'>Ralph Edwards</h3>
            <p className='text-center text-custom-xl md:pt-[13px] leading-custom-3xl'>(Team Member)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnicornTeam