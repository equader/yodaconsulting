import React from "react";
import logo from '../images/YodaConsultingLogoWhite.svg';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto py-64 w-full max-w-screen-xl p-4 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={logo} className="h-8 me-3" alt="Yodaconsulting logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">About</h2>
              
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Services</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">Core banking practice</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Mortgage processing excellence</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Software development methods</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">BI consulting practice</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Technology consulting practice</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Partner and associate services</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 AA Business Systems Consulting Services Pty Ltd | ABN 117 531 361 | All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
          <a href="https://www.linkedin.com/in/your-profile" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="sr-only">LinkedIn page</span>
          </a>
          <a href="mailto:example@example.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
            </svg>
            <span className="sr-only">Send Email</span>
          </a>
        </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between mt-4">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">We respectfully acknowledge the traditional owners of the land on which we work and learn, and pay respect to the First Nations peoples and their elders, past and present. We recognise their continuous connection to Country.</span>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
