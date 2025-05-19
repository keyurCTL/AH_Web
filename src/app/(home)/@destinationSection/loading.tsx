import Image from 'next/image'
import React from 'react'

const DestinationSectionLoading = () => {
     return (
          <>
               <section className="top-destination-section">
                    <div className="container">
                         <div className="top-destination-box">
                              <div className="title title-with-tabs">
                                   <div className="title-text">
                                        <h2>
                                             Top <span>Destination</span>
                                        </h2>
                                        <div className="title-underline">
                                             <Image
                                                  src="/assets/images/title-underline.png"
                                                  alt="title-underline"
                                                  width={112}
                                                  height={6}
                                                  unoptimized
                                             />
                                        </div>
                                   </div>
                                   <div className="deal-tabs">
                                        <nav>
                                             <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                  <div className="placeholder-glow">
                                                       <span className="placeholder placeholder-bg w-25 p-3 rounded-pill"></span>
                                                  </div>
                                                  <div className="placeholder-glow">
                                                       <span className="placeholder placeholder-bg w-25 p-3 rounded-pill"></span>
                                                  </div>
                                             </div>
                                        </nav>
                                   </div>
                              </div>
                              <div className="top-destination-content">
                                   <div className="row mt-5">
                                        <div className="col-md-6">
                                             <div className="destination-content">
                                                  {Array.from({ length: 4 })?.map((item, index) => (
                                                       <a href="#" className="dc-card" key={index}>
                                                            <div className="placeholder-glow w-100">
                                                                 <span className="placeholder placeholder-bg w-100 p-4 rounded-pill"></span>
                                                            </div>
                                                       </a>
                                                  ))}
                                             </div>
                                        </div>
                                        <div className="col-md-6">
                                             <div className="scrolling-dc-content">
                                                  <div className="row">
                                                       {Array.from({ length: 4 })?.map((item, index) => (
                                                            <div key={index} className="col-6">
                                                                 <div className="scroll-img-card">
                                                                      <a href="#">
                                                                           <div className="placeholder-glow w-100 h-100">
                                                                                <span className="placeholder placeholder-bg w-100 h-100 p-5"></span>
                                                                           </div>
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                       ))}
                                                  </div>
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

export default DestinationSectionLoading
