import React, { useState, useEffect } from 'react'
import { HEADER_LIST } from '../utils/helper';
import { TwitterIcon } from '../utils/icons';
import { InstagramIcon } from '../utils/icons';
import { DiscordIcon } from '../utils/icons'

const Header = () => {
    const [open, setOpen] = useState()

    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1025) {
                document.body.classList.add('overflow-hidden')
            } else {
                document.body.classList.remove('overflow-hidden')
            }
        }
        handleOverflow()
        window.addEventListener('resize', handleOverflow)
        return () => {
            window.removeEventListener('resize', handleOverflow)
        }
    }, [open])

    return (
        <>
            <div className='container flex items-center justify-between w-full pt-[6px]'>
                <a href='#logo'>
                    <img
                        src="./assets/images/png/logo.png"
                        alt='page-logo'
                        className='w-[85px] pointer-events-none'
                    />
                </a>
                <ul className='flex items-center justify-between gap-10 max-lg:hidden'>
                    {HEADER_LIST.map((obj, i) => (
                        <li key={i}>
                            <a
                                href={obj.link}
                                className='font-normal font-pinky text-custom-xl leading-5 text-black  transition-all duration-300'
                            >
                                {obj.title}
                             
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-5 max-lg:hidden'>
                    <TwitterIcon />
                    <InstagramIcon />
                    <DiscordIcon/>
               </div>
                <div
                    className={`lg:hidden z-30 cursor-pointer`}
                    onClick={() => setOpen(!open)}
                >
                    <div className={`flex flex-col gap-[4px] items-center`}>
                        <div
                            className={`h-[2px] bg-black w-8 transition-all duration-300 ${open ? 'transform rotate-45 translate-y-[6px]' : ''
                                } `}
                        ></div>
                        <div
                            className={`h-[2px] bg-black w-8 transition-all duration-300 ${open ? 'opacity-0' : ''
                                } `}
                        ></div>
                        <div
                            className={`h-[2px] bg-black w-8 transition-all duration-300 ${open ? 'transform -rotate-45 -translate-y-[6px]' : ''
                                } `}
                        ></div>
                    </div>
                </div>
            </div>
            <div
                className={`fixed flex flex-col justify-center font-pinky items-center transition-all duration-500 w-full h-full left-0 lg:-top-full z-20 bg-pink ${open ? 'top-0 left-0' : '-top-full'
                    }`}
            >
                <ul className='flex flex-col items-center gap-8'>
                    {HEADER_LIST.map((obj, i) => (
                        <li key={i}>
                            <a
                                onClick={() => setOpen(false)}
                                href={obj.link}
                                className='text-base leading-5 font-medium font-sunflower text-black hover:text-dark-blue transition-all duration-300'
                            >
                                {obj.title}
                            </a>
                        </li>
                    ))}
                    <div className='flex gap-5'>
                        <TwitterIcon />
                        <InstagramIcon />
                        <DiscordIcon />
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Header