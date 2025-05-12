"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import "./destinationsection.css";

interface Destination {
     name: string;
     image: string;
     details?: string; 
     price: string;
}

interface DestinationCategory {
     destinations: Destination[];
     scrollDestinations: Omit<Destination, "details">[]; 
}

interface DestinationData {
     [key: string]: DestinationCategory,
     domestic: DestinationCategory;
     international: DestinationCategory;
}

const destinationData: DestinationData = {
     domestic: {
          destinations: [
               {
                    name: "Manali",
                    image: "/assets/images/dc-manali.jpg",
                    details: "Pickup/Drop, Hotels, Breakfast & Dinner, Sightseeing, Transport, Guide",
                    price: "₹18,322/-*",
               },
               {
                    name: "Kerala",
                    image: "/assets/images/dc-kerala.jpg",
                    details: "Pickup/Drop, Hotels, Breakfast & Dinner, Sightseeing, Transport, Guide",
                    price: "₹18,322/-*",
               },
               {
                    name: "Kashmir",
                    image: "/assets/images/dc-kashmir.jpg",
                    details: "Pickup/Drop, Hotels, Breakfast & Dinner, Sightseeing, Transport, Guide",
                    price: "₹18,322/-*",
               },
               {
                    name: "Rajasthan",
                    image: "/assets/images/dc-jaipur.jpg",
                    details: "Pickup/Drop, Hotels, Breakfast & Dinner, Sightseeing, Transport, Guide",
                    price: "₹18,322/-*",
               },
          ],
          scrollDestinations: [
               {
                    name: "Goa",
                    image: "/assets/images/scrl-goa.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Rajasthan",
                    image: "/assets/images/scrl-rajshathan.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Ladakh",
                    image: "/assets/images/scrl-ladakh.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Tamilnadu",
                    image: "/assets/images/scrl-tamilnadu.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Gujarat",
                    image: "/assets/images/scrl-gujrat.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Ooty",
                    image: "/assets/images/scrl-ooty.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Amritsar",
                    image: "/assets/images/scrl-amritsar.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Himachal",
                    image: "/assets/images/scrl-himachal.png",
                    price: "Starting From ₹18,322/-",
               },
          ],
     },
     international: {
          destinations: [
               {
                    name: "Manali",
                    image: "/assets/images/dc-manali.jpg",
                    details: "Pickup/Drop, Hotels, Breakfast & Dinner, Sightseeing, Transport, Guide",
                    price: "₹18,322/-*",
               },
               {
                    name: "Kerala",
                    image: "/assets/images/dc-kerala.jpg",
                    details: "Pickup/Drop, Hotels, Breakfast & Dinner, Sightseeing, Transport, Guide",
                    price: "₹18,322/-*",
               },
               {
                    name: "Kashmir",
                    image: "/assets/images/dc-kashmir.jpg",
                    details: "Pickup/Drop, Hotels, Breakfast & Dinner, Sightseeing, Transport, Guide",
                    price: "₹18,322/-*",
               },
               {
                    name: "Rajasthan",
                    image: "/assets/images/dc-jaipur.jpg",
                    details: "Pickup/Drop, Hotels, Breakfast & Dinner, Sightseeing, Transport, Guide",
                    price: "₹18,322/-*",
               },
          ],
          scrollDestinations: [
               {
                    name: "Goa",
                    image: "/assets/images/scrl-goa.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Rajasthan",
                    image: "/assets/images/scrl-rajshathan.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Ladakh",
                    image: "/assets/images/scrl-ladakh.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Tamilnadu",
                    image: "/assets/images/scrl-tamilnadu.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Gujarat",
                    image: "/assets/images/scrl-gujrat.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Ooty",
                    image: "/assets/images/scrl-ooty.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Amritsar",
                    image: "/assets/images/scrl-amritsar.png",
                    price: "Starting From ₹18,322/-",
               },
               {
                    name: "Himachal",
                    image: "/assets/images/scrl-himachal.png",
                    price: "Starting From ₹18,322/-",
               },
          ],
     },
};


const DestinationSection = () => {
     const [activeTab, setActiveTab] = useState("domestic");

     return (
          <>
               <section className="top-destination-section">
                    <div className="container">
                         <div className="top-destination-box">
                              <div className="title title-with-tabs">
                                   <div className="title-text">
                                        <h2>
                                             Top <span>Destination</span>
                                        </h2>
                                        <div className="title-underline">
                                             <Image
                                                  src="/assets/images/title-underline.png"
                                                  alt="title-underline"
                                                  width={112}
                                                  height={6}
                                                  unoptimized
                                             />
                                        </div>
                                   </div>
                                   <div className="deal-tabs">
                                        <nav>
                                             <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                  <button
                                                       onClick={() => setActiveTab("domestic")}
                                                       className={
                                                            activeTab === "domestic" ? "active nav-link" : "nav-link"
                                                       }
                                                  >
                                                       Domestic
                                                  </button>
                                                  <button
                                                       onClick={() => setActiveTab("international")}
                                                       className={
                                                            activeTab === "international"
                                                                 ? "active nav-link"
                                                                 : "nav-link"
                                                       }
                                                  >
                                                       International
                                                  </button>
                                             </div>
                                        </nav>
                                   </div>
                                   <div className="view-more">
                                        <Link href="#">View All Destinations</Link>
                                   </div>
                              </div>
                              <div className="top-destination-content">
                                   <div className="row mt-5">
                                        <div className="col-md-6">
                                             <div className="destination-content">
                                                  {destinationData[activeTab].destinations.map(
                                                       (destination, index) => (
                                                            <a key={index} href="#" className="dc-card">
                                                                 <div className="dc-card-img">
                                                                      <Image
                                                                           src={destination.image}
                                                                           alt={destination.name}
                                                                           height={109}
                                                                           width={109}
                                                                           unoptimized
                                                                      />
                                                                 </div>
                                                                 <div className="dc-card-content">
                                                                      <h4>{destination.name}</h4>
                                                                      <p>{destination.details}</p>
                                                                      <div className="dc-price-badge">
                                                                           <span>{destination.price}</span>
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       )
                                                  )}
                                             </div>
                                        </div>
                                        <div className="col-md-6">
                                             <div className="scrolling-dc-content">
                                                  <div className="row">
                                                       {destinationData[activeTab].scrollDestinations.map((scrollDestination, index) => (
                                                            <div key={index} className="col-6">
                                                                 <div className="scroll-img-card">
                                                                      <a href="#">
                                                                           <Image
                                                                                src={scrollDestination.image}
                                                                                alt={scrollDestination.name}
                                                                                width={283}
                                                                                height={287}
                                                                                unoptimized
                                                                           />
                                                                           <div className="scroll-card-content">
                                                                                <h2>{scrollDestination.name}</h2>
                                                                                <span>{scrollDestination.price}</span>
                                                                           </div>
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                       ))}
                                                  </div>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default DestinationSection;
