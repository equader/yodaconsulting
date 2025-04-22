import React from "react";
import anupImage from "../images/dad.jpg";

const Hero2 = () => {
  return (
    <section className="py-18 relative xl:mr-0 lg:mr-5 mr-0 bg-white">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          
          {/* Image First on Mobile, Second on Desktop */}
          <div className="w-full flex justify-center lg:justify-start items-start order-1 lg:order-2">
            <div className="w-full h-full sm:bg-prospagreen sm:border border-nice relative flex justify-center sm:justify-start">
              <img
                className="sm:mt-5 sm:ml-5 w-4/5 sm:w-[80%] md:w-[95%] lg:w-[95%] h-auto object-contain"
                src={anupImage}
                alt="Anup Mahimkar - Yoda Consulting Managing Director"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex order-2 lg:order-1">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-emerald text-4xl font-bold leading-normal lg:text-start text-center">
                    Meet Anup. Your banking <span className="text-nice">Jedi</span>.
                  </h2>
                  <p className="text-gray-900 text-justify text-lg font-normal leading-relaxed lg:text-start">
                    My career began as a COBOL programmer, providing me with a deep understanding of the foundational layers of banking technology. Over the years, my expertise has led to collaborations with some of the largest banks across Australia and internationally.
                  </p>
                  <p className="text-gray-900 text-justify text-lg font-normal leading-relaxed lg:text-start">
                    This extensive journey has provided me with a deep understanding of the intricacies within financial systems. As a result, I now primarily collaborate with CTOs and leadership teams. In my current role, I work alongside these leaders to manage large-scale IT programs, with a strong focus on modernising core banking systems, loan platforms, and all facets of financial technology.
                  </p>
                  <p className="text-gray-900 text-justify text-lg font-normal leading-relaxed lg:text-start">
                    I'm passionate about leveraging innovative solutions to help organisations streamline their operations and maintain a competitive edge in the ever-evolving financial landscape. My extensive experience across the evolution of banking technology positions me as a trusted advisor for organisations navigating today's complex financial landscape.
                  </p>
                </div>
              </div>

              {/* Stats and CTA */}
              <div className="w-full max-w-xl flex flex-col items-center lg:items-start gap-6">
                {/* Stats */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                  <div className="flex flex-col items-center sm:items-start">
                    <h3 className="text-5xl text-nice mb-2">30+</h3>
                    <p className="text-gray-500 text-sm">Years of Experience</p>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <h3 className="text-5xl text-nice mb-2">100+</h3>
                    <p className="text-gray-500 text-sm">Successful Projects</p>
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <h3 className="text-5xl text-nice mb-2">20+</h3>
                    <p className="text-gray-500 text-sm">Happy Clients</p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://www.linkedin.com/in/anupmahimkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-fit group px-3.5 py-2 text-emerald bg-propsagreen hover:bg-emerald hover:text-propsagreen focus:ring-4 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out flex justify-center items-center"
                >
                  <span className="px-1.5 text-sm font-bold leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                    Follow on LinkedIn
                  </span>
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
