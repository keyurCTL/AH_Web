"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import * as navData from "../navbar-data.json";
import { Package } from "@/types/package/package";
import { firstLetterCapital } from "@/lib/utils";
import Link from "next/link";

type CategoriesedArrayType = Record<string, Package[]>

type InternationalToursProps = {
     packages: Package[]
}

const InternationalTours = ({ packages }: InternationalToursProps) => {

     const menuData = navData?.navdata;
     const dropdownRef = useRef<HTMLLIElement>(null);

     const groupedBySubCategory = packages.reduce((acc: any, pkg) => {
          const key = pkg.sub_category;
          if (!acc[key]) {
               acc[key] = [];
          }
          if (acc[key] && !Object.keys(acc[key])?.some(aI => acc[key][aI]?.base_package)) {
               acc[key].push(pkg);
          }

          return acc;
     }, {}) as CategoriesedArrayType;

     useEffect(() => {
          const handleDropdownClick = (e: Event) => e.stopPropagation();

          const handleShowDropdown = () => {
               dropdownRef.current?.querySelector(".dropdown-menu")?.classList.add("show");
          };

          const handleHideDropdown = () => {
               dropdownRef.current?.querySelector(".dropdown-menu")?.classList.remove("show");
          };

          if (dropdownRef.current) {
               dropdownRef.current.querySelector(".mega-menu")?.addEventListener("click", handleDropdownClick);
               dropdownRef.current.addEventListener("show.bs.dropdown", handleShowDropdown);
               dropdownRef.current.addEventListener("hide.bs.dropdown", handleHideDropdown);
          }

          return () => {
               if (dropdownRef.current) {
                    dropdownRef.current.querySelector(".mega-menu")?.removeEventListener("click", handleDropdownClick);
                    dropdownRef.current.removeEventListener("show.bs.dropdown", handleShowDropdown);
                    dropdownRef.current.removeEventListener("hide.bs.dropdown", handleHideDropdown);
               }
          };
     }, []);


     return (
          <>
               <li className="nav-item dropdown mega-dropdown" ref={dropdownRef}>
                    <a
                         className="nav-link dropdown-toggle"
                         href="#"
                         id="internationalTours"
                         role="button"
                         data-bs-toggle="dropdown"
                         aria-expanded="false"
                    >
                         International Tours <span className="triangle"></span>
                    </a>
                    <div className="dropdown-menu mega-menu" aria-labelledby="internationalTours">
                         <div className="row">
                              <div className="col-md-2 mega-menu-tabs">
                                   <div className="title text-center">EXPLORE</div>
                                   <ul className="nav flex-column nav-pills" id="internationalTabs" role="tablist">
                                        {/* {menuData[2].tabs.map((tab, tabIndex) => (
                                             <li key={tabIndex} className="nav-item">
                                                  <a className={`nav-link ${tabIndex === 0 ? "active" : ""}`} data-bs-toggle="pill" href={`#${tab.title.toLowerCase().replace(/\s+/g, "-")}`} role="tab">
                                                       <div className="nav-img"></div>
                                                       <span>{tab.title}</span>
                                                  </a>
                                             </li>
                                        ))} */}
                                        {Object.keys(groupedBySubCategory)?.filter(item => groupedBySubCategory[item])?.length ? Object.keys(groupedBySubCategory)?.map((packageTab, tabIndex) => (
                                             <li key={tabIndex} className="nav-item">
                                                  <a className={`nav-link ${tabIndex === 0 ? "active" : ""}`} data-bs-toggle="pill" href={`#${packageTab.toLowerCase()}`} role="tab">
                                                       <div className="nav-img"></div>
                                                       <span>{firstLetterCapital(packageTab.replace(/-+/g, " "))}</span>
                                                  </a>
                                             </li>
                                        )) : null}
                                   </ul>
                              </div>
                              <div className="col-md-8 center-content">
                                   <div className="title-act">
                                        <div className="title">DESTINATION</div>
                                   </div>
                                   <div className="tab-content" id="internationalTabContent">
                                        {Object.keys(groupedBySubCategory)?.map((packageTab, tabIndex) => (
                                             <div
                                                  key={tabIndex}
                                                  className={`tab-pane fade ${tabIndex === 0 ? "show active" : ""}`}
                                                  id={packageTab?.toLowerCase()}
                                                  role="tabpanel"
                                             >
                                                  <div className="destination-content">
                                                       <div className="row">
                                                            {groupedBySubCategory[packageTab]?.map((packagePlace: Package, placeIndex) => (
                                                                 <div key={placeIndex} className="col-lg-3">
                                                                      <a className="destination-card" href="#">
                                                                           <div className="dest-img">
                                                                                <Image src={packagePlace.navbar?.img?.file_public_url} alt={packagePlace.base_package?.toLowerCase()} width={173} height={105} className="rounded-4" unoptimized loading="lazy" />
                                                                           </div>
                                                                           <div>{firstLetterCapital(packagePlace?.base_package)}</div>
                                                                      </a>
                                                                 </div>
                                                            ))}
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                                        {/* {menuData[2].tabs.map((tab, tabIndex) => (
                                             <div
                                                  key={tabIndex}
                                                  className={`tab-pane fade ${tabIndex === 0 ? "show active" : ""}`}
                                                  id={tab.title.toLowerCase().replace(/\s+/g, "-")}
                                                  role="tabpanel"
                                             >
                                                  <div className="destination-content">
                                                       <div className="row">
                                                            {tab["tab-data"].map((place, placeIndex) => (
                                                                 <div key={placeIndex} className="col-lg-3">
                                                                      <a className="destination-card" href="#">
                                                                           <div className="dest-img">
                                                                                <Image src={place.image} alt={place.title} width={173} height={105} unoptimized />
                                                                           </div>
                                                                           <div>{place.title}</div>
                                                                      </a>
                                                                 </div>
                                                            ))}
                                                       </div>
                                                  </div>
                                             </div>
                                        ))
                                        } */}
                                   </div>
                              </div>
                              <div className="col-md-2">
                                   <div className="static-content">
                                        <div className="sc-img-box">
                                             <Image src={menuData[2].image} alt={menuData[2].title} width={180} height={130} />
                                        </div>
                                        <p>{menuData[2].description}</p>
                                        <div className="view-more-btn">
                                             <Link href="#"><span>View More</span></Link>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </li>
          </>
     )
}

export default InternationalTours
