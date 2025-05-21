import Image from 'next/image'
import "./servicesection.css"

const ServiceSection = () => {
     return (
          <>
               <section className="inclusiveservices-section">
                    <div className="container">
                         <div className="title title-with-tabs">
                              <div className="title-text">
                                   <h2>All-Inclusive Adventures. <span>Ready, Set, Go!</span></h2>
                                   <div className="title-underline"><Image src="/assets/images/min-title-underline.png"
                                        alt="title-underline" width={263} height={10} unoptimized /></div>
                              </div>
                         </div>
                         <div className="row justify-content-center custom-gap-20">
                              <div className="col-md-4 col-sm-6 col-12 d-flex flex-grow-1">
                                   <div className="ser-plate">
                                        <span className="digits"><Image src="/assets/images/inclusive-icon-1.png"
                                             alt="inclusive-icon" layout="intrinsic" height={40} width={40} unoptimized /></span>
                                        <h3 className="ser-title">
                                             Accommodation
                                             <span>Comfortable & convenient hotels cherry picked by our hotel management
                                                  team</span>
                                        </h3>
                                   </div>
                              </div>
                              <div className="col-md-4 col-sm-6 col-12 d-flex flex-grow-1">
                                   <div className="ser-plate">
                                        <span className="digits"><Image src="/assets/images/inclusive-icon-2.png"
                                             alt="inclusive-icon" layout="intrinsic" height={40} width={40} unoptimized /></span>
                                        <h3 className="ser-title">
                                             All meals
                                             <span>Eat to your heart&apos;s content Breakfast. Lunch. Dinner.</span>
                                        </h3>
                                   </div>
                              </div>
                              <div className="col-md-4 col-sm-6 col-12 d-flex flex-grow-1">
                                   <div className="ser-plate">
                                        <span className="digits"><Image src="/assets/images/inclusive-icon-3.png"
                                             alt="inclusive-icon" layout="intrinsic" height={40} width={40} unoptimized /></span>
                                        <h3 className="ser-title">
                                             On-tour transport
                                             <span>Our itineraries include all rail, sea and road transport as part of the
                                                  itinerary so you can enjoy tension free</span>
                                        </h3>
                                   </div>
                              </div>
                              <div className="col-md-4 col-sm-6 col-12 d-flex flex-grow-1">
                                   <div className="ser-plate">
                                        <span className="digits"><Image src="/assets/images/inclusive-icon-4.png"
                                             alt="inclusive-icon" layout="intrinsic" height={40} width={40} unoptimized /></span>
                                        <h3 className="ser-title">
                                             Tour Managers
                                             <span>We have an exclusive team of 350 tour managers specialising in India and World
                                                  tours</span>
                                        </h3>
                                   </div>
                              </div>
                              <div className="col-md-4 col-sm-6 col-12 d-flex flex-grow-1">
                                   <div className="ser-plate">
                                        <span className="digits"><Image src="/assets/images/inclusive-icon-5.png"
                                             alt="inclusive-icon" layout="intrinsic" height={40} width={40} unoptimized /></span>
                                        <h3 className="ser-title">
                                             Best value itinerary
                                             <span>Our expert research team invests time in crafting the most value-packed
                                                  itineraries.</span>
                                        </h3>
                                   </div>
                              </div>
                              <div className="col-md-4 col-sm-6 col-12 d-flex flex-grow-1">
                                   <div className="ser-plate">
                                        <span className="digits"><Image src="/assets/images/inclusive-icon-6.png"
                                             alt="inclusive-icon" layout="intrinsic" height={40} width={40} unoptimized /></span>
                                        <h3 className="ser-title">
                                             To And From Airfare
                                             <span>Our itineraries include all rail, sea and road transport as part of the
                                                  itinerary so you can enjoy tension free</span>
                                        </h3>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default ServiceSection
