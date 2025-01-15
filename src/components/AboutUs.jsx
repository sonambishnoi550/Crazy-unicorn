import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center xl:pt-[212px] lg:pt-[160px] md:pt-[100px] pt-16 xl:pb-[231px] g:pt-[160px] md:pb-[100px] pb-16 ">
      <div className="container">
        <div className="lg:flex max-lg:flex-col items-center justify-between">
          <div className="lg:w-6/12 w-full flex justify-center">
            <div className="grid-box flex justify-center max-sm:px-4 max-sm:pb-24">
              <div className="grid-item-1">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" className="md:-mt-12" />
              </div>
              <div className="grid-item-2">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" />
              </div>
              <div className="grid-item-3">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" />
              </div>
              <div className="grid-item-4">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" />
              </div>
              <div className="grid-item-5">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" />
              </div>
              <div className="grid-item-6">
                <img src="../assets/images/png/about-unicorn.png" alt="unicorn" />
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 w-full">
            <div className="flex flex-col justify-center">
              <div className="flex relative items-center">
                <div className="relative">
                  <img className='max-w-[118px] absolute left-[67%] -top-[38%] max-sm:left-[58%] max-sm:-top-[83%]' src="./assets/images/png/heading-unicorn.png" alt="unicorn" />
                  <h2 className='lg:text-custom-8xl text-5xl text-center font-normal uppercase font-pinky lg:pb-6 pb-4'>About us</h2>
                </div>
              </div>
              <p className="text-black lg:text-custom-xl text-xl pb-[10px] font-normal leading-custom-2xl lg:leading-custom-3xl">
                Tortor suscipit non habitant natoque elementum, lectus turpis.
                Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea
                bibendum tempor non tempus egestas. Rhoncus sit est risus tellus
                lorem convallis. Amet pellentesque viverra euismod eget dignissim
                ullamcorper. In et ac amet, habitant erat fermentum eget aliquet
                lectus. Condimentum congue nibh nisl sed quis justo, senectus
                egestas.
              </p>
              <p className="text-black lg:text-custom-xl text-xl lg:pb-[53px] pb-5 font-normal leading-custom-2xl lg:leading-custom-3xl">
                In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit
                gravida potenti sed. Mauris.
              </p>
              <div className="bg-white md:max-w-[238px] max-w-[180px] border border-black flex justify-center rounded-xl relative">
              <button className="text-gradient  md:text-custom-3xl text-2xl font-bold py-5  ">
                MINT NOW
                <img src="../assets/images/png/button-bg.png" alt="button-bg" className="absolute -z-10 top-[16%] left-[5%]"/>
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
