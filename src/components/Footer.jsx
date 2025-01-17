import React from 'react'
import { TwitterIcon } from '../utils/icons'
import { DiscordIcon } from '../utils/icons'
import { InstagramIcon } from '../utils/icons'

const Footer = () => {
  return (
    <div data-aos="fade-up" className='xl:pt-[287px] md:pt-20 pt-10 relative max-w-[1920px] mx-auto'>
      <div className='absolute bottom-0 w-full 2xl:hidden block z-10'>
        <img className='w-full pointer-events-none' src="./assets/images/png/cloud.png" alt="cloud" />
      </div>
      <div className='absolute right-0 bottom-[8%] -z-10'>
        <img src="../assets/images/png/footer-rainbow.png" alt="footer-rainbow" className='pointer-events-none max-xl:max-w-[351px] md:block hidden' />
      </div>
      <div className='absolute left-0 bottom-[8%] -z-10 max-xl:max-w-[300px]'>
        <img src="../assets/images/png/footer-stars.png" alt="footer-star" />
      </div>
      <div className="container relative z-10">
        <a href="/" className='flex justify-center'><img src="./assets/images/png/logo.png" alt="footer-logo" /></a>
        <div className='flex gap-5 justify-center lg:pt-[60px] md:pt-12 pt-6 relative z-10'>
          <a href="https://x.com/?lang=en" className='cursor-pointer' target='_blank'><TwitterIcon /></a>
          <a href="https://www.instagram.com/" className='cursor-pointer' target='_blank'> <InstagramIcon /></a>
          <a href="https://discord.com/" className='cursor-pointer' target='_blank'><DiscordIcon /></a>
        </div>
        <p className='sm:text-xl text-base font-normal text-center md:py-16 py-7 '>Copyright@CrazyUnicorn.com</p>
      </div>
    </div>
  )
}

export default Footer