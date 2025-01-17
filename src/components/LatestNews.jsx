import React, { useState } from "react";
import CustomHeading from "../common/CustomHeading";
import emailjs from "@emailjs/browser";
emailjs.init("ACFWkn8tsi2tt71D6")
const SubscribeForm = () => {
  const serviceID = "service_krvtb88";
  const templateID = "template_nd92fqi";
  const [formValue, setFormValue] = useState({
    email: "",

  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(serviceID, templateID, formValue)
      .then(
        () => {
          setFormValue({
            email: ""
          });
          alert("Thank you for subscribing!");
        }
      );
  };

  return (
    <div data-aos="zoom-in" className="text-center md:pt-9 ">
      <div className="container">
        <CustomHeading
          text={'Sign up for the latest news'}
          classStyle={'lg:!pb-6 !pb-4'}
        />
        <p className="text-black text-custom-xl md:leading-custom-3xl leading-custom-2xl max-w-[659px] mx-auto">
          Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed
          aenean egestas ut sit.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex justify-center bg-white  max-sm:pe-5 max-sm:pb-3 py-3 items-center  px-4 md:h-[69px] border sm:max-w-[521px] mx-auto rounded-xl border-brightpink">
            <img src="../assets/images/svg/email.svg" alt="email" className="sm:block hidden" />
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={formValue.email}
              onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
              required
              className="px-4 w-80  outline-none"
            />
            <div className=" bg-custom-gradient md:max-w-[156px] relative w-full md:h-[49px] h-[47px] flex max-sm:mx-auto justify-center rounded-xl mt-2">
              <button className="text-custom-2xl max-md:text-2xl max-md:py-3 max-sm:py-2 max-sm:px-[10px] max-md:px-5 leading-[40.26px] font-pinky bg-white py-[4px] px-7 rounded-xl text-nowrap border border-black absolute -top-[7px] -left-[5px] hover:top-0 hover:left-0 transition-all duration-300"> <span className='bg-clip-text text-gradient bg-gradient-to-r from-purple to-darkPurple'>subscribe</span> </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;