"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import * as navData from "../navbar-data.json";

const IndiaTours = () => {
     const menuData = navData?.navdata;
     const dropdownRef = useRef<HTMLLIElement>(null);

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

     // console.log("menudata", menuData[1]);


     return (
          <>
               <li className="nav-item dropdown mega-dropdown" ref={dropdownRef}>
                    <a
                         className="nav-link dropdown-toggle"
                         href="#"
                         id="indiaTours"
                         role="button"
                         data-bs-toggle="dropdown"
                         aria-expanded="false"
                    >
                         {menuData[1].title} <span className="triangle"></span>
                    </a>
                    <div className="dropdown-menu mega-menu" aria-labelledby="indiaTours">
                         <div className="row">
                              <div className="col-md-2 mega-menu-tabs">
                                   <div className="title text-center">EXPLORE</div>
                                   <ul className="nav flex-column nav-pills" id="indiaTabs" role="tablist">
                                        {menuData[1].tabs.map((tab, tabIndex) => (
                                             <li key={tabIndex} className="nav-item">
                                                  <a className={`nav-link ${tabIndex === 0 ? "active" : ""}`} data-bs-toggle="pill" href={`#${tab.title.toLowerCase().replace(/\s+/g, "-")}`} role="tab">
                                                       <div className="nav-img"></div>
                                                       <span>{tab.title}</span>
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                              <div className="col-md-8 center-content">
                                   <div className="title-act">
                                        <div className="title">DESTINATION</div>
                                        <div><a href="#">View More &#10095;</a></div>
                                   </div>
                                   <div className="tab-content" id="indiaTabContent">
                                        {menuData[1].tabs.map((tab, tabIndex) => (
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
                                        }
                                   </div>
                              </div>
                              <div className="col-md-2">
                                   <div className="static-content">
                                        <div className="sc-img-box">
                                             <Image src={menuData[1].image} alt={menuData[1].title} width={180} height={68} />
                                        </div>
                                        <p>{menuData[1].description}</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </li>
          </>
     )
}

export default IndiaTours
