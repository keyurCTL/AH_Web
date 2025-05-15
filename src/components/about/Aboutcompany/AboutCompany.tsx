import Image from 'next/image'
import React from 'react'
// import "./aboutcompany.css"

const AboutCompany = () => {
     return (
          <>
               <section className="about-us-section">
                    <div className="container">
                         <div className="title title-with-tabs">
                              <div className="title-text">
                                   <h2>About <span>Alakh Holidays</span></h2>
                                   <div className="title-underline">
                                        <Image src="/assets/images/min-title-underline.png" alt="title-underline" width={260} height={10} unoptimized/>
                                   </div>
                              </div>
                         </div>
                         <div className="about-content-box">
                              <div className="row">
                                   <div className="col-lg-6">
                                        <div className="abt-img">
                                             <Image src="/assets/images/abt-img-min.png" alt="abt-img" width={570} height={530} unoptimized layout='intrinsic'/>
                                        </div>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="about-content">
                                             <p>Welcome to <strong>Alakh Holidays</strong>, Your gateway to unforgettable travel
                                                  experiences! We believe that travel is not just about visiting places, but about
                                                  creating lifelong memories. Whether you dream of a relaxing getaway, an
                                                  adventurous journey, or a luxurious escape, we are here to make it happen.</p>

                                             <h3>Who We Are</h3>
                                             <p>Based in Ahmedabad, Alakh Holidays is a team of passionate travel experts
                                                  dedicated to curating seamless and hassle-free vacations. We specialize in both
                                                  <strong> domestic and international tours</strong>, ensuring every trip is
                                                  tailored to your preferences and budget.
                                             </p>

                                             <ul>
                                                  <li><strong>Domestic Tours:</strong> Explore the beauty of India, from the
                                                       Himalayas to the beaches of Goa.</li>
                                                  <li><strong>International Tours:</strong> Experience the best of global
                                                       destinations, from Europe to the Maldives.</li>
                                                  <li><strong>Customized Travel Packages:</strong> Get tailor-made itineraries
                                                       designed to fit your needs.</li>
                                                  <li><strong>Group & Corporate Travel:</strong> Perfect for families, groups, and
                                                       business incentives.</li>
                                                  <li><strong>Honeymoon & Romantic Getaways:</strong> Start your married life with
                                                       an unforgettable trip.</li>
                                                  <li><strong>Visa Assistance & Travel Insurance:</strong> Stress-free
                                                       documentation and coverage for a smooth journey.</li>
                                             </ul>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default AboutCompany
