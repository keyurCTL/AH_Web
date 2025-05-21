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
            <section className="tours-section">
                <div className="container">
                    <div className="tours-content">
                        <div className="title">
                            <h4>TOTAL TOURS</h4>
                        </div>
                        <div className="tour-filters">
                            <div className="filter w-25">
                                <div className="placeholder-glow">
                                    <span className="placeholder placeholder-bg p-3 rounded-pill w-100"></span>
                                </div>
                            </div>
                        </div>
                        <div className="tour-cards">
                            <div className="row">
                                {Array.from({ length: 5 })?.map((item, index) => {
                                    return (
                                        <div key={index} className="col-lg-4">
                                            <div className="tour-card">
                                                <div className="tour-image">
                                                    <div className="placeholder-glow">
                                                        <span className="placeholder placeholder-bg p-3 w-100 img-loading"></span>
                                                    </div>
                                                </div>
                                                <div className="tour-card-footer">
                                                    <div className="tour-card-details">
                                                        <div className="tour-name">
                                                            <div className="placeholder-glow">
                                                                <span className="placeholder placeholder-bg px-5 rounded-pill w-100"></span>
                                                            </div>
                                                        </div>
                                                        <div className="total-packages">
                                                            <div className="placeholder-glow">
                                                                <span className="placeholder placeholder-bg px-5 rounded-pill w-100"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="view-more-btn">
                                                        <div className="placeholder-glow">
                                                            <span className="placeholder placeholder-bg px-5 rounded-pill w-100"></span>
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