"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import './companystats.css';
import Layer1 from "../../../../public/assets/images/Layer_1.svg";
import Trophy from "../../../../public/assets/images/trophy.svg";
import Happy from "../../../../public/assets/images/happy.svg";
import TourDestination from "../../../../public/assets/images/tour-destination.svg";
import Branches from "../../../../public/assets/images/branches.svg";

const CompanyStats = () => {
  
  // Counter animation effect
  const animateCounters = () => {
    const counters = document.querySelectorAll<HTMLDivElement>('.stat-number');
    const speed = 100;

    counters.forEach((counter) => {
      const target = Number(counter.getAttribute('data-target'));
      let count = 0;
      const increment = target / speed;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.textContent = Math.floor(count) + '+';
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target.toLocaleString() + '+';
        }
      };

      updateCount();
    });
  };

  // Trigger animation when visible in viewport
  const handleScroll = () => {
    const section = document.querySelector('.stats-section');
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 50) {
        animateCounters();
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  useEffect(() => {
    // Trigger on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="our-Stats">
      <div className="container">
        <div className="stats-section">
          <div className="stats-title">The Alakh Holidays family is growing everyday!</div>
          <div className="stats-container">
            {[
              { src: Layer1, target: 4, text: 'Years of Experience' },
              { src: Trophy, target: 100, text: 'Tours Completed' },
              { src: Happy, target: 250, text: 'Happy Guests' },
              { src: TourDestination, target: 35, text: 'Tour Destinations' },
              { src: Branches, target: 5, text: 'Branches & Sales Partners' }
            ].map((stat, index) => (
              <div className="stat-box" key={index}>
                <div className="stat-icon">
                  <Image src={stat.src} alt="stat-icon" height={46} layout="intrinsic" unoptimized />
                </div>
                <div className="stat-number" data-target={stat.target}>0+</div>
                <div className="stat-text">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
