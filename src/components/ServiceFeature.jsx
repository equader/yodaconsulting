import React from "react";

const ServiceFeature = ({ heading, description, buttonText, buttonLink, features }) => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold text-emerald leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              {heading}
            </h2>
          </div>
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <p className="text-lg font-normal text-gray-500 mb-5">{description}</p>
            <a
              href={buttonLink}
              className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700"
            >
              {buttonText}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-6">
  {features.map((feature, index) => (
    <div
      key={index}
      className="group relative w-full bg-beige rounded-lg p-4 transition-all duration-500 max-md:max-w-xs max-md:mx-auto md:w-1/3 md:h-56 xl:w-1/4 hover:bg-nice"
    >
      <div className="bg-white rounded-full flex justify-center items-center mb-4 w-12 h-12">
        {feature.icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2 transition-all duration-500 group-hover:text-white">
        {feature.title}
      </h4>
      <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
        {feature.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default ServiceFeature;
