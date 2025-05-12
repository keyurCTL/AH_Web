import Image from 'next/image'
import React from 'react'
import "./commitmentsection.css"

const CommitmentSection = () => {
  return (
    <>
     <section className="commitment-section">
          <div className="container">
               <div className="title title-with-tabs">
                    <div className="title-text">
                         <h2>Our Commitment to <span>Safe Holidays</span></h2>
                         <div className="title-underline"><Image src="/assets/images/min-title-underline.png"
                                   alt="title-underline" width={264} height={10} unoptimized/></div>
                    </div>
               </div>
               <div className="commitment-sec-content">
                    <div className="row justify-content-center">
                         <div className="col-md-3 col-sm-6 col-12 d-flex flex-grow-1">
                              <div className="cs-card">
                                   <Image src="/assets/images/commitment-1.png" alt="commitment-img" width={306} height={192} layout='intrinsic' unoptimized/>
                                   <div className="cs-card-content">
                                        <h5>Enhanced Safety Protocols</h5>
                                        <p>We adhere to the highest hygiene and sanitation standards, ensuring your
                                             safety
                                             throughout your journey.</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-3 col-sm-6 col-12 d-flex flex-grow-1">
                              <div className="cs-card">
                                   <Image src="/assets/images/commitment-2.png" alt="commitment-img" width={306} height={192} layout='intrinsic' unoptimized/>
                                   <div className="cs-card-content">
                                        <h5>Trusted Partnerships</h5>
                                        <p>Partnering with trusted hotels, transport, and tour operators for safe,
                                             worry-free experiences.</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-3 col-sm-6 col-12 d-flex flex-grow-1">
                              <div className="cs-card">
                                   <Image src="/assets/images/commitment-3.png" alt="commitment-img" width={306} height={192} layout='intrinsic' unoptimized/>
                                   <div className="cs-card-content">
                                        <h5>24/7 Assistance</h5>
                                        <p>Our team is always available to support you with any concerns or
                                             emergencies during your holiday.</p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-md-3 col-sm-6 col-12 d-flex flex-grow-1">
                              <div className="cs-card">
                                   <Image src="/assets/images/commitment-4.png" alt="commitment-img" width={306} height={192} layout='intrinsic' unoptimized/>
                                   <div className="cs-card-content">
                                        <h5>Flexible Travel Options</h5>
                                        <p>Providing flexible plans to adapt to changes, ensuring confident travel.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </section> 
    </>
  )
}

export default CommitmentSection
