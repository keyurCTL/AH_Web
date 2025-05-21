import InnerHeader from "@/components/common/inner-header/InnerHeader"

const breadcrumbs = [
     { label: 'Home', link: '/', class: "" },
     { label: 'Offers', link: '/offers', class: "self-page" },
];
const imageProps = {
     src: "/assets/images/offers-right-bg.png",
     width: 350,
     height: 300,
};

const OffersLoading = () => {
     return (
          <>
               <InnerHeader
                    breadcrumbs={breadcrumbs}
                    title="Offers"
                    subtitle="Grab Hot Deals of the Day"
                    imageProps={imageProps}
               />
               <section className="offers-section">
                    <div className="container">
                         <div className="row">
                              {Array.from({ length: 6 })?.map((_, index) => {
                                   return (
                                        <div key={index} className="col-lg-4">
                                             <div className="offer-card">
                                                  <div className="offer-card-content">
                                                       <div className="offer-card-img rounded-top">
                                                            <div className="placeholder-glow">
                                                                 <span className="placeholder rounded-pill placeholder-bg offer-img-loading"></span>
                                                            </div>
                                                            <div className="price">
                                                                 <span>
                                                                      <div className="placeholder-glow">
                                                                           <span className="placeholder rounded-pill placeholder-bg px-3"></span>
                                                                      </div>
                                                                 </span>
                                                                 <span className="price-value">
                                                                      <div className="placeholder-glow">
                                                                           <span className="placeholder rounded-pill placeholder-bg px-5"></span>
                                                                      </div>
                                                                 </span>
                                                            </div>
                                                       </div>
                                                       <div className="offer-card-body">
                                                            <div className="offer-info">
                                                                 <h5><div className="placeholder-glow">
                                                                      <span className="placeholder rounded-pill placeholder-bg px-5"></span>
                                                                 </div></h5>
                                                                 <span><div className="placeholder-glow">
                                                                      <span className="placeholder rounded-pill placeholder-bg px-5"></span>
                                                                 </div></span>
                                                                 <span>
                                                                      <div className="placeholder-glow">
                                                                           <span className="placeholder rounded-pill placeholder-bg px-5"></span>
                                                                      </div>
                                                                 </span>
                                                            </div>
                                                            <hr />
                                                            <div className="offer-price">
                                                                 <div className="offer-validity d-flex align-items-center">
                                                                      <div className="placeholder-glow">
                                                                           <span className="placeholder rounded-circle placeholder-bg p-3"></span>
                                                                      </div>
                                                                      <span className="ms-2">
                                                                           <div className="placeholder-glow">
                                                                                <span className="placeholder rounded-pill placeholder-bg px-5"></span>
                                                                           </div>
                                                                      </span>
                                                                 </div>
                                                                 <div className="deal-card-price">
                                                                      <div className="deal-card-price-value">
                                                                           <div className="placeholder-glow">
                                                                                <span className="placeholder rounded-pill placeholder-bg px-3"></span>
                                                                           </div>
                                                                      </div>
                                                                      <div className="deal-card-final-price-value">
                                                                           <div className="placeholder-glow">
                                                                                <span className="placeholder rounded-pill placeholder-bg px-3"></span>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="view-more-btn">
                                                       <div className="placeholder-glow" key={index}>
                                                            <span className="placeholder rounded-pill placeholder-bg px-5 py-4 w-100"></span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   )
                              })}
                         </div>
                    </div>
               </section>
          </>
     )
}

export default OffersLoading
