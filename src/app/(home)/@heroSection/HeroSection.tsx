
import Image from "next/image";
// import "./herosection.css";
import ExploreBox from "./ExploreBox/ExploreBox";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section-content">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-section-left">
                <div className="hero-title">Discover</div>
                <div className="sub-hero-title">
                  Lively and captivating destinations around the world.
                </div>
                {/* <ExploreBox /> */}
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
    </>
  );
};

export default HeroSection;
