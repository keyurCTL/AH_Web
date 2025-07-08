'use client';

import React from 'react';
// import './reviewssection.css';
import { Review } from '@/types/review/review';
import { transformDate } from '@/lib/utils';

const getInitial = (name: string) => {
  return name.slice(0, 1).toUpperCase();
}

type ReviewsSectionProps = {
  reviews: Review[]
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-container">
          {reviews.map((review) => (
            <div className="review-card" key={review._id}>
              <div className="review-header">
                <div className="rating">
                  <div className="d-flex text-start justify-content-center align-items-center gap-0.5 my-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < review.rating ? "#F39132" : "none"}
                        viewBox="0 0 24 24"
                        stroke="#F39132"
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
                  <span>{review.rating}/5</span>
                </div>
                <div>{transformDate(review.date)}</div>
              </div>

              <div className="review-body">
                <p className="review-text">{review.description}</p>
              </div>

              <div className="review-footer">
                <div className="reviewer-detail">
                  <div className="reviewer-thumbnail">{getInitial(review.name)}</div>
                  <div className="reviewer-name">{review.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="text-center mt-5">
        <div className="view-more-btn">
          <a href="/packages">
            <span>View Packages</span>
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default ReviewsSection;
