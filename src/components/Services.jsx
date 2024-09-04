import React from "react";
import tsc from '../images/Technology.svg';
import corebanking from '../images/Product Management.svg';
import partnerships from '../images/Teamwork.svg';

function Services() {
    return (
        <section className="bg-white text-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Harness the Force of Banking & IT Expertise</h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border  p-8  transition hover:border-green-500/10 hover:shadow-green-500/10 h-full"
        href="#"
      >
        <img
          src={tsc}
          alt="Core Banking"
          className="h-32 w-full object-contain mb-4"
        />

        <h2 className="mt-4 text-xl font-bold text-black">Technology & Software Consulting</h2>

        <p className="mt-1 text-sm text-gray-900">
          Comprehensive end to end implementation and core banking replacement including selection, configuration and integration.
        </p>
      </a>

      <a
        className="block rounded-xl border  p-8  transition hover:border-green-500/10 hover:shadow-green-500/10 h-100"
        href="#"
      >
        <img
          src={corebanking}
          alt="Mortgage Processing"
          className="h-32 w-full object-contain mb-4"
        />

        <h2 className="mt-4 text-xl font-bold text-black">Core Banking & Financial Solutions</h2>

        <p className="mt-1 text-sm text-gray-900">
          Comprehensive end-to-end implementation and optimization for core banking systems, mortgage processing, and financial technology solutions. From selection to integration, I've ...
        </p>
      </a>

      <a
        className="block rounded-xl border p-8  transition hover:border-green-500/10 hover:shadow-green-500/10 h-full"
        href="#"
      >
        <img
          src={partnerships}
          alt="Software Development"
          className="h-32 w-full object-contain mb-4"
        />

        <h2 className="mt-4 text-xl font-bold text-black">Business Insights and Partnerships</h2>

        <p className="mt-1 text-sm text-gray-900">
          Technology consulting services orientated on aligning business with IT, specialising in domains or cloud and solution integration services.
        </p>
      </a>
    </div>
  </div>
</section>
    )
}

export default Services;
