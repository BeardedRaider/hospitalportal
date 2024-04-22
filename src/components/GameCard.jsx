import React from "react";

<link rel="stylesheet" href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css" />

const GameCard = ({ image, name, description }) => {
  console.log(image);

  return (
    <>
    <section>
      <div className="flex-none px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-20 mb-8">
        <div className="!z-5 relative flex flex-row rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-row w-full !p-4 3xl:p-![8px] bg-white undefined">


          <div className="h-full w-full">

            <div className="relative w-full">

              <img src={image} className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>

              <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">

                <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">

                  {/* heart symbol */}
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z">
                    </path>
                  </svg>
                </div>

              </button>
            </div>

            <div className="mb-3 flex items-center justify-between px-1 md:items-start">

              <div className="mb-2">
                <p className="text-lg font-bold text-navy-700"> {name}</p>
                <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">{description}</p>
              </div>
              
            </div>

            <div className="flex items-center justify-between md:items-center lg:justify-between ">

              <div className="flex">
                <p className="!mb-0 text-sm font-bold text-brand-500">Game Rating 6/10</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="flex-none px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-20 mb-8">
          <div className="!z-5 relative flex flex-row rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-row w-full !p-4 3xl:p-![8px] bg-white undefined">
          </div>
        </div>
    </section>
    </>
  );
}

export default GameCard;
