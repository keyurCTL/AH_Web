export default function ReviewsSectionLoading() {
     return (
          <>
               <div className="inner-header-main">
                    <div className="container">
                         <div className='inner-header-with-stats'>
                              <div className="inner-page-title">
                                   <div className="placeholder-glow mb-2">
                                        <span className="placeholder placeholder-bg w-100 p-3 px-5 rounded-pill"></span>
                                   </div>
                                   <div className="placeholder-glow mb-2">
                                        <span className="placeholder placeholder-bg w-100 p-3 px-5 rounded-pill"></span>
                                   </div>
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

                              <div className="inner-header-stats">
                                   {Array.from({ length: 2 })?.map((review, index) => (
                                        <div className="stats" key={index}>
                                             <div className="stats-head">
                                                  <div className="icon">
                                                       <div className="placeholder-glow">
                                                            <span className="placeholder placeholder-bg w-100 p-3 rounded-pill"></span>
                                                       </div>
                                                  </div>
                                                  <div className="title">
                                                       <div className="placeholder-glow">
                                                            <span className="placeholder placeholder-bg w-100 p-3 px-5 rounded-pill"></span>
                                                       </div>
                                                  </div>
                                             </div>
                                             <hr />
                                             <div className="stats-foot">
                                                  <div className="placeholder-glow">
                                                       <span className="placeholder placeholder-bg w-100 p-3 px-5 rounded-pill"></span>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
               <section className="reviews-section">
                    <div className="container">
                         <div className="reviews-container">
                              {Array.from({ length: 6 })?.map((review, index) => (
                                   <div className="review-card" key={index}>
                                        <div className="review-header">
                                             <div className="rating">
                                                  <div className="d-flex text-start justify-content-center align-items-center gap-0.5 my-1">
                                                       <div className="placeholder-glow">
                                                            <span className="placeholder placeholder-bg w-100 p-3 rounded-pill"></span>
                                                       </div>
                                                  </div>
                                                  <span>
                                                       <div className="placeholder-glow">
                                                            <span className="placeholder placeholder-bg w-100 p-3 rounded-pill"></span>
                                                       </div>
                                                  </span>
                                             </div>
                                             <div>
                                                  <div className="placeholder-glow">
                                                       <span className="placeholder placeholder-bg w-100 p-3 px-5 rounded-pill"></span>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="review-body">
                                             <div className="review-text">
                                                  {Array.from({ length: 6 })?.map((review, index) => (
                                                       <div key={index} className="placeholder-glow">
                                                            <span className="placeholder placeholder-bg w-100 p-2 my-1 rounded-pill"></span>
                                                       </div>
                                                  ))}
                                             </div>
                                        </div>

                                        <div className="review-footer">
                                             <div className="reviewer-detail">
                                                  <div className="placeholder-glow">
                                                       <div className="reviewer-thumbnail placeholder rounded-circle w-25 p-3">
                                                            <span className=""></span>
                                                       </div>
                                                  </div>
                                                  <div className="reviewer-name">
                                                       <div className="placeholder-glow">
                                                            <span className="placeholder placeholder-bg p-3 px-5 rounded-pill"></span>
                                                       </div>
                                                  </div>
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
          </>
     )
}