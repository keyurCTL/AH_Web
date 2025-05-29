import React from 'react'

const loading = () => {
     return (
          <>
               <div className="itinerary-section">
                    <div className="container">
                         <div className="itinerary-header mb-4">
                              <div className="inner-breadcrumb">
                                   <div className="placeholder-glow">
                                        <span className="placeholder placeholder-bg w-100 p-3 px-5 rounded-pill"></span>
                                   </div>
                                   <div className="placeholder-glow">
                                        <span className="placeholder placeholder-bg w-100 p-3 rounded-pill"></span>
                                   </div>
                                   <div className="placeholder-glow">
                                        <span className="placeholder placeholder-bg w-100 p-3 px-5 rounded-pill"></span>
                                   </div>
                              </div>
                         </div>
                         <div className="itinerary-page">
                              <div className="row">
                                   <div className="col-lg-8">
                                        <div className="itinerary-page-left">
                                             <div className="itinerary-title">
                                                  <div className="placeholder-glow w-50">
                                                       <span className="placeholder placeholder-bg w-100 p-3 px-5 rounded-pill"></span>
                                                  </div>
                                                  <div className="day-info">
                                                       <div>
                                                            <div className="placeholder-glow">
                                                                 <span className="placeholder placeholder-bg w-100 p-3 px-5 rounded-pill"></span>
                                                            </div>
                                                       </div>
                                                       <div>
                                                            <div className="placeholder-glow">
                                                                 <span className="placeholder placeholder-bg w-100 p-3 px-5 rounded-pill"></span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="itinerary-content">
                                                  <div className="description">
                                                       <div className="description-img loading">
                                                            <div className="placeholder-glow h-100">
                                                                 <span className="placeholder placeholder-bg w-100 p-3 h-100"></span>
                                                            </div>
                                                       </div>
                                                       <div className="description-content">
                                                            <div className="placeholder-glow w-100">
                                                                 <span className="placeholder placeholder-bg w-100 p-1 rounded-pill"></span>
                                                                 <span className="placeholder placeholder-bg w-100 p-1 rounded-pill"></span>
                                                                 <span className="placeholder placeholder-bg w-100 p-1 rounded-pill"></span>
                                                                 <span className="placeholder placeholder-bg w-100 p-1 rounded-pill"></span>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="itineary-accordian">
                                                       <div className="accordion accordion-flush" id="accordionLoader">
                                                            {Array.from({ length: 5 })?.map((item, index) => (
                                                                 <div className="accordion-item" key={index}>
                                                                      <h2 className="accordion-header">
                                                                           <button
                                                                                className="accordion-button collapsed placeholder-glow"
                                                                                type="button"
                                                                           >
                                                                                <div className="w-50">
                                                                                     <span className="placeholder placeholder-bg w-100 p-2 px-5 rounded-pill"></span>
                                                                                </div>
                                                                           </button>
                                                                      </h2>
                                                                 </div>
                                                            ))}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4">
                                        <div className="itinerary-page-right">
                                             <div className="package-price-box">
                                                  <div className="price loading">
                                                       <div className="placeholder-glow w-25">
                                                            <span className="placeholder placeholder-bg w-100 p-3 px-3 rounded-pill"></span>
                                                       </div>
                                                       <div className="info">
                                                            <div className="placeholder-glow w-50">
                                                                 <span className="placeholder placeholder-bg w-100 p-2 px-5 rounded-pill"></span>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="services">
                                                       <div className="card-services">
                                                            {Array.from({ length: 6 })?.map((item, index) => {
                                                                 return (
                                                                      <div key={index}>
                                                                           <div className="placeholder-glow">
                                                                                <span className="placeholder placeholder-bg p-4 w-100"></span>
                                                                           </div>
                                                                           <div className="placeholder-glow w">
                                                                                <span className="placeholder placeholder-bg p-1 w-100"></span>
                                                                           </div>
                                                                      </div>
                                                                 )
                                                            })}
                                                       </div>
                                                       <div className="act-btns">
                                                            <div className="iti-outline-btn">
                                                                 <div className="placeholder-glow">
                                                                      <span className="placeholder placeholder-bg w-100 p-3 rounded-pill"></span>
                                                                 </div>
                                                            </div>
                                                            <div className="iti-btn">
                                                                 <div className="placeholder-glow">
                                                                      <span className="placeholder placeholder-bg w-100 p-3 rounded-pill"></span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="call-now w-100 d-flex justify-content-center">
                                                            <div className="placeholder-glow w-50">
                                                                 <span className="placeholder placeholder-bg w-100 p-3 rounded-pill"></span>
                                                            </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default loading
