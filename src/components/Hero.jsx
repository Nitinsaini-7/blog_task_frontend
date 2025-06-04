import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init(
          {
    
            duration: 1000,
          }
        );
        AOS.refresh();
      }, []);
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
  <div
    className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
  >
    <div data-aos="fade-down" className="max-w-prose text-left">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Start Writing and Share Your
        <strong className="text-blue-400"> World </strong>
        
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Exploring ideas that matter, stories that inspire, and insights that transform
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <a
          className="inline-block rounded border bg-blue-400 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-500"
          href="#"
        >
          Get Started
        </a>

        <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
      
    <img data-aos="fade-up" src="/hero.jpg" className="mx-auto hidden max-w-md text-gray-900 md:block" alt="" />
  </div>
</section>
  )
}

export default Hero