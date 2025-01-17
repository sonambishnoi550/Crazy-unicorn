import React, { useState, useRef } from "react";
import { ACCORDION_DATA } from "../utils/helper";
import CustomHeading from "../common/CustomHeading";
const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div id="faqs" className="bg-dark-black lg:pt-[98px] md:pt-20 -mt-1 xl:pb-[178px] pb-9 relative max-w-[1920px] mx-auto">
      <div className='absolute left-0 top-[-25%] -z-10 max-xl:max-w-[300px]'>
        <img src="../assets/images/png/about-left-star.png" alt="footer-star" />
      </div>
      <div className='absolute right-0 top-[-3%] -z-10 max-xl:max-w-[300px]'>
        <img src="../assets/images/png/about-right-star.png" alt="footer-star" />
      </div>

      <div data-aos="flip-left" className="container max-w-[1189px] mx-auto px-4 max-sm:pt-20">
        <div className="relative">
          <img className='max-w-[118px] absolute left-[50%] lg:-top-[40%] -top-[105%] pointer-events-none' src="./assets/images/png/heading-unicorn.png" alt="unicorn" />
          <CustomHeading
            text={'faqs'}
            classStyle={'xl:!pb-[88px] lg:!pb-6 !pb-4'}
          />
        </div>
        <div className="xl:pt-[0px] lg:pt-10 pt-5">
          {ACCORDION_DATA.map((item, index) => (
            <div
              key={index}
              className={`relative lg:mb-[36px] md:mb-4 rounded-xl `}
            >
              <button data-aos="flip-left"
                onClick={() => toggleAccordion(index)}
                className={`font-normal lg:text-custom-4xl md:text-custom-3xl text-custom-xl text-black font-pinky flex justify-between items-center text-start max-sm:p-3 w-full ${openAccordion === index ? "pb-0" : "pb-0"
                  }`}
              >
                {item.heading}
                <img
                  src="./assets/images/svg/faq-icon.svg"
                  alt={openAccordion === index ? "Collapse" : "Expand"}
                  className={`size-6 ml-3  transition-transform duration-500 transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`transition-all duration-500 ease-in-out overflow-hidden`}
                style={{
                  maxHeight:
                    openAccordion === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0",
                }}
              >
                <div>
                  {item.description && (
                    <p className="text-black font-normal md:text-custom-xl text-lg leading-custom-3xl pb-[22px] max-w-[769px] border-b border-black/40">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;