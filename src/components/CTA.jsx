import React from "react";
import footerBgImg from '../images/hero2.svg';

function CTA() {
  return (
    <section
      className="py-16 bg-cover bg-white" 
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-xl">
        <div className="lg:py-14 lg:px-20 p-10  text-emerald border focus:ring-4 rounded-2xl flex items-center justify-between flex-col lg:flex-row">
          <div className="block text-left mb-5 lg:mb-0">
            <h2 className="text-4xl font-semibold mb-5 lg:mb-2">
              Connect today
            </h2>
            <p className="text-xl text-prospa">
              Connect to master the force of banking excellence.
            </p>
          </div>
          <a
  href="/#contact"
  className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center bg-propsagreen hover:bg-emerald hover:text-propsagreen rounded-lg"
>
  Get in touch
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
    </section>
  );
}

export default CTA;
