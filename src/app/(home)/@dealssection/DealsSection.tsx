"use client"

import Image from "next/image";
import { memo, useEffect, useState } from "react";
// import "./dealssection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Offer } from "@/types/offers/offer";
import { Package } from "@/types/package/package";
import Link from "next/link";

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

type DealsSectionProps = {
     offers: Offer[]
}

const DealsSection = ({ offers }: DealsSectionProps) => {     
     // const [activeTab, setActiveTab] = useState("domestic");
     const [viewPortWidth, setViewPortWidth] = useState<number | null>(null)

     useEffect(() => {
          if (window) {
               setViewPortWidth(Number(window?.visualViewport?.width))
          }
     }, [])

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
                         {/* <div className="deal-tabs">
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
                         </div> */}
                         <div className="view-more">
                              <Link href={"/offers"}>View All Deals</Link>
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
                              loop={false}
                              breakpoints={{
                                   0: { slidesPerView: 1 },
                                   520: { slidesPerView: 2 },
                                   950: { slidesPerView: 3 },
                              }}
                              modules={[Navigation, Pagination]}
                         >
                              {offers?.length ? offers?.map((deal, index) => {
                                   const offerDetails = deal
                                   const offerPackages = deal?.packages || []

                                   return offerPackages?.map((packageItem, packageItemIndex) => {
                                        const packageName = viewPortWidth != null ? viewPortWidth > 1440 ? `${packageItem?.package_name}` : `${packageItem?.package_name?.slice(0, 25)}...` : ""
                                        const packageImg = packageItem?.navbar?.img?.file_public_url || null
                                        return (
                                             <SwiperSlide key={packageItemIndex}>
                                                  <div className="deal-card">
                                                       <div className="ribbon">
                                                            <span>DEAL</span>
                                                       </div>
                                                       <div className="card-image">
                                                            <Image src={packageImg} alt={`${packageItem.package_name} best deal`} width={153} height={153} />
                                                            <div className="price">
                                                                 <span>save</span>
                                                                 <span className="price-value">₹{String(Math.round(Number(packageItem?.difference_price)))}/-</span>
                                                            </div>
                                                       </div>
                                                       <div className="deal-card-body">
                                                            <div className="deal-card-content">
                                                                 <div className="deal-card-title">{packageName}</div>
                                                                 <div className="deal-card-duration">{`${packageItem?.basic_info?.days} Days & ${packageItem?.basic_info?.night} Night${Number(packageItem?.basic_info?.night) > 1 ? "s" : ""}`}</div>
                                                                 <div className="deal-card-hotel">
                                                                      Hotel: <span>★</span> {packageItem?.hotels?.reduce((acc: any, hotel: any) => hotel.hotel_star < acc ? hotel.hotel_star : acc, 1)}
                                                                 </div>
                                                            </div>
                                                            <div className="deal-card-price">
                                                                 <div className="deal-card-price-value">₹{Math.round(Number(packageItem?.price))}/-</div>
                                                                 <div className="deal-card-final-price-value">
                                                                      ₹{String(Math.round(Number(packageItem.discounted_price)))}/-<span>*</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </SwiperSlide>
                                        )
                                   }
                                   )
                              }) : null}
                         </Swiper>
                    </div>
               </div>
          </section>
     );
};

export default memo(DealsSection);
