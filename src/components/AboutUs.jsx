import React,{useEffect} from "react";
import CustomHeading from "../common/CustomHeading";
import CustomDescription from "../common/CustomDescription";
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,   
      once: true,    
    });
  }, []);
  return (
    <div id="about" className="flex items-center justify-center xl:pb-[231px] md:pb-[100px] pb-16 relative max-w-[1920px] mx-auto">
      <div className='absolute left-0 bottom-[-17%] -z-10 max-xl:max-w-[300px]'>
        <img src="../assets/images/png/about-left-star.png" alt="footer-star" />
      </div>
      <div className='absolute right-0 top-[-59%] -z-10 '>
        <img src="../assets/images/png/about-right-star.png" className="pointer-events-none" alt="footer-star" />
      </div>
      <div className="container">
        <div data-aos="fade-up" className="xl:flex max-lg:flex-col items-center justify-between">
          <div className="xl:w-6/12 w-full flex justify-center">
            <div className="grid-box flex justify-center max-sm:px-4 max-xl:pb-24">
              <div className="grid-item-1">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" className="md:-mt-12 object-cover pointer-events-none" />
              </div>
              <div className="grid-item-2">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" className="object-cover pointer-events-none" />
              </div>
              <div className="grid-item-3">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" className="object-cover pointer-events-none" />
              </div>
              <div className="grid-item-4">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" className="object-cover pointer-events-none" />
              </div>
              <div className="grid-item-5">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" className="object-cover pointer-events-none" />
              </div>
              <div className="grid-item-6">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" className="object-cover pointer-events-none" />
              </div>
            </div>
          </div>
          <div data-aos="flip-left" className="xl:w-5/12 w-full">
            <div className="flex flex-col justify-center">
              <div className="flex relative items-center">
                <div className="relative max-xl:flex max-xl:mx-auto">
                  <img className='max-w-[118px] absolute left-[72%] lg:-top-[66%] max-sm:left-[58%] -top-[112%] pointer-events-none' src="./assets/images/png/heading-unicorn.png" alt="unicorn" />
                  <CustomHeading
                    text={'About Us'}
                    classStyle={'lg:!pb-6 !pb-4'}
                  />
                </div>
              </div>
              <CustomDescription classStyle={'!pb-[10px] max-xl:text-center'} text={'Tortor suscipit non habitant natoque elementum, lectus turpis.Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas.'} />
              <CustomDescription classStyle={'!pb-[53px] max-xl:text-center'} text={'In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris.'} />
              <div className="bg-white md:max-w-[233px] max-w-[180px] border border-black flex justify-center rounded-xl relative">
                <button className="text-gradient  md:text-custom-3xl text-2xl font-bold lg:py-5 py-3 group">
                  MINT NOW
                  <img src="../assets/images/png/button-bg.png" alt="button-bg" className="absolute -z-10 max-lg:w-[230px] max-lg:h-[60px] top-[7%] left-[4%] group-hover:top-0 group-hover:left-0 transition-all duration-500 ease-in " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;