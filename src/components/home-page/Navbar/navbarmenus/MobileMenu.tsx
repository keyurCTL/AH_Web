"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavbarInfoType } from "../Navbar";
import { Package } from "@/types/package/package";
import { capitalizeText, firstLetterCapital } from "@/lib/utils";

const MobileMenu = ({ packages }: NavbarInfoType) => {
     const pathname = usePathname();

     const groupedByCategory = packages.reduce((acc: any, pkg) => {
          const categoryKey = pkg.category;
          if (!acc[categoryKey]) acc[categoryKey] = [];
          acc[categoryKey].push(pkg);
          return acc;
     }, {});

     useEffect(() => {
          const mobileNav = document.getElementById("mobileNav");
          if (mobileNav) {
               mobileNav.style.display = "none";
          }
     }, [pathname]); // Hide menu on route change only

     useEffect(() => {
          const menuToggle = document.getElementById("menuToggle");
          const mobileNav = document.getElementById("mobileNav");

          if (menuToggle && mobileNav) {
               const toggleHandler = () => {
                    mobileNav.style.display = mobileNav.style.display === "block" ? "none" : "block";
               };
               menuToggle.addEventListener("click", toggleHandler);

               return () => {
                    menuToggle.removeEventListener("click", toggleHandler);
               };
          }
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
                    {/* Shared Parent Accordion for Categories */}
                    <div className="accordion" id="accordionMainCategory">
                         {Object.keys(groupedByCategory)
                              .filter((category) => category !== "religious-tours")
                              .map((category, index) => {
                                   const groupedBySubCategory = groupedByCategory[category].reduce((acc: any, pkg: any) => {
                                        const subCategoryKey = pkg.sub_category;
                                        if (!acc[subCategoryKey]) acc[subCategoryKey] = [];
                                        const exists = acc[subCategoryKey].some((item: any) => item.base_package === pkg.base_package);
                                        if (!exists) acc[subCategoryKey].push(pkg);
                                        return acc;
                                   }, {});

                                   const categoryCollapseId = `collapseCategory${index}`;
                                   const categoryHeadingId = `headingCategory${index}`;

                                   return (
                                        <div key={index} className="accordion-item">
                                             <h2 className="accordion-header" id={categoryHeadingId}>
                                                  <button
                                                       className="accordion-button collapsed"
                                                       type="button"
                                                       data-bs-toggle="collapse"
                                                       data-bs-target={`#${categoryCollapseId}`}
                                                       aria-expanded="false"
                                                       aria-controls={categoryCollapseId}
                                                  >
                                                       {capitalizeText(category?.replace(/-+/g, " "))}
                                                  </button>
                                             </h2>
                                             <div
                                                  id={categoryCollapseId}
                                                  className="accordion-collapse collapse"
                                                  aria-labelledby={categoryHeadingId}
                                                  data-bs-parent="#accordionMainCategory"
                                             >
                                                  <div className="accordion-body">
                                                       <div className="accordion" id={`accordionSubCategory${index}`}>
                                                            {Object.keys(groupedBySubCategory).map((subCategory, subIndex) => {
                                                                 const subCollapseId = `collapseSub${index}${subIndex}`;
                                                                 const subHeadingId = `headingSub${index}${subIndex}`;

                                                                 return (
                                                                      <div key={subIndex} className="accordion-item">
                                                                           <h2 className="accordion-header" id={subHeadingId}>
                                                                                <button
                                                                                     className="accordion-button sub-accordian collapsed"
                                                                                     type="button"
                                                                                     data-bs-toggle="collapse"
                                                                                     data-bs-target={`#${subCollapseId}`}
                                                                                     aria-expanded="false"
                                                                                     aria-controls={subCollapseId}
                                                                                >
                                                                                     <div className="nav-img"></div>
                                                                                     {firstLetterCapital(subCategory?.replace(/-+/g, " "))}
                                                                                </button>
                                                                           </h2>
                                                                           <div
                                                                                id={subCollapseId}
                                                                                className="accordion-collapse collapse"
                                                                                aria-labelledby={subHeadingId}
                                                                                data-bs-parent={`#accordionSubCategory${index}`}
                                                                           >
                                                                                <div className="accordion-body">
                                                                                     <ul className="list-unstyled">
                                                                                          {groupedBySubCategory[subCategory].map((place: Package, placeIndex: number) => (
                                                                                               <li key={placeIndex}>
                                                                                                    <Link
                                                                                                         href={`/${category}/${place?.base_package?.toLowerCase().replace(/\s+/g, "-")}`}
                                                                                                         className="dropdown-item"
                                                                                                    >
                                                                                                         {place.base_package}
                                                                                                    </Link>
                                                                                               </li>
                                                                                          ))}
                                                                                     </ul>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 );
                                                            })}
                                                       </div>

                                                       {/* View More */}
                                                       <div className="accordion border-0">
                                                            <div className="accordion-item">
                                                                 <h2 className="accordion-header vm">
                                                                      <Link className="accordion-button sub-accordian collapsed" href={`/${category}`}>
                                                                           View More In {capitalizeText(category?.replace(/-+/g, " "))}
                                                                      </Link>
                                                                 </h2>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   );
                              })}
                    </div>

                    <ul className="list-unstyled">
                         {Object.keys(groupedByCategory)?.length && Object.keys(groupedByCategory)?.filter(category => category == "religious-tours")?.length ? <li className="rt"><a href="/religious-tours">Religious Tours</a></li> : null}
                         <li className="top-contact-content">
                              <Image src="/assets/images/call.svg" alt="call" width={20} height={20} unoptimized />
                              <a href="tel:+919727000916">+91 97270 00916</a>
                         </li>
                         <li className="top-contact-content">
                              <Image src="/assets/images/offers.svg" alt="offers" width={20} height={20} unoptimized />
                              <Link href="/offers">Offers</Link>
                         </li>
                    </ul>
               </nav>
          </>
     );
};

export default MobileMenu;
