import React from "react";
import logo from '../images/YodaConsultingLogoWhite.svg';

function Footer() {
  return (
    <footer class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div class="flex justify-center text-teal-600 sm:justify-start">
          <img src={logo} alt="YodaConsultingLogo" />
        </div>

        <p class="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
          Core banking and digital technology expert.
        </p>

        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">LinkedIn</span>
                  <div className="h-10 w-10"> {/* Set container size */}
                    <svg
                      className="w-full h-full"  // Let the SVG fill its parent
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Email</span>
                  <div className="h-10 w-10"> {/* Set container size */}
                    <svg
                      className="w-full h-full"  // Let the SVG fill its parent
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9z" />
                      <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4M8 7a4 4 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8zm-3.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157" />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
        <div class="text-center sm:text-left">
          <p class="text-lg font-medium text-gray-900">Company</p>

          <ul class="mt-8 space-y-4 text-sm">
            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
                Home
              </a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
                About
              </a>
            </li>
          </ul>
        </div>

        {/*<div class="text-center sm:text-left">
          <p class="text-lg font-medium text-gray-900">Services</p>

          <ul class="mt-8 space-y-4 text-sm">
            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
                Technology & Software Consulting
              </a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#">Core Banking & Financial Solutions </a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#">Business Insights and Partnerships </a>
            </li>
          </ul>
        </div> */}

        

        <div class="text-left sm:text-left">
          <p class="text-lg font-medium text-gray-900">Contact me</p>

          <ul class="mt-8 space-y-4 text-sm">
            <li>
              <a
                class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span class="flex-1 text-gray-700">anup.mahimkar@yodaconsulting.com</span>
              </a>
            </li>

            <li>
              <a
                class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span class="flex-1 text-gray-700">x</span>
              </a>
            </li>

            <li
              class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <address class="-mt-0.5 flex-1 not-italic text-gray-700">
                Sydney, NSW, Australia
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-12 border-t border-gray-100 pt-6">
      <div class="text-center sm:flex sm:justify-between sm:text-left">
        <p class="text-sm text-gray-500">
          <span class="block sm:inline">All rights reserved.</span>

          <a
            class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="#"
          >
            Terms & Conditions
          </a>

          <span>&middot;</span>

          <a
            class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
            href="#"
          >
            Privacy Policy
          </a>
        </p>

        <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 Yoda Consulting </p>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer2;
