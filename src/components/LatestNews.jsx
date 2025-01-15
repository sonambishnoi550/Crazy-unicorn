import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_krvtb88";
    const templateID = "template_nd92fqi";
    const userID = "ACFWkn8tsi2tt71D6";

    emailjs
      .send(serviceID, templateID, { to_email: email }, userID)
      .then(
        () => {
          setEmail("");
          alert("Thank you for subscribing!");
        },
        (error) => {
          console.error("Error:", error);
          setStatus("Subscription failed. Please try again.");
        }
      );
  };

  return (
    <div className="text-center xl:pt-[656px] lg:pt-[300px] pt-9">
      <div className="container">
        <h2 className="lg:text-6xl text-4xl font-pinky uppercase pb-6">
          Sign up for the latest news
        </h2>
        <p className="text-black max-w-[439px] mx-auto">
          Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed
          aenean egestas ut sit.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="sm:flex justify-center bg-white  max-sm:pe-5 max-sm:pb-4 items-center relative  px-4 border sm:max-w-[521px] mx-auto rounded-xl border-brightpink">
            <img src="../assets/images/svg/email.svg" alt="email" className="sm:block hidden" />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 sm:py-6 py-4 w-80  outline-none relative z-20"
            />
            <div className="bg-white md:max-w-[156px] max-w-[130px] border border-black flex max-sm:mx-auto justify-center rounded-xl relative mb-1">
              <button type="submit" className="text-gradient  md:text-custom-2xl text-2xl font-bold px-7 sm:py-2 py-1">
                subscribe
                <img src="../assets/images/png/button-bg.png" alt="button-bg" className="absolute -z-10 top-[16%] left-[5%]" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
