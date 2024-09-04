import React from "react";

const Hero2 = () => {
  return (
    <section className="bg-white">
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-9xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-7xl sm:text-5xl">
            A trusted partner in all facets of <span className="text-nice">banking.</span>
          </h1>
          <p className="mt-4 text-3xl text-gray-900">As experts in banking technology, we are dedicated to architecting and operating the future of banking technology. Our mission is to partner with clients, providing strategic advisory services to transform their businesses through innovative technology solutions. With our deep expertise we help clients achieve results in a safe and practical manner.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
