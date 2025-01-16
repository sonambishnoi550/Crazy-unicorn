import React, { useState } from "react";
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
    <div className="text-center xl:pt-[656px] lg:pt-[300px] pt-9">
      <div className="container">
        <h2 className="lg:text-6xl text-5xl font-pinky uppercase pb-6">
          Sign up for the latest news
        </h2>
        <p className="text-black max-w-[439px] mx-auto">
          Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed
          aenean egestas ut sit.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="sm:flex justify-center bg-white  max-sm:pe-5 max-sm:pb-4 items-center  px-4 md:h-[69px] border sm:max-w-[521px] mx-auto rounded-xl border-brightpink">
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
            <div className=" bg-custom-gradient md:max-w-[156px] relative max-w-[130px] w-full h-[49px]  flex max-sm:mx-auto justify-center rounded-xl mt-2">
              <button className="text-custom-2xl max-md:text-2xl max-md:py-3 max-sm:py-2 max-sm:px-4 max-md:px-5 leading-[40.26px] font-pinky bg-white py-[4px] px-7 rounded-xl text-nowrap border border-black absolute -top-[7px] -left-[5px] hover:top-0 hover:left-0 transition-all duration-300"> <span className='bg-clip-text text-gradient bg-gradient-to-r from-purple to-darkPurple'>subscribe</span> </button>
            </div>
          </div>
        </form>
      </div >
    </div>

  );
};

export default SubscribeForm;
