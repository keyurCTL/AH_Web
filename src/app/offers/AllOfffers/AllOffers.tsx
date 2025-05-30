import { Offer } from '@/types/offers/offer';
import Image from 'next/image';
import React, { memo } from 'react'
import moment from 'moment';
import Link from 'next/link';
import { formatIndianNumber } from '@/lib/utils';

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

                                   // Get total duration in days
                                   const totalDays = endDate.diff(startDate, 'days'); // difference in full days

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
                                                                      <span className="price-value">₹{formatIndianNumber(packageItem?.difference_price)}</span>
                                                                 </div>
                                                            </div>
                                                            <div className="offer-card-body">
                                                                 <div className="offer-info">
                                                                      <h5>{packageItem?.package_name}</h5>
                                                                      <span>{`${packageItem?.basic_info?.days} Days & ${packageItem?.basic_info?.night} Night${Number(packageItem?.basic_info?.night) > 1 ? "s" : ""}`}</span>
                                                                      <span>
                                                                           Hotel: <span className="star">★</span> {packageItem?.hotels?.reduce((acc: number, hotel: any) => Math.max(acc, hotel.hotel_star), 1)}
                                                                      </span>
                                                                 </div>
                                                                 <hr />
                                                                 <div className="offer-price">
                                                                      <div className="offer-validity">
                                                                           <Image src="/assets/images/Time.png" alt="offer-validity" width={20} height={20} />
                                                                           {/* <span>{`Expires in ${months ? `${months} Month${months > 1 ? "s" : ""}` : ""} ${weeks ? `${weeks} Week${weeks > 1 ? "s" : ""}` : ""} ${days ? `${days} Day${days > 1 ? "s" : ""}` : ""}`}</span> */}
                                                                           <span>{`Expires in ${totalDays} days`}</span>
                                                                      </div>
                                                                      <div className="deal-card-price">
                                                                           <div className="deal-card-price-value">{formatIndianNumber(packageItem?.price)}</div>
                                                                           <div className="deal-card-final-price-value">
                                                                                ₹{formatIndianNumber(packageItem?.discounted_price)}<span>/-*</span>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="view-more-btn">
                                                            <Link href={`${packageItem?.category}/${packageItem?.base_package}/${packageItem?.package_name}`}><span>View More</span></Link>
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
