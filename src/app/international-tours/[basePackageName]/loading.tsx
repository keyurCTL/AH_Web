const loading = () => {
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
      <section className="inner-tours-section">
        <div className="container">
          <div className="tours-content">
            <div className="title">
              <div className="placeholder-glow mb-2">
                <span className="placeholder placeholder-bg p-3 rounded-pill w-25"></span>
              </div>
            </div>
            <div className="tour-filters">
              <div className="filter w-25">
                <div className="placeholder-glow">
                  <span className="placeholder placeholder-bg p-3 rounded-pill w-100"></span>
                </div>
              </div>
            </div>
            <div className="inner-tour-cards">
              <div className="row">
                {Array.from({ length: 2 })?.map((item, index) => {
                  return (
                    <div key={index} className="col-1g-12 mb-4">
                      <div className="card package-card h-100">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="package-card-img-wrapper h-100">
                              <div className="placeholder-glow h-100">
                                <span className="placeholder placeholder-bg p-3 w-100 h-100"></span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-9 inner-card">
                            <div className="card-body package-card-body">
                              <div className="card-title-box">
                                <h5 className="card-title package-card-title w-50">
                                  <span className="placeholder placeholder-bg p-3 rounded-pill w-50"></span></h5>
                                <div className="card-subtitle package-card-subtitle">
                                  <div className="placeholder-glow w-100">
                                    <span className="placeholder placeholder-bg p-3 rounded-pill w-100"></span>
                                  </div>
                                </div>
                              </div>
                              <hr />
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

                              <hr />
                              <div className="card-text package-card-text card-note mt-2">
                                <div className="placeholder-glow">
                                  <span className="placeholder placeholder-bg p-1 rounded-pill w-100"></span>
                                  <span className="placeholder placeholder-bg p-1 rounded-pill w-100"></span>
                                </div>
                              </div>
                              <div className="card-note pb-2">
                                <div className="placeholder-glow">
                                  <span className="placeholder placeholder-bg p-2 rounded-pill w-100"></span>
                                </div>
                              </div>
                            </div>
                            <div className="card-body-right">
                              <div className="hl"></div>
                              <div className="card-price">
                                <div className="price w-100">
                                  <div className="price-value w-50 d-flex justify-content-center w-100">
                                    <div className="placeholder-glow w-50 mb-2">
                                      <span className="placeholder placeholder-bg p-3 rounded-pill w-100"></span>
                                    </div>
                                  </div>
                                  <div className="price-content w-50 d-flex justify-content-center w-100">
                                    <div className="placeholder-glow w-50">
                                      <span className="placeholder placeholder-bg p-2 rounded-pill w-100"></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="card-action-btns w-100">
                                  <div className="view-more-btn wo w-50 d-flex justify-content-center w-100">
                                    <div className="placeholder-glow  w-50">
                                      <span className="placeholder placeholder-bg p-3  w-100"></span>
                                    </div>
                                  </div>
                                  <div className="view-more-btn w-50 d-flex justify-content-center w-100">
                                    <div className="placeholder-glow w-50">
                                      <span className="placeholder placeholder-bg p-3  w-100"></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default loading