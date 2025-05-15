"use client"

import Image from 'next/image';
import { useState } from 'react';
// import './happytravelerssection.css';
import Link from 'next/link';

const reviews = [
     {
          id: 1,
          name: 'Meet Patel',
          trip: 'Trip to Jaisalmer Rajasthan',
          tags: ['#Nature', '#Beaches', '#Luxury', '#Family'],
          content: 'As a group of 17 people we planned a trip to Jaislmer and Alakh holidays booked a resort for us. Our experience was excellent and the hospitality was perfect. The food was amazing and the entertainment was fabulous. Alakh Holidays made our vacation worth it.',
          rating: '★★★★★',
          images: ['/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png'],
     },
     {
          id: 2,
          name: 'Jay Patel',
          trip: 'Trip to Goa, India',
          tags: ['#Nature', '#Beaches', '#Luxury', '#Friends'],
          content: 'Our two day stay there was amazing with tasty food Alakh holidays booked a resort for us. Our experience was excellent and the hospitality was perfect. The food was amazing and the entertainment was fabulous. Alakh Holidays made our vacation worth it.',
          rating: '★★★★★',
          images: ['/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png'],
     },
     {
          id: 3,
          name: 'Nutan Patel',
          trip: 'Trip to Shimla, Manali',
          tags: ['#Nature', '#Beaches', '#Luxury', '#Family'],
          content: 'The resort suggested by alakh holidays was superb in jaiselmer Alakh holidays booked a resort for us. Our experience was excellent and the hospitality was perfect. The food was amazing and the entertainment was fabulous. Alakh Holidays made our vacation worth it.',
          rating: '★★★★★',
          images: ['/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png'],
     },
     {
          id: 4,
          name: 'Kunj Patel',
          trip: 'Trip to Kashmir, India',
          tags: ['#Nature', '#Beaches', '#Luxury', '#Family'],
          content: 'Alakh holidays was planned 6 days trip for us to simla manali. Our experience was excellent and the hospitality was perfect. The food was amazing and the entertainment was fabulous. Alakh Holidays made our vacation worth it.',
          rating: '★★★★★',
          images: ['/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png', '/assets/images/htr-rectangle.png'],
     },
     // Add other reviews here
];

const HappyTravelersSection = () => {
     const [activeReview, setActiveReview] = useState(reviews[0]);

     return (
          <section className="happy-travelers-section">
               <div className="container">
                    <div className="row">
                         <div className="col-xxl-6 col-xl-4">
                              <div className="title title-with-tabs">
                                   <div className="title-text">
                                        <h2>Our <br /><span>Happy Travelers</span></h2>
                                        <div className="title-underline">
                                             <Image
                                                  src="/assets/images/min-title-underline.png"
                                                  alt="title-underline"
                                                  width={260}
                                                  height={10}
                                                  unoptimized
                                             />
                                        </div>
                                   </div>
                              </div>

                              <div className="ht-tabs">
                                   <div className="nav flex-column nav-pills me-3" role="tablist" aria-orientation="vertical">
                                        {reviews.map((review) => (
                                             <button
                                                  key={review.id}
                                                  className={`nav-link ${activeReview.id === review.id ? 'active' : ''}`}
                                                  onClick={() => setActiveReview(review)}
                                             >
                                                  {review.content.slice(0, 50)}...
                                             </button>
                                        ))}
                                   </div>
                                   <div className="htr-view-more">
                                        <Link href="/reviews">View More</Link>
                                   </div>
                              </div>
                         </div>

                         <div className="col-xxl-6 col-xl-8">
                              <div className="ht-tab-content">
                                   <div className="htr-bg-qoute">
                                        <Image
                                             src="/assets/images/htr-bg-quote.png"
                                             alt="htr-bg-qoute"
                                             width={120}
                                             height={120}
                                             unoptimized
                                        />
                                   </div>

                                   <div className="htr-bg">
                                        <div className="htr-content-box">
                                             <div className="htr-title">{activeReview.trip}</div>
                                             <div className="htr-pills">
                                                  {activeReview.tags.map((tag, index) => (
                                                       <div key={index} className="htr-pill">{tag}</div>
                                                  ))}
                                             </div>
                                             <div className="htr-content">{activeReview.content}</div>

                                             <div className="htr-person-box">
                                                  <div className="htr-person">
                                                       <Image
                                                            src="/assets/images/htr-m.png"
                                                            alt="htr-person"
                                                            width={50}
                                                            height={50}
                                                            unoptimized
                                                       />
                                                       <h4>{activeReview.name}</h4>
                                                  </div>
                                                  <div className="htr-ratings">
                                                       <span className="stars">{activeReview.rating}</span>
                                                       <span>{activeReview.trip}</span>
                                                  </div>
                                             </div>

                                             <div className="htr-review-imgs">
                                                  {activeReview.images.map((img, index) => (
                                                       <div key={index} className="htr-review-img">
                                                            <Image src={img} alt="review-img" width={50} height={50} unoptimized />
                                                       </div>
                                                  ))}
                                             </div>
                                        </div>
                                   </div>

                                   <div className="htr-bg-qoute-2">
                                        <Image
                                             src="/assets/images/htr-bg-quote-2.png"
                                             alt="htr-bg-qoute"
                                             width={120}
                                             height={120}
                                             unoptimized
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default HappyTravelersSection;
