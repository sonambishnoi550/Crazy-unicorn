import React, { useState, useRef } from "react";
import { ACCORDION_DATA } from "../utils/helper";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div id="faqs" className="bg-dark-black lg:pt-[98px] pt-0 -mt-1 pb-[178px] max-lg:pb-[60px] relative">
      <div className='absolute left-0 top-[-25%] -z-10'>
        <img src="../assets/images/png/about-left-star.png" alt="footer-star" />
      </div>
      <div className='absolute right-0 top-[-3%] -z-10'>
        <img src="../assets/images/png/about-right-star.png" alt="footer-star" />
      </div>

      <div className="container max-w-[1189px] mx-auto px-4">
        <div className="relative">
          <img className='max-w-[118px] absolute left-[50%] -top-[45%]' src="./assets/images/png/heading-unicorn.png" alt="unicorn" />
          <h1 className='text-custom-8xl text-center font-normal uppercase font-pinky'>FAQs</h1>
        </div>
        <div className="pt-[60px] max-sm:pt-10">
          {ACCORDION_DATA.map((item, index) => (
            <div
              key={index}
              className={`relative mb-[36px] rounded-xl `}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`font-medium lg:text-custom-4xl md:text-custom-3xl text-custom-xl text-black font-pinky flex justify-between items-center text-start max-sm:p-3 w-full ${openAccordion === index ? "pb-0" : "pb-0"
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
                    <p className="text-black font-normal md:text-custom-xl text-lg leading-custom-3xl pb-[22px] max-w-[769px] border-b border-black  ">
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