"use client"

import Image from "next/image";
import { useState } from "react";
// import "./hotelsection.css";

interface Hotel {
     name: string;
     image: string;
     hotelsCount: string;
}

interface HotelDataType {
     [key: string]: Hotel[];
     Domestic: Hotel[];
     International: Hotel[];
}

const hotelData: HotelDataType = {
  Domestic: [
    { name: "Kerala", image: "/assets/images/kerala-hotel.png", hotelsCount: "110+ Hotels" },
    { name: "Himachal", image: "/assets/images/himachal-hotel.png", hotelsCount: "50+ Hotels" },
    { name: "Andaman", image: "/assets/images/andaman-hotel.png", hotelsCount: "20+ Hotels" },
    { name: "Kashmir", image: "/assets/images/kashmir-hotels.png", hotelsCount: "110+ Hotels" },
  ],
  International: [
    { name: "Dubai", image: "/assets/images/dubai-hotels.png", hotelsCount: "200+ Hotels" },
    { name: "Singapore", image: "/assets/images/singapore-hotels.png", hotelsCount: "150+ Hotels" },
    { name: "Bali", image: "/assets/images/bali-hotels.png", hotelsCount: "50+ Hotels" },
    { name: "Maldives", image: "/assets/images/maldives-hotel.png", hotelsCount: "50+ Hotels" },
  ],
};

const HotelSection = () => {
  const [activeTab, setActiveTab] = useState<"Domestic" | "International">("Domestic");

  return (
    <section className="hotel-section">
      <div className="container">
        <div className="title title-with-tabs">
          <div className="title-text">
            <h2>Hotels recommended by our <span>Travel Experts</span></h2>
            <div className="title-underline">
              <Image src="/assets/images/min-title-underline.png" alt="title-underline" width={260} height={10} unoptimized />
            </div>
          </div>
          <div className="bottom-title ms-auto">
            <div className="deal-tabs">
              <nav>
                <div className="nav nav-tabs">
                  {Object.keys(hotelData).map((tab) => (
                    <button
                      key={tab}
                      className={`nav-link ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab as "Domestic" | "International")}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
            <div className="view-more">
              <a href="#">View All</a>
            </div>
          </div>
        </div>
        <div className="hotel-tab-content">
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row mt-4">
                {hotelData[activeTab].map((hotel) => (
                  <div key={hotel.name} className="col-lg-3 col-6">
                    <div className="hotel-card">
                      <div className="hotel-img">
                        <Image src={hotel.image} alt={hotel.name} height={263} width={263} unoptimized/>
                      </div>
                      <a href="#" className="hotel-card-content">
                        <h3>{hotel.name}</h3>
                        <p>{hotel.hotelsCount}</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelSection;