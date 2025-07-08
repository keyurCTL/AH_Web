"use client";

import { useEffect, useState, useRef, memo } from "react";
import Cookies from "js-cookie";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Offer } from "@/types/offers/offer";
import { Autoplay, Navigation } from "swiper/modules";
import { Pagination } from "react-bootstrap";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          {visibleOffers.map((offer) => (
            <SwiperSlide key={offer._id}>
              <div className="offer-card">
                {/* <img
                  src={offer.image}
                  alt={offer.title}
                  onClick={() => handleClick(offer)}
                  loading="lazy"
                /> */}
                <p>{offer.title}</p>
                {/* <button
                  className="dismiss-btn"
                  onClick={() => dismissOffer(offer._id)}
                  aria-label={`Dismiss ${offer.title}`}
                >
                  Dismiss
                </button> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease-out;
        }

        .popup-container {
          background: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 420px;
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

        .offer-card {
          text-align: center;
        }

        .offer-card img {
          max-width: 100%;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .offer-card img:hover {
          transform: scale(1.03);
        }

        .offer-card p {
          margin-top: 10px;
          font-size: 16px;
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
