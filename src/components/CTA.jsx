import React from "react";
import footerBgImg from '../images/footer.svg';

function CTA() {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBgImg})` }} // Corrected to use backgroundImage
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-opacity-70 flex items-center justify-between flex-col lg:flex-row">
          <div className="block text-left mb-5 lg:mb-0">
            <h2 className="font-manrope text-4xl text-black font-semibold mb-5 lg:mb-2">
              Connect today
            </h2>
            <p className="text-xl text-black">
              Connect to master the force of banking excellence.
            </p>
          </div>
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-white bg-emerald hover:bg-nice focus:ring-4 rounded-lg">
            Get in touch
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
