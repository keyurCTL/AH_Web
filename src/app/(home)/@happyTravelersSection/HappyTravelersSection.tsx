"use client"

import Image from 'next/image';
import { useState } from 'react';
import './happytravelerssection.css';
import Link from 'next/link';
import { Review } from '@/types/review/review';

type HappyTravelersSectionProps = {
     reviews: Review[]
}

const HappyTravelersSection = ({ reviews }: HappyTravelersSectionProps) => {     
     const [activeReview, setActiveReview] = useState<Review | null>(reviews?.length ? reviews[0] : null);
     
     const reviewRating = activeReview != null ? Number(activeReview?.rating) : 0
     const activeReviewTitleLength = activeReview != null ? activeReview?.title?.length : 0

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
                                        {reviews?.slice(0,5)?.map((review) => (
                                             <button
                                                  key={review._id}
                                                  className={`nav-link ${activeReview?._id === review._id ? 'active' : ''}`}
                                                  onClick={() => setActiveReview(review)}
                                             >
                                                  {review.description.slice(0, 50)}...
                                             </button>
                                        ))}
                                   </div>
                                   {reviews?.length > 5 ? <div className="htr-view-more">
                                        <Link href="/reviews">View More</Link>
                                   </div> : null}
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
                                             <div className={`htr-title w-75 ${ activeReviewTitleLength > 25 ? "text-start" : "text-center"}`}>{activeReview?.title}</div>
                                             <div className="htr-pills">
                                                  {activeReview?.tags?.map((tag, index) => (
                                                       <div key={index} className="htr-pill px-2"># {tag?.toUpperCase()}</div>
                                                  ))}
                                             </div>
                                             <div className="htr-content">{activeReview?.description}</div>

                                             <div className="htr-person-box gap-3">
                                                  <div className="htr-person align-items-center">
                                                       <span className='rounded-circle px-3 py-2'>{activeReview?.name?.charAt(0)?.toUpperCase()}</span>
                                                       <h4>{activeReview?.name}</h4>
                                                  </div>
                                                  <div className="htr-ratings w-50">
                                                       <div className="d-flex text-start justify-content-center align-items-center gap-1 my-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                 <svg
                                                                      key={i}
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      fill={i < reviewRating ? "#facc15" : "none"}
                                                                      viewBox="0 0 24 24"
                                                                      stroke="#facc15"
                                                                      className="star"
                                                                 >
                                                                      <path
                                                                           strokeLinecap="round"
                                                                           strokeLinejoin="round"
                                                                           strokeWidth="1.5"
                                                                           d="M11.48 3.499l2.285 4.629 5.106.742-3.695 3.601.872 5.086-4.568-2.403-4.568 2.403.872-5.086-3.695-3.601 5.106-.742 2.285-4.629z"
                                                                      />
                                                                 </svg>
                                                            ))}
                                                       </div>
                                                       <span>{activeReview?.title}</span>
                                                  </div>
                                             </div>

                                             {/* <div className="htr-review-imgs">
                                                  {activeReview?.images.map((img, index) => (
                                                       <div key={index} className="htr-review-img">
                                                            <Image src={img} alt="review-img" width={50} height={50} unoptimized />
                                                       </div>
                                                  ))}
                                             </div> */}
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
