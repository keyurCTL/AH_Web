'use client';

import React from 'react';
import Image from 'next/image';
import './reviewssection.css';

const getInitial = (name: string) => {
    return name.slice(0, 1).toUpperCase();
}

const reviews = [
  {
    id: 1,
    rating: '5/5',
    date: '12-03-2023',
    text: `"Our trip with Alakh Holidays was simply amazing! From seamless planning to top-notch accommodations, 
    everything was handled perfectly. The itinerary was well-balanced, covering all major attractions while allowing 
    time to relax. Highly recommended for a stress-free and enjoyable vacation!"`,
    reviewer: {
      name: 'Zalak Patel',
    },
    images: ['dc-jaipur.jpg', 'dc-kashmir.jpg', 'dc-kerala.jpg']
  },
  {
    id: 2,
    rating: '5/5',
    date: '12-03-2023',
    text: `"Alakh Holidays made our family trip unforgettable! The hotels were comfortable, the transportation was 
    smooth, and every destination was well-chosen. Our kids had a great time, and we made beautiful memories together. 
    Looking forward to our next trip with them!"`,
    reviewer: {
      name: 'Kunj Shah',
    },
    images: ['dc-jaipur.jpg', 'dc-kashmir.jpg', 'dc-kerala.jpg']
  },
  {
    id: 3,
    rating: '5/5',
    date: '12-03-2023',
    text: `"A truly divine experience! Alakh Holidays planned a perfect spiritual journey, covering sacred temples and 
    historic sites with seamless arrangements. The knowledgeable guides shared deep insights into the significance of 
    each place, making the experience enriching. From witnessing soulful aartis to exploring ancient traditions, every 
    moment felt special. Comfortable accommodations and smooth travel allowed us to focus on our spiritual quest 
    without worries. This journey left us with a deep sense of peace and unforgettable memories. Highly recommended 
    for a fulfilling and well-organized pilgrimage!"`,
    reviewer: {
      name: 'Jai Patel',
    },
    images: ['dc-jaipur.jpg', 'dc-kashmir.jpg', 'dc-kerala.jpg']
  },
  {
    id: 4,
    rating: '5/5',
    date: '12-03-2023',
    text: `Our trip with Alakh Holidays was an incredible experience! The itinerary was well-planned, covering 
    beautiful destinations with a perfect mix of adventure and relaxation. Accommodations were comfortable, and 
    transportation was seamless, making our journey stress-free. The team was always available to assist, ensuring 
    everything went smoothly. We explored breathtaking landscapes, enjoyed delicious local cuisine, and discovered 
    hidden gems along the way. Every moment was filled with joy and unforgettable memories. Highly recommended for 
    anyone looking for a perfect travel experience!`,
    reviewer: {
      name: 'Dhaval Patel',
    },
    images: ['dc-kashmir.jpg', 'dc-jaipur.jpg', 'dc-kerala.jpg']
  },
  {
    id: 5,
    rating: '5/5',
    date: '12-03-2023',
    text: `Our trip with Alakh Holidays was an incredible experience! The itinerary was well-planned, covering 
    beautiful destinations with a perfect mix of adventure and relaxation. Accommodations were comfortable, and 
    transportation was seamless, making our journey stress-free. The team was always available to assist, ensuring 
    everything went smoothly. We explored breathtaking landscapes, enjoyed delicious local cuisine, and discovered 
    hidden gems along the way. Every moment was filled with joy and unforgettable memories. Highly recommended for 
    anyone looking for a perfect travel experience!`,
    reviewer: {
      name: 'Nutan Patel',
    },
    images: ['dc-kashmir.jpg', 'dc-jaipur.jpg', 'dc-kerala.jpg']
  },
  {
    id: 6,
    rating: '5/5',
    date: '12-03-2023',
    text: `"If you're looking for adventure, Alakh Holidays is the way to go! From thrilling treks to exciting water 
    sports, our trip was packed with fun and adrenaline. The guides were experienced, and safety was always a priority. 
    Can’t wait for our next adventure!"`,
    reviewer: {
      name: 'Mahir Joshi',
    },
    images: ['dc-jaipur.jpg', 'dc-kerala.jpg', 'dc-kashmir.jpg']
  },
  {
    id: 7,
    rating: '5/5',
    date: '12-03-2023',
    text: `"A truly divine experience! Alakh Holidays planned a perfect spiritual journey, covering sacred temples and 
    historic sites with seamless arrangements. The knowledgeable guides shared deep insights into the significance of 
    each place, making the experience enriching. From witnessing soulful aartis to exploring ancient traditions, every 
    moment felt special. Comfortable accommodations and smooth travel allowed us to focus on our spiritual quest without 
    worries. This journey left us with a deep sense of peace and unforgettable memories. Highly recommended for a 
    fulfilling and well-organized pilgrimage!"`,
    reviewer: {
      name: 'Gunvant Patel',
    },
    images: ['dc-jaipur.jpg', 'dc-kerala.jpg', 'dc-kashmir.jpg']
  },
  {
    id: 8,
    rating: '5/5',
    date: '12-03-2023',
    text: `Our trip with Alakh Holidays was an incredible experience! The itinerary was well-planned, covering beautiful 
    destinations with a perfect mix of adventure and relaxation. Accommodations were comfortable, and transportation was 
    seamless, making our journey stress-free. The team was always available to assist, ensuring everything went smoothly.`,
    reviewer: {
      name: 'Keyur Chauhan',
    },
    images: ['dc-jaipur.jpg', 'dc-kerala.jpg', 'dc-kashmir.jpg']
  }
];

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-container">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-header">
                <div className="rating">
                  <Image
                    src="/assets/images/five-star-img.png"
                    alt="five-star-img"
                    width={80}
                    height={16}
                  />
                  <span>{review.rating}</span>
                </div>
                <div>{review.date}</div>
              </div>

              <div className="review-body">
                <p className="review-text">{review.text}</p>
              </div>

              <div className="review-footer">
                <div className="reviewer-detail">
                  <div className="reviewer-thumbnail">{getInitial(review.reviewer.name)}</div>
                  <div className="reviewer-name">{review.reviewer.name}</div>
                </div>
                <div className="review-imgs">
                  {review.images.map((img, idx) => (
                    <Image
                      key={idx}
                      src={`/assets/images/${img}`}
                      alt="Review"
                      width={60}
                      height={40}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-5">
        <div className="view-more-btn">
          <a href="/packages">
            <span>View Packages</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
