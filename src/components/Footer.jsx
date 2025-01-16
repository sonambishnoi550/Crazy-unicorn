import React from 'react'
import { TwitterIcon } from '../utils/icons'
import { DiscordIcon } from '../utils/icons'
import { InstagramIcon } from '../utils/icons'

const Footer = () => {
  return (
    <div className='pt-[287px] relative'>
      <div className='absolute right-0 bottom-[8%] -z-10'>
        <img src="../assets/images/png/footer-rainbow.png" alt="footer-rainbow" className='pointer-events-none' />
      </div>
      <div className='absolute left-0 bottom-[8%] -z-10 '>
        <img src="../assets/images/png/footer-stars.png" alt="footer-star" />
      </div>
      <div className="container">
        <a href="/" className='flex justify-center'><img src="../assets/images/png/footer-logo.png" alt="footer-logo" /></a>
        <div className='flex gap-5 justify-center lg:pt-[60px] md:pt-12 pt-9'>
          <a href="https://x.com/?lang=en" target='_blank'><TwitterIcon /></a>
          <a href="https://www.instagram.com/" target='_blank'> <InstagramIcon /></a>
          <a href="https://discord.com/" target='_blank'><DiscordIcon /></a>
        </div>
        <p className='text-xl font-normal text-center pt-16 pb-16'>Copyright@CrazyUnicorn.com</p>
      </div>
    </div>
  )
}

export default Footer