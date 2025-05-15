import Image from "next/image";

export default function HappyTravelersSectionLoading() {
    return (
        <section className="happy-travelers-section">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-4">
                        <div className="title title-with-tabs">
                            <div className="title-text">
                                <h2>Our <br /><span>Happy Travelers</span></h2>
                                <div className="title-underline">
                                    <Image
                                        src="/assets/images/min-title-underline.png"
                                        alt="title-underline"
                                        width={260}
                                        height={10}
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="ht-tabs">
                            <div className="nav flex-column nav-pills me-3" role="tablist" aria-orientation="vertical">
                                {Array.from({ length: 6 })?.map((review, index) => (
                                    <div key={index} className="placeholder-glow">
                                        <span className="placeholder placeholder-bg w-100 p-3 rounded-pill"></span>
                                    </div>
                                ))}
                            </div>
                            <div className="htr-view-more">
                                <div className="placeholder-glow">
                                    <span className="placeholder placeholder-bg w-25 p-3 rounded-pill"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-6 col-xl-8">
                        <div className="ht-tab-content">
                            <div className="htr-bg-qoute">
                                <Image
                                    src="/assets/images/htr-bg-quote.png"
                                    alt="htr-bg-qoute"
                                    width={120}
                                    height={120}
                                    unoptimized
                                />
                            </div>

                            <div className="htr-bg">
                                <div className="htr-content-box">
                                    <div className="htr-title text-start w-75">
                                        <div className="placeholder-glow">
                                            <span className="placeholder placeholder-bg w-100 p-1"></span>
                                        </div>
                                        <div className="placeholder-glow">
                                            <span className="placeholder placeholder-bg w-75 p-1"></span>
                                        </div>
                                    </div>
                                    <div className="htr-pills d-flex gap-2">
                                        {Array.from({ length: 6 })?.map((tag, index) => (
                                            <div key={index} className="placeholder-glow d-flex gap-2">
                                                <span className="placeholder placeholder-bg px-4 py-3 rounded-pill"></span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="htr-content w-100 gap-2">
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <div className="placeholder-glow" key={index}>
                                                <span className="placeholder placeholder-bg p-1 w-100"></span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="htr-person-box d-flex justify-content-center">
                                        <div className="htr-person  w-50">
                                            <div className="placeholder-glow">
                                                <span className="placeholder placeholder-bg rounded-circle p-4"></span>
                                            </div>
                                            <div className="placeholder-glow w-50">
                                                <h4 className="placeholder placeholder-bg px-4 py-2 w-100"></h4>
                                            </div>
                                        </div>
                                        <div className="htr-ratings">
                                            <div className="placeholder-glow">
                                                <span className="placeholder placeholder-bg px-4 py-3"></span>
                                            </div>
                                            <div className="placeholder-glow">
                                                <span className="placeholder placeholder-bg px-4 py-2"></span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="htr-review-imgs">
                                                  {activeReview?.images.map((img, index) => (
                                                       <div key={index} className="htr-review-img">
                                                            <Image src={img} alt="review-img" width={50} height={50} unoptimized />
                                                       </div>
                                                  ))}
                                             </div> */}
                                </div>
                            </div>

                            <div className="htr-bg-qoute-2">
                                <Image
                                    src="/assets/images/htr-bg-quote-2.png"
                                    alt="htr-bg-qoute"
                                    width={120}
                                    height={120}
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}