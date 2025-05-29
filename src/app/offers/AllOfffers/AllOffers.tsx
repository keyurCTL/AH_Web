import { Offer } from '@/types/offers/offer';
import Image from 'next/image';
import React, { memo } from 'react'
import moment from 'moment';

// const offersData = [
//      {
//           image: "/assets/images/offer-card-img-1.png",
//           discount: "₹4000/-",
//           title: "Himachal Tour Package",
//           duration: "5 Nights & 6 Days",
//           hotelStars: 3,
//           expiry: "Expires in 1 month 2 weeks",
//           originalPrice: "₹38,500/-",
//           finalPrice: "₹32,500/-",
//           link: "#",
//      },
//      {
//           image: "/assets/images/offer-card-img-3.png",
//           discount: "₹5000/-",
//           title: "Kerala Tour Package",
//           duration: "9 Nights & 10 Days",
//           hotelStars: 4,
//           expiry: "Expires in 1 month 2 weeks",
//           originalPrice: "₹29,999/-",
//           finalPrice: "₹24,999/-",
//           link: "#",
//      },
//      {
//           image: "/assets/images/offer-card-img-2.png",
//           discount: "₹6000/-",
//           title: "Goa Tour Package",
//           duration: "3 Nights & 4 Days",
//           hotelStars: 5,
//           expiry: "Expires in 1 month 2 weeks",
//           originalPrice: "₹25,000/-",
//           finalPrice: "₹19,000/-",
//           link: "#",
//      },
//      {
//           image: "/assets/images/offer-card-img-4.png",
//           discount: "₹3000/-",
//           title: "Kashmir Tour Package",
//           duration: " Nights & 6 Days",
//           hotelStars: 4,
//           expiry: "Expires in 1 month 2 weeks",
//           originalPrice: "₹25,000/-",
//           finalPrice: "₹22,000/-",
//           link: "#",
//      }
// ];

type AllOffersProps = {
     offers: Offer[]
}

const AllOffers = ({ offers }: AllOffersProps) => {

     return (
          <>
               <section className="offers-section">
                    <div className="container">
                         <div className="row">
                              {offers?.map((offer, index) => {
                                   const offerDetails = offer
                                   const offerPackages = offerDetails?.packages || []
                                   const startDate = moment(offerDetails.start_date); // or moment(start_date)
                                   const endDate = moment(offerDetails.end_date);   // or moment(end_date)
                                   let offerDuration = moment.duration(endDate.diff(startDate));
                                   const months = Math.floor(offerDuration.asMonths());
                                   offerDuration = offerDuration.subtract(months, 'months');

                                   // Extract weeks and subtract
                                   const weeks = Math.floor(offerDuration.asWeeks());
                                   offerDuration = offerDuration.subtract(weeks, 'weeks');

                                   // Optional: Extract days if needed
                                   const days = offerDuration.days();

                                   return offerPackages?.map((packageItem, packageItemIndex) => {
                                        const packageImg = packageItem?.navbar?.img?.file_public_url || null

                                        return (
                                             <div key={packageItemIndex} className="col-lg-4">
                                                  <div className="offer-card">
                                                       <div className="offer-card-content">
                                                            <div className="offer-card-img">
                                                                 <Image src={packageImg} alt={packageItem?.package_name} width={300} height={250} />
                                                                 <div className="price">
                                                                      <span>save</span>
                                                                      <span className="price-value">₹{String(Math.round(Number(packageItem?.difference_price)))}</span>
                                                                 </div>
                                                            </div>
                                                            <div className="offer-card-body">
                                                                 <div className="offer-info">
                                                                      <h5>{packageItem?.package_name}</h5>
                                                                      <span>{`${packageItem?.basic_info?.days} Days & ${packageItem?.basic_info?.night} Night${Number(packageItem?.basic_info?.night) > 1 ? "s" : ""}`}</span>
                                                                      <span>
                                                                           Hotel: <span className="star">★</span> {packageItem?.hotels?.reduce((acc: any, hotel: any) => hotel.hotel_star < acc ? hotel.hotel_star : acc, 1)}
                                                                      </span>
                                                                 </div>
                                                                 <hr />
                                                                 <div className="offer-price">
                                                                      <div className="offer-validity">
                                                                           <Image src="/assets/images/Time.png" alt="offer-validity" width={20} height={20} />
                                                                           <span>{`Expires in ${months ? `${months} Month${months > 1 ? "s" : ""}` : ""} ${weeks ? `${weeks} Week${weeks > 1 ? "s" : ""}` : ""} ${days ? `${days} Day${days > 1 ? "s" : ""}` : ""}`}</span>
                                                                      </div>
                                                                      <div className="deal-card-price">
                                                                           <div className="deal-card-price-value">{String(Math.round(Number(packageItem?.price)))}</div>
                                                                           <div className="deal-card-final-price-value">
                                                                                ₹{String(Math.round(Number(packageItem?.discounted_price)))}<span>/-*</span>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="view-more-btn">
                                                            <a href={"#"}><span>View More</span></a>
                                                       </div>
                                                  </div>
                                             </div>
                                        )
                                   }
                                   )
                              })}
                         </div>
                    </div>
               </section>
          </>
     )
}

export default memo(AllOffers)
