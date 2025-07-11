"use client";

import { useEffect, useState, useRef, memo } from "react";
import Cookies from "js-cookie";
import { Swiper, SwiperSlide } from "swiper/react";
import './offers-popup.css'
import 'swiper/css';
import { Offer } from "@/types/offers/offer";
import { Autoplay, Navigation } from "swiper/modules";
import { Pagination } from "react-bootstrap";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import { formatIndianNumber } from "@/lib/utils";
import Link from "next/link";

interface OffersPopupProps {
  offers: Offer[];
  onInteraction?: (event: 'dismissed' | 'clicked', offerId?: string) => void;
}

const COOKIE_KEY = "dismissedOffers";

// Safe cookie parsing
const getDismissedIds = (): string[] => {
  const raw = Cookies.get(COOKIE_KEY);
  console.log("raw", raw);

  if (!raw) return [];
  return raw
    .split(",")
    .map((id) => id.trim())
    .filter((id) => /^[a-zA-Z0-9_-]+$/.test(id));
};

// Set cookie safely (limit length)
const setDismissedIds = (ids: string[]) => {
  const unique = [...new Set(ids)].slice(0, 100);
  Cookies.set(COOKIE_KEY, unique.join(","), { expires: 365, sameSite: "Lax", secure: true });
};

const OffersPopup: React.FC<OffersPopupProps> = ({ offers, onInteraction }) => {

  const [visibleOffers, setVisibleOffers] = useState<Offer[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [viewPortWidth, setViewPortWidth] = useState<number | null>(null)

  useEffect(() => {
    if (window) {
      setViewPortWidth(Number(window?.visualViewport?.width))
    }
  }, [])

  useEffect(() => {
    const dismissed = getDismissedIds();
    const filtered = offers.filter((o) => !dismissed.includes(o._id));
    setVisibleOffers(filtered);
    // document.body.style.overflow = filtered.length > 0 ? 'hidden' : 'auto';
    // return () => { document.body.style.overflow = 'auto'; };
  }, [offers]);

  // Trap focus inside popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismissAll();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const dismissOffer = (id: string) => {
    const updated = [...getDismissedIds(), id];
    setDismissedIds(updated);
    setVisibleOffers((prev) => prev.filter((o) => o._id !== id));
    onInteraction?.('dismissed', id);
  };

  const dismissAll = () => {
    const allIds = offers.map((o) => o._id);
    const updated = [...getDismissedIds(), ...allIds];
    setDismissedIds(updated);
    setVisibleOffers([]);
    onInteraction?.('dismissed');
  };

  // const handleClick = (offer: Offer) => {
  //   // window.open(offer.link, "_blank");
  //   dismissOffer(offer.id);
  //   onInteraction?.('clicked', offer.id);
  // };

  if (visibleOffers.length === 0) return null;

  return (
    <div
      className="popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-popup"
      ref={overlayRef}
      tabIndex={-1}
    >
      <div className="popup-container" aria-labelledby="offer-popup">
        <button className="close-btn" onClick={dismissAll} aria-label="Close popup">×</button>
        <h5 id="offer-popup" style={{ marginBottom: '10px' }}>Special Offers</h5>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          {visibleOffers?.length ? visibleOffers?.map((deal) => {
            const offerPackages = deal?.packages || []

            return offerPackages?.map((packageItem, packageItemIndex) => {
              const packageName = viewPortWidth != null ? viewPortWidth > 1440 ? `${packageItem?.package_name}` : `${packageItem?.package_name?.slice(0, 25)}...` : ""
              const packageImg = packageItem?.navbar?.img?.file_public_url || null
              const packageUrl = packageItem?.category == "religious-tours" ? `${packageItem?.category}/${packageItem?.package_name}` : `${packageItem?.category}/${packageItem?.base_package?.toLowerCase()?.replace(/\s+/g, "-")}/${packageItem?.slug}`
              return (
                <SwiperSlide key={packageItemIndex}>
                  <div className="popup-deal-card">
                    <div className="ribbon"><span>DEAL</span></div>
                    <div className="card-image">
                      <Image src={packageImg} alt={`${packageItem.package_name} best deal`} width={153} height={153} />
                      <div className="price">
                        <span>save</span>
                        <span className="price-value">₹{formatIndianNumber(packageItem?.difference_price)}/-</span>
                      </div>
                    </div>
                    <div className="popup-deal-card-body">
                      <div className="popup-deal-card-content">
                        <Link href={packageUrl}>
                          <div className="popup-deal-card-title">{packageName}</div>
                        </Link>
                        <div className="popup-deal-card-duration">{`${packageItem?.basic_info?.days} Days & ${packageItem?.basic_info?.night} Night${Number(packageItem?.basic_info?.night) > 1 ? "s" : ""}`}</div>
                        <div className="popup-deal-card-hotel">
                          Hotel: <span>★</span> {packageItem?.hotels?.reduce((acc: number, hotel: any) => Math.max(acc, hotel.hotel_star), 1)}
                        </div>
                      </div>
                      <div className="popup-deal-card-price">
                        <div className="popup-deal-card-price-value">₹{formatIndianNumber(packageItem?.price)}/-</div>
                        <div className="popup-deal-card-final-price-value">
                          ₹{formatIndianNumber(packageItem.discounted_price)}/-<span>*</span>
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

      <style>{`
        #offer-popup {
          color: var(--primary-color);
          font-weight: 700;
          font-size: 18px;
          padding-bottom: 10px;
        }

        .popup-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease-out;
        }

        .popup-container {
          background: white;
          padding: 20px 20px 40px 20px;
          border-radius: 25px;
          max-width: 550px;
          width: 90%;
          position: relative;
          box-shadow: 0 5px 25px rgba(0,0,0,0.4);
          animation: slideUp 0.3s ease-out;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: transparent;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        .dismiss-btn {
          margin-top: 8px;
          background: #d9534f;
          color: white;
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 480px) {
          .popup-container {
            max-width: 95%;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(OffersPopup);
