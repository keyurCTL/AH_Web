import Image from "next/image";
import ExploreBoxLoading from "./ExploreBox/ExploreBoxLoading";

export default function HappyTravelersSectionLoading() {
    return (
        <section className="hero-section">
            <div className="hero-section-content">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="hero-section-left">
                            <div className="hero-title">
                                <div className="placeholder-glow">
                                    <span className="placeholder placeholder-bg rounded-pill w-25"></span>
                                </div>
                            </div>
                            <div className="sub-hero-title">
                                <div className="placeholder-glow">
                                    <span className="placeholder placeholder-bg rounded-pill w-75"></span>
                                </div>
                                <div className="placeholder-glow">
                                    <span className="placeholder placeholder-bg rounded-pill w-50"></span>
                                </div>
                            </div>
                            <ExploreBoxLoading />
                        </div>
                        <div className="left-bg"></div>
                    </div>
                    <div className="col-lg-5">
                        <div className="hero-right-img">
                            <Image
                                src="/assets/images/hero-right-img.png"
                                alt="hero-right-img"
                                width={570}
                                height={360}
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}