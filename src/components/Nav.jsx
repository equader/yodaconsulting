import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/YodaConsultingLogoWhite.svg';

function Nav() {
  return (
    <header className="bg-white py-6">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="" href="#">
          <img src={logo} alt="Yoda Consulting Logo" className="h-6 w-auto sm:h-8 md:h-10" />
        </a>
        <div className="flex flex-1 items-center justify-end">
          <nav aria-label="Global" className="block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <NavLink
                  exact
                  to="/"
                  className="text-emerald transition text-lg font-bold hover:text-nice"
                  activeClassName="underline"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-emerald transition text-lg font-bold hover:text-nice"
                  activeClassName="underline"
                >
                  Meet Anup
                </NavLink>
              </li>
              {/*<li>
                <NavLink
                  to="/services"
                  className="text-emerald transition text-lg font-bold hover:text-nice"
                  activeClassName="underline"
                >
                  Services
                </NavLink>
              </li>*/}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
