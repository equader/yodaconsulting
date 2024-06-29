import React from "react";

function CTA(){
    return(
        <section class="py-16 bg-beige">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="lg:py-14 lg:px-20 p-10 rounded-2xl bg-nice flex items-center justify-between flex-col lg:flex-row"
          >
            <div class="block text-center mb-5 lg:text-left lg:mb-0">
              <h2
                class="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
              >
                Connect with us
              </h2>
              <p class="text-xl text-white">
              Elevate your banking expertise today. Don't wait, take the next step in your professional growth.
              </p>
            </div>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-white bg-emerald hover:bg-hover focus:ring-4 rounded-lg">
                Get in touch
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
          </div>
        </div>
      </section>
                                              

    )
}

export default CTA;