'use client';

import React from 'react';
import Image from 'next/image';
// import './ourteamsection.css';

const OurTeamSection = () => {
     return (
          <section className="our-team-section">
               <div className="container">
                    <div className="row">
                         <div className="col-lg-6">
                              <div className="founder-img">
                                   <Image
                                        src="/assets/images/founder.png"
                                        alt="founder"
                                        width={500}
                                        height={500}
                                        className="img-fluid"
                                   />
                              </div>
                         </div>
                         <div className="col-lg-6">
                              <div className="founder-content">
                                   <p>
                                        At Alakh Holidays, we are passionate about crafting unforgettable travel experiences
                                        for our clients. Whether it’s exploring breathtaking domestic destinations or
                                        embarking on exciting international adventures, our dedicated team ensures seamless
                                        planning, personalized services, and memorable journeys.
                                   </p>
                                   <div className="title">Meet Our Leader – Jignesh Patel</div>
                                   <p>
                                        At the heart of Alakh Holidays is our visionary leader, Jignesh Patel, whose passion for travel
                                        and commitment to excellence have shaped our company into a trusted name in the tourism
                                        industry. With years of experience in both domestic and international tours, he brings
                                        deep industry knowledge, innovative ideas, and a customer-first approach that ensures
                                        every traveler enjoys a seamless and memorable journey.
                                   </p>
                                   <p>
                                        Jignesh Patel&apos;s dedication goes beyond just planning trips—he believes in creating
                                        experiences that leave a lasting impact. His hands-on approach, from curating unique
                                        travel packages to ensuring top-notch customer service, reflects his commitment to making
                                        every journey special. Under his leadership, Alakh Holidays has grown into a company
                                        known for trust, reliability, and personalized travel solutions.
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className="meet-team-section">
                         <div className="title title-with-tabs">
                              <div className="title-text">
                                   <h2>
                                        Our <span>Leadership Team</span>
                                   </h2>
                                   <div className="title-underline">
                                        <Image
                                             src="/assets/images/min-title-underline.png"
                                             alt="title-underline"
                                             width={250}
                                             height={10}
                                             unoptimized
                                        />
                                   </div>
                              </div>
                         </div>

                         <div className="meet-team-content">
                              <p>
                                   At Alakh Holidays, our team comprises travel enthusiasts, tour planners, and customer service
                                   experts who work together to design tailored holiday packages that suit every traveler&apos;s
                                   needs. From luxurious getaways to budget-friendly trips, we strive to make every journey
                                   memorable with our attention to detail and exceptional service.
                              </p>
                              <p>
                                   Whether you’re planning a family vacation, a honeymoon, or a corporate tour, our team is here
                                   to assist you at every step. Let us take care of the details while you focus on making
                                   beautiful travel memories!
                              </p>
                         </div>
                    </div>
               </div>

               <div className="team-details">
                    <div className="container">
                         <div className="row">
                              {[...Array(8)].map((_, index) => (
                                   <div className="col-lg-3 col-sm-6" key={index}>
                                        <div className="team-member">
                                             <div className="team-member-image">
                                                  <Image
                                                       src="/assets/images/team-member-1.jpg"
                                                       alt={`team-member-${index + 1}`}
                                                       width={300}
                                                       height={300}
                                                       className="img-fluid"
                                                  />
                                             </div>
                                             <div className="member-name">Nutan Patel</div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default OurTeamSection;
