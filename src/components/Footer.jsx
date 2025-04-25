import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/YodaConsultingLogoWhite.svg';

function Footer() {
    return (
<footer className="w-full bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a href="/"  className="flex justify-center lg:justify-start">
            <img src={logo} alt="YodaConsultingLogo" />
            </a>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Banking and Digital Technology Jedi</p>
        </div>

        <div className="lg:col-start-4 text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Company</h4>
            <ul className="text-sm  transition-all duration-500">
                <li className="mb-6"><a href = "/" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li className="mb-6"><a href="/about"  className=" text-gray-600 hover:text-gray-900">Meet Anup</a></li>
            </ul>
        </div>

        {/*<div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Services</h4>
            <ul className="text-sm  transition-all duration-500">
                <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Technology & Software Consulting</a></li>
                <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Core Banking & Financial Solutions</a></li>
                <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Business Insights and Partnerships </a></li>
            </ul>
        </div> */}

        <div className="lg:col-start-5 text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Contact Anup</h4>
            <ul className="text-sm  transition-all duration-500">
                <li className="mb-6"><a href="mailto:anup.mahimkar@yodaconsulting.com"  className="text-gray-600 hover:text-gray-900">anup.mahimkar@yodaconsulting.com</a></li>
                <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900"><address className="-mt-0.5 flex-1 not-italic text-gray-700">
                Sydney, NSW, Australia
              </address></a></li>
            </ul>
        </div>

    </div>

    <div class="py-7 border-t border-gray-200">
        <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span class="text-sm text-gray-500 ">©<a href="#">Yoda Consulting</a> 2025, All rights reserved.</span>
            <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
           {/* <a href="javascript:;" class="group w-9 h-9 rounded-full flex justify-center items-center text-white bg-propsagreen hover:bg-emerald hover:text-propsagreen">
  <svg class="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Social Media">
      <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" class="fill-white group-hover:fill-propsagreen"/>
    </g>
  </svg>
</a>*/}


<a 
  href="https://www.linkedin.com/in/anupmahimkar" 
  target="_blank" 
  rel="noopener noreferrer"
  class="group w-9 h-9 rounded-full flex justify-center items-center text-propsagreen bg-emerald hover:bg-propsagreen hover:text-emerald transition-colors"
>
  <svg class="w-5 h-5" width="20" height="20" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Vector" d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" fill="currentColor"/>
  </svg>
</a>


                
            </div>
        </div>
    </div>
</div>
</footer>

);
}

export default Footer;
                                    