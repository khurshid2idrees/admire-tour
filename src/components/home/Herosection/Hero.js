import React from 'react';
import background from '../../../Images/home/background.jpeg'

export default function Hero() {
  return (
    <div className="w-screen h-screen text-white" style={{
        // background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
        backgroundImage:`url(${background})`,
        backgroundRepeat:'no-repeat',
        width:'100%',
        backgroundSize:'cover',
        // height:'100%'
        // objectFit:'contain'
        
        
      }}>
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src={hero} /> */}
          <div class="text-center lg:w-5/12 w-full">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Admire Tours
            </h1>
            <p className="text-2xl mb-8">
              Best travel agency in india
            </p>
            {/* <div className="flex justify-center mx-auto">
              <button
                className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
                View Projects
              </button>
              <button
                className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
                Plugins
              </button>
            </div> */}
          </div>
        </div>
      </div >
  )
}
