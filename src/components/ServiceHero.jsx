import React from "react";

const ServiceHero = ({ heading, highlightText, paragraph, backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  };

  return (
    <section className="" style={heroStyle}>
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-9xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-7xl text-emerald font-bold sm:text-5xl">
            {heading} <span className="text-emerald">{highlightText}</span>
          </h1>
          <p className="mt-4 text-3xl text-gray-900">{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
