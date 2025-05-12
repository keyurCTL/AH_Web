"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import * as navData from "../navbar-data.json";

const MobileMenu = () => {
     const menuData = navData?.navdata;

     useEffect(() => {
          const menuToggle = document.getElementById("menuToggle");
          const mobileNav = document.getElementById("mobileNav");

          if (menuToggle && mobileNav) {
               menuToggle.addEventListener("click", function () {
                    mobileNav.style.display =
                         mobileNav.style.display === "block" ? "none" : "block";
               });
          }

          return () => {
               if (menuToggle) {
                    menuToggle.removeEventListener("click", () => { });
               }
          };
     }, []);

     return (
          <>
               <div className="d-flex justify-content-between align-items-center w-full">
                    <div className="logo">
                         <Link href="/">
                              <Image src="/assets/images/logo/ah-logo.png" alt="Alakh Holidays Logo" height={42} width={144} unoptimized />
                         </Link>
                    </div>
                    <button id="menuToggle" className="menu-toggle">
                         <Image src="/assets/images/toggle.png" alt="toggle" height={17} width={21} />
                    </button>
               </div>
               <nav id="mobileNav" className="mobile-nav">
                    {menuData.map((navItem, index) => (
                         <div key={index} className="accordion" id={`accordionExample${index}`}>
                              <div className="accordion-item">
                                   <h2 className="accordion-header" id={`heading${index}`}>
                                        <button
                                             className="accordion-button collapsed"
                                             type="button"
                                             data-bs-toggle="collapse"
                                             data-bs-target={`#collapse${index}`}
                                             aria-expanded="false"
                                             aria-controls={`collapse${index}`}
                                        >
                                             {navItem.title}
                                        </button>
                                   </h2>
                                   <div
                                        id={`collapse${index}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent={`#accordionExample${index}`}
                                   >
                                        <div className="accordion-body">
                                             <div className="accordion" id={`accordion${index}`}>
                                                  {navItem.tabs.map((tab, tabIndex) => (
                                                       <div key={tabIndex} className="accordion-item">
                                                            <h2 className="accordion-header" id={`headingTab${index}${tabIndex}`}>
                                                                 <button
                                                                      className="accordion-button sub-accordian collapsed"
                                                                      type="button"
                                                                      data-bs-toggle="collapse"
                                                                      data-bs-target={`#collapseTab${index}${tabIndex}`}
                                                                      aria-expanded="false"
                                                                      aria-controls={`collapseTab${index}${tabIndex}`}
                                                                 >
                                                                      <div className="nav-img"></div>
                                                                      {tab.title}
                                                                 </button>
                                                            </h2>
                                                            <div
                                                                 id={`collapseTab${index}${tabIndex}`}
                                                                 className="accordion-collapse collapse"
                                                                 aria-labelledby={`headingTab${index}${tabIndex}`}
                                                                 data-bs-parent={`#accordion${index}`}
                                                            >
                                                                 <div className="accordion-body">
                                                                      <ul className="list-unstyled">
                                                                           {tab["tab-data"].map((place, placeIndex) => (
                                                                                <li key={placeIndex}>
                                                                                     <Link href="#" className="dropdown-item">
                                                                                          {place.title}
                                                                                     </Link>
                                                                                </li>
                                                                           ))}
                                                                      </ul>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  ))}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ))}
                    <li className="rt"><a href="#">Religious Tours</a>
                    </li>
                    <li className="top-contact-content">
                         <Image src="assets/images/call.png"
                              alt="call"
                              width={20}
                              height={20}
                              unoptimized />
                         <a href="tel:+919727000916">+91 97270 00916</a>
                    </li>
                    <li className="top-contact-content">
                         <Image
                              src="assets/images/offers.png"
                              alt="offers"
                              width={20}
                              height={20}
                              unoptimized
                         />
                         <a href="./offers.html">Offers</a>
                    </li>
               </nav>
          </>
     );
};

export default MobileMenu;
