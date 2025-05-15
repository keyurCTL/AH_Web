"use client"

import Image from "next/image";
import { useState } from "react";
import "./dealssection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Deal {
     title: string;
     duration: string;
     image: string;
     hotel: number;
     save: number;
     price: number;
     finalPrice: number;
}

interface DealsDataType {
     [key: string]: Deal[],
     domestic: Deal[];
     international: Deal[];
}

const dealsData: DealsDataType = {
     domestic: [
          { title: "Himachal", duration: "5 Nights & 6 Days", image: "/assets/images/gujrat-tourism/white-ran.jpg", hotel: 3, save: 4000, price: 38500, finalPrice: 32500 },
          { title: "Kerala", duration: "9 Nights & 10 Days", image: "/assets/images/gujrat-tourism/white-ran.jpg", hotel: 4, save: 5000, price: 26999, finalPrice: 21999 },
          { title: "Goa", duration: "3 Nights & 4 Days", image: "/assets/images/gujrat-tourism/white-ran.jpg", hotel: 3, save: 3500, price: 20499, finalPrice: 16999 },
          { title: "Kashmir", duration: "5 Nights & 6 Days", image: "/assets/images/gujrat-tourism/white-ran.jpg", hotel: 3, save: 4000, price: 26999, finalPrice: 22999 },
     ],
     international: [
          { title: "Dubai with Abudhabi", duration: "5 Nights & 6 Days", image: "/assets/images/gujrat-tourism/white-ran.jpg", hotel: 4, save: 5000, price: 79999, finalPrice: 74999 },
          { title: "Dubai with Yas Island", duration: "6 Nights & 7 Days", image: "/assets/images/gujrat-tourism/white-ran.jpg", hotel: 4, save: 3000, price: 89999, finalPrice: 86999 },
          { title: "Dubai with Lapita Resort", duration: "6 Nights & 7 Days", image: "/assets/images/gujrat-tourism/white-ran.jpg", hotel: 4, save: 3000, price: 86999, finalPrice: 83999 },
          { title: "Bali", duration: "6 Nights & 7 Days", image: "/assets/images/gujrat-tourism/white-ran.jpg", hotel: 4, save: 4000, price: 45500, finalPrice: 41500 },
     ],
};

const DealsSection = () => {
     const [activeTab, setActiveTab] = useState("domestic");

     return (
          <section className="deals-section">
               <div className="container">
                    <div className="title title-with-tabs">
                         <div className="title-text">
                              <h2>
                                   Exclusive <span>Deals</span>
                              </h2>
                              <div className="title-underline">
                                   <Image src="/assets/images/title-underline.png" alt="title-underline" width={112} height={6} unoptimized />
                              </div>
                         </div>
                         <div className="deal-tabs">
                              <nav>
                                   <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button onClick={() => setActiveTab("domestic")} className={activeTab === "domestic" ? "active nav-link" : "nav-link"}>
                                             Domestic
                                        </button>
                                        <button onClick={() => setActiveTab("international")} className={activeTab === "international" ? "active nav-link" : "nav-link"}>
                                             International
                                        </button>
                                   </div>
                              </nav>
                         </div>
                         <div className="view-more">
                              <a href="#">View All Deals</a>
                              <div className="slider-controls">
                                   <div className="swiper-button-next custom-next">
                                        <Image src="/assets/images/circle-arrow-right.png" alt="circle-arrow-right" width={30} height={30} />
                                   </div>
                                   <div className="swiper-button-prev custom-prev">
                                        <Image src="/assets/images/circle-arrow-left.png" alt="circle-arrow-left" width={30} height={30} />
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="deals-content">
                         <Swiper
                              spaceBetween={25}
                              slidesPerView={3}
                              navigation={{
                                   nextEl: ".custom-next",
                                   prevEl: ".custom-prev",
                              }}
                              loop={true}
                              breakpoints={{
                                   0: { slidesPerView: 1 },
                                   520: { slidesPerView: 2 },
                                   950: { slidesPerView: 3 },
                              }}
                              modules={[Navigation, Pagination]}
                         >
                              {dealsData[activeTab].map((deal, index) => (
                                   <SwiperSlide key={index}>
                                        <div className="deal-card">
                                             <div className="ribbon">
                                                  <span>DEAL</span>
                                             </div>
                                             <div className="card-image">
                                                  <Image src={deal.image} alt="place-img" width={153} height={153} />
                                                  <div className="price">
                                                       <span>save</span>
                                                       <span className="price-value">₹{deal.save}/-</span>
                                                  </div>
                                             </div>
                                             <div className="deal-card-body">
                                                  <div className="deal-card-content">
                                                       <div className="deal-card-title">{deal.title}</div>
                                                       <div className="deal-card-duration">{deal.duration}</div>
                                                       <div className="deal-card-hotel">
                                                            Hotel: <span>★</span> {deal.hotel}
                                                       </div>
                                                  </div>
                                                  <div className="deal-card-price">
                                                       <div className="deal-card-price-value">₹{deal.price}/-</div>
                                                       <div className="deal-card-final-price-value">
                                                            ₹{deal.finalPrice}/-<span>*</span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
               </div>
          </section>
     );
};

export default DealsSection;
