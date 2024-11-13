import React from "react";
import cba from '../images/cba.svg';
import anz from '../images/anz.svg';
import westpac from '../images/westpac.svg';
import ing from '../images/ing.svg';
import dxc from '../images/dxc.svg';
import tcs from '../images/tcs.svg';
import banda from '../images/banda.svg';
import kcb from '../images/kcb.svg';
import rams from '../images/rams.svg';

function Logos() {
    return (
      <section class="py-24  bg-beige">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-14 text-center">
              <h4 class="text-xl text-emerald font-bold text-center">Global reach, galactic expertise. Trusted by banks and firms.</h4>
          </div>
          <div class="flex overflow-hidden space-x-16 group">
  <div class="flex space-x-16 animate-loop-scroll group-hover:paused">
    <img loading="lazy" src={cba} class="max-w-32" alt="Commonwealth Bank" />
    <img loading="lazy" src={anz} class="max-w-32" alt="ANZ Bank" />
    <img loading="lazy" src={westpac} class="max-w-32" alt="Westpac Bank" />
    <img loading="lazy" src={ing} class="max-w-32" alt="ING Bank" />
    <img loading="lazy" src={dxc} class="max-w-32" alt="DXC" />
    <img loading="lazy" src={tcs} class="max-w-32" alt="TCS" />
    <img loading="lazy" src={banda} class="max-w-32" alt="Bendigo and Adelaide Bank" />
    <img loading="lazy" src={kcb} class="max-w-32" alt="Kenya Commerical Bank" />
    <img loading="lazy" src={rams} class="max-w-32" alt="Rams Home Loans" />
  </div>
  <div class="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
    <img loading="lazy" src={cba} class="max-w-32" alt="Commonwealth Bank" />
    <img loading="lazy" src={anz} class="max-w-32" alt="ANZ Bank" />
    <img loading="lazy" src={westpac} class="max-w-32" alt="Westpac Bank" />
    <img loading="lazy" src={ing} class="max-w-32" alt="ING Bank" />
    <img loading="lazy" src={dxc} class="max-w-32" alt="DXC" />
    <img loading="lazy" src={tcs} class="max-w-32" alt="TCS" />
    <img loading="lazy" src={banda} class="max-w-32" alt="Bendigo and Adelaide Bank" />
    <img loading="lazy" src={kcb} class="max-w-32" alt="Kenya Commerical Bank" />
    <img loading="lazy" src={rams} class="max-w-32" alt="Rams Home Loans" />
  </div>
</div>
      </div>
  </section>
                                          
        
  
    );
  }
  
export default Logos;