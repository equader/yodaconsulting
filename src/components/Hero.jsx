import React from "react";
import backgroundImage from '../images/hero2.svg';



function Hero() {
  return (
<section class="bg-cover bg-no-repeat bg-white bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl tracking-tight leading-none font-bold text-emerald md:text-5xl lg:text-6xl">Your Banking Technology Jedi</h1>
        <p class="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">With decades of expertise in banking and IT, Yoda Consulting is your trusted force, delivering tailored solutions to help your core banking systems rise to their full potential and streamline your technology.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#contact" class="inline-flex justify-center items-center py-3 px-5 text-base text-center text-emerald bg-propsagreen hover:bg-emerald hover:text-propsagreen focus:ring-4 rounded-lg">
                Get in touch
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="/about" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>

  );
}

export default Hero;