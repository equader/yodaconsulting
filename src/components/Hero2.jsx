import React from "react";
import backgroundImage from '../images/about-hero.svg';
import anupImage from '../images/dad.jpeg';

const Hero2 = () => {
  return (
    <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-white">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-center items-start gap-8 flex">
                        <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                            <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2
                                    class="text-emerald text-4xl font-bold leading-normal lg:text-start text-center">
                                    Meet Anup. Your banking <span class="text-nice">Jedi</span>.</h2>
                                <p
                                    class="text-gray-900 text-base font-normal leading-relaxed lg:text-start text-center">
                                    I started my career as a COBOL programmer, diving deep into the core of banking technology. Over the years, I’ve worked my way up to collaborating with some of the largest banks, both in Australia and internationally. My journey has given me a deep understanding of the intricacies involved in financial systems, which is why I now primarily work with CTOs and leadership teams. Together, we manage massive IT programs, with a strong focus on modernizing core banking systems, loans, and all facets of financial technology. I’m passionate about using innovative solutions to help organizations streamline operations and stay ahead in the ever-evolving world of finance.</p>
                            </div>
                        </div>
                        <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                            <div class="flex-col p-3.5  justify-start items-start inline-flex">
                                <h3 class="text-5xl text-nice mb-5 text-center">30+</h3>
                                <h6 class="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                            </div>
                            <div class="flex-col p-3.5 justify-start items-start inline-flex">
                                <h3 class="text-5xl text-nice mb-5 text-center">100+</h3>
                                <h6 class="text-gray-500 text-base font-normal leading-relaxed">Successful Projects</h6>
                            </div>
                            <div class="flex-col p-3.5 justify-start items-start inline-flex">
                            <h3 class="text-5xl text-nice mb-5 text-center">20+</h3>
                                <h6 class="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
                            </div>
                        </div>
                    </div>
                    <button
                        class="sm:w-fit w-full group px-3.5 py-2 text-emerald bg-propsagreen hover:bg-emerald hover:text-propsagreen focus:ring-4 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                        <span
                            class="px-1.5 text-sm font-bold leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Follow on LinkedIn</span>
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
                    </button>
                </div>
                <div class="w-full lg:justify-start justify-center items-start flex">
                    <div
                        class="w-full h-full sm:bg-prospagreen sm:border border-nice relative">
                        <img class="sm:mt-5 sm:ml-5 w-full h-full"
                            src={anupImage} alt="Anup Mahimkar - Yoda Consulting Managing Director" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero2;
