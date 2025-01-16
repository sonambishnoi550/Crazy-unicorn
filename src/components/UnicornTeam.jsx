import React from 'react'

const UnicornTeam = () => {
  return (
    <div className='pb-[147px]'>
      <div className="container">
        <div className="relative">
          <img className='max-w-[118px] absolute left-[52%] -top-[45%]' src="./assets/images/png/heading-unicorn.png" alt="unicorn" />
          <h1 className='text-custom-8xl text-center font-normal uppercase font-pinky'>Team</h1>
        </div>
        <div className="flex max-xl:flex-wrap gap-6 justify-center pt-[190px]">
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