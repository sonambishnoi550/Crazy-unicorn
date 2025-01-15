import React from "react";

const Roadmap = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="container">
        <div className="relative">
          <img className='max-w-[118px] absolute left-[54%] -top-[31%] max-sm:left-[58%] max-sm:-top-[83%] ' src="./assets/images/png/heading-unicorn.png" alt="unicorn" />
          <h2 className='lg:text-custom-8xl text-5xl text-center font-normal uppercase font-pinky lg:pb-[117px] pb-4'>Roadmap</h2>
        </div>
        <div className="relative w-full max-w-6xl">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:block hidden z-0">
            <img
              src="../assets/images/png/roadmap-path.png"
              alt="Roadmap Path"
              className="h-[1200px] xl:h-[1920px] md:max-w-[755px] w-auto"
            />
          </div>
          <div className="relative z-10 xl:grid  xl:grid-cols-2 gap-16">
            <div className="flex justify-start items-center">
              <div className="max-w-sm text-right xl:pt-[156px] pt-12">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-left">PHASE 1</h3>
                <p className="text-sm md:text-base text-left">
                  Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                  adipiscing malesuada lorem ullamcorper. Faucibus netus sed varius
                  lobortis orci sit sit magna lorem arcu.
                </p>
              </div>
            </div>
            <div></div>
            <div></div>
            <div className="flex justify-end items-center">
              <div className="max-w-sm text-left max-lg:pt-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4">PHASE 2</h3>
                <p className="text-sm md:text-base">
                  Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                  adipiscing malesuada lorem ullamcorper. Faucibus netus sed varius
                  lobortis orci sit sit magna lorem arcu.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="max-w-sm text-left lg:pt-[70px] max-lg:pt-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4">PHASE 3</h3>
                <p className="text-sm md:text-base">
                  Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                  adipiscing malesuada lorem ullamcorper. Faucibus netus sed varius
                  lobortis orci sit sit magna lorem arcu.
                </p>
              </div>
            </div>
            <div></div>
            <div></div>
            <div className="flex justify-end items-center">
              <div className="max-w-sm text-left md:ps-9 lg:pt-16 max-lg:pt-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4">PHASE 4</h3>
                <p className="text-sm md:text-base">
                  Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                  adipiscing malesuada lorem ullamcorper. Faucibus netus sed varius
                  lobortis orci sit sit magna lorem arcu.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="max-w-sm text-left xl:pt-16 max-lg:pt-10 pr-12">
                <h3 className="text-xl md:text-2xl font-bold mb-4">PHASE 5</h3>
                <p className="text-sm md:text-base">
                  Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis,
                  adipiscing malesuada lorem ullamcorper. Faucibus netus sed varius
                  lobortis orci sit sit magna lorem arcu.
                </p>
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
