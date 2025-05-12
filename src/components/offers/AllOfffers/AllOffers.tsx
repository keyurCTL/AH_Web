import Image from 'next/image';
import React from 'react'
import './alloffers.css';

const offersData = [
     {
          image: "/assets/images/offer-card-img-1.png",
          discount: "₹4000/-",
          title: "Himachal Tour Package",
          duration: "5 Nights & 6 Days",
          hotelStars: 3,
          expiry: "Expires in 1 month 2 weeks",
          originalPrice: "₹38,500/-",
          finalPrice: "₹32,500/-",
          link: "#",
     },
     {
          image: "/assets/images/offer-card-img-3.png",
          discount: "₹5000/-",
          title: "Kerala Tour Package",
          duration: "9 Nights & 10 Days",
          hotelStars: 4,
          expiry: "Expires in 1 month 2 weeks",
          originalPrice: "₹29,999/-",
          finalPrice: "₹24,999/-",
          link: "#",
     },
     {
          image: "/assets/images/offer-card-img-2.png",
          discount: "₹6000/-",
          title: "Goa Tour Package",
          duration: "3 Nights & 4 Days",
          hotelStars: 5,
          expiry: "Expires in 1 month 2 weeks",
          originalPrice: "₹25,000/-",
          finalPrice: "₹19,000/-",
          link: "#",
     },
     {
          image: "/assets/images/offer-card-img-4.png",
          discount: "₹3000/-",
          title: "Kashmir Tour Package",
          duration: " Nights & 6 Days",
          hotelStars: 4,
          expiry: "Expires in 1 month 2 weeks",
          originalPrice: "₹25,000/-",
          finalPrice: "₹22,000/-",
          link: "#",
     }
];

const AllOffers = () => {
     return (
          <>
               <section className="offers-section">
                    <div className="container">
                         <div className="row">
                              {offersData.map((offer, index) => (
                                   <div key={index} className="col-lg-4">
                                        <div className="offer-card">
                                             <div className="offer-card-content">
                                                  <div className="offer-card-img">
                                                       <Image src={offer.image} alt={offer.title} width={300} height={250} />
                                                       <div className="price">
                                                            <span>save</span>
                                                            <span className="price-value">{offer.discount}</span>
                                                       </div>
                                                  </div>
                                                  <div className="offer-card-body">
                                                       <div className="offer-info">
                                                            <h5>{offer.title}</h5>
                                                            <span>{offer.duration}</span>
                                                            <span>
                                                                 Hotel: <span className="star">★</span> {offer.hotelStars}
                                                            </span>
                                                       </div>
                                                       <hr />
                                                       <div className="offer-price">
                                                            <div className="offer-validity">
                                                                 <Image src="/assets/images/Time.png" alt="offer-validity" width={20} height={20} />
                                                                 <span>{offer.expiry}</span>
                                                            </div>
                                                            <div className="deal-card-price">
                                                                 <div className="deal-card-price-value">{offer.originalPrice}</div>
                                                                 <div className="deal-card-final-price-value">
                                                                      {offer.finalPrice}<span>*</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="view-more-btn">
                                                  <a href={offer.link}><span>View More</span></a>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>
          </>
     )
}

export default AllOffers
