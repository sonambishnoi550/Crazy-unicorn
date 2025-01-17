import React from "react";
import CustomHeading from "../common/CustomHeading";
import CustomDescription from "../common/CustomDescription";
const Roadmap = () => {
  return (
    <div data-aos="fade-up" id="roadmap" className="flex justify-center items-center relative max-w-[1920px] mx-auto">
      <div className='absolute left-0 bottom-[-47%] -z-10 max-xl:max-w-[300px]'>
        <img src="../assets/images/png/about-left-star.png" alt="footer-star" />
      </div>
      <div className='absolute right-0 top-[-20%] -z-10 max-xl:max-w-[300px]'>
        <img src="../assets/images/png/about-right-star.png" alt="footer-star" />
      </div>
      <div className='absolute right-0 bottom-[-87%] -z-10 max-xl:max-w-[300px]'>
        <img src="../assets/images/png/about-right-star.png" alt="footer-star" />
      </div>
      <div className="container max-sm:pt-10">
        <div className="relative">
          <img className='max-w-[118px] absolute left-[54%] lg:-top-[31%] -top-[104%] max-sm:left-[58%] pointer-events-none' src="./assets/images/png/heading-unicorn.png" alt="unicorn" />
          <CustomHeading
            text={'Roadmap'}
            classStyle={'lg:!pb-[117px] sm:!pb-8 !pb-4'}
          />
        </div>
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:block hidden z-0">
            <img
              src="../assets/images/png/roadmap-path.png"
              alt="Roadmap Path"
              className="h-[1200px] xl:h-[1920px] md:max-w-[755px] w-auto"
            />
          </div>
          <div className="relative z-10 xl:grid  xl:grid-cols-2 gap-16">
            <div data-aos="fade-up" className="flex justify-start items-center">
              <div className="max-w-sm text-right xl:pt-[156px] lg:pt-12 pt-4">
                <h3 className="text-2xl md:text-custom-4xl font-bold md:mb-4 mb-2 text-left">PHASE 1</h3>
                <CustomDescription classStyle={'!text-lg md:!text-custom-xl !text-left'} text={'Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing malesuada lorem ullamcorper. Faucibus netus sed varius lobortis orci sit sit magna lorem arcu.'} />
              </div>
            </div>
            <div></div>
            <div></div>
            <div data-aos="fade-up" className="flex justify-end items-center">
              <div className="max-w-sm text-left max-lg:pt-4">
                <h3 className="text-2xl md:text-custom-4xl font-bold md:mb-4 mb-2">PHASE 2</h3>
                <CustomDescription classStyle={'!text-lg md:!text-custom-xl'} text={'Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing malesuada lorem ullamcorper. Faucibus netus sed varius  lobortis orci sit sit magna lorem arcu.'} />
              </div>
            </div>
            <div data-aos="fade-up" className="flex justify-start items-center">
              <div className="max-w-sm text-left lg:pt-[70px] max-lg:pt-4">
                <h3 className="text-2xl md:text-custom-4xl font-bold md:mb-4 mb-2">PHASE 3</h3>
                <CustomDescription classStyle={'!text-lg md:!text-custom-xl'} text={'Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing malesuada lorem ullamcorper. Faucibus netus sed varius lobortis orci sit sit magna lorem arcu.'} />
              </div>
            </div>
            <div></div>
            <div></div>
            <div data-aos="fade-up" className="flex justify-end items-center">
              <div className="max-w-sm text-left md:ps-9 lg:pt-16 max-lg:pt-4">
                <h3 className="text-2xl md:text-custom-4xl font-bold md:mb-4 mb-2">PHASE 4</h3>
                <CustomDescription classStyle={'!text-lg md:!text-custom-xl'} text={' Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing malesuada lorem ullamcorper. Faucibus netus sed varius lobortis orci sit sit magna lorem arcu.'} />
              </div>
            </div>
            <div data-aos="fade-up" className="flex justify-start items-center">
              <div className="max-w-sm text-left xl:pt-16 max-lg:pt-4 pr-12">
                <h3 className="text-2xl md:text-custom-4xl font-bold md:mb-4 mb-2">PHASE 5</h3>
                <CustomDescription classStyle={'!text-lg md:!text-custom-xl'} text={'Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing malesuada lorem ullamcorper. Faucibus netus sed varius lobortis orci sit sit magna lorem arcu.'} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;