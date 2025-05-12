import Image from "next/image"
import "./religioussection.css"

const ReligiousDestination = () => {
  return (
    <>
      <section className="religious-section">
          <div className="container">
               <div className="title title-with-tabs">
                    <div className="title-text">
                         <h2>Top <span>Religious Destination</span></h2>
                         <div className="title-underline"><Image src="/assets/images/big-title-underline.png"
                                   alt="title-underline" width={368} height={10} unoptimized/></div>
                    </div>
               </div>
               <div className="religious-section-content">
                    <div className="row">
                         <div className="col-lg-4 col-md-6 col-6">
                              <div className="religious-img-card">
                                   <a href="#">
                                        <Image className="br-rad" src="/assets/images/religious-1.png" alt="scrl-Image" width={416} height={375} unoptimized/>
                                        <div className="religious-card-content">
                                             <h2>4- Dham</h2>
                                             <span>Best Time: May to June</span>
                                        </div>
                                        <div className="religious-card-circle">
                                             <Image src="/assets/images/circle-arrow-up-right.png"
                                                  alt="circle-arrow-up-right" width={60} height={60} unoptimized/>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-6">
                              <div className="religious-img-card">
                                   <a href="#">
                                        <Image className="br-rad" src="/assets/images/religious-2.png" alt="scrl-Image" width={416} height={375} unoptimized/>
                                        <div className="religious-card-content">
                                             <h2>2- Dham</h2>
                                             <span>Best Time: May to June</span>
                                        </div>
                                        <div className="religious-card-circle">
                                             <Image src="/assets/images/circle-arrow-up-right.png"
                                                  alt="circle-arrow-up-right" width={60} height={60} unoptimized/>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-6">
                              <div className="religious-img-card">
                                   <a href="#">
                                        <Image className="br-rad" src="/assets/images/religious-3.png" alt="scrl-Image" width={416} height={375} unoptimized/>
                                        <div className="religious-card-content">
                                             <h2>Ujjain - Mahakaleshwar</h2>
                                             <span>Best Time: October to March</span>
                                        </div>
                                        <div className="religious-card-circle">
                                             <Image src="/assets/images/circle-arrow-up-right.png"
                                                  alt="circle-arrow-up-right" width={60} height={60} unoptimized/>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-6">
                              <div className="religious-img-card">
                                   <a href="#">
                                        <Image className="br-rad" src="/assets/images/religious-4.png" alt="scrl-Image" width={416} height={375} unoptimized/>
                                        <div className="religious-card-content">
                                             <h2>Haridwar - Ganga Aarti</h2>
                                             <span>Best Time: October to February</span>
                                        </div>
                                        <div className="religious-card-circle">
                                             <Image src="/assets/images/circle-arrow-up-right.png"
                                                  alt="circle-arrow-up-right" width={60} height={60} unoptimized/>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-6">
                              <div className="religious-img-card">
                                   <a href="#">
                                        <Image className="br-rad" src="/assets/images/religious-5.png" alt="scrl-Image" width={416} height={375} unoptimized/>
                                        <div className="religious-card-content">
                                             <h2>Somnath</h2>
                                             <span>Best Time: October & March</span>
                                        </div>
                                        <div className="religious-card-circle">
                                             <Image src="/assets/images/circle-arrow-up-right.png"
                                                  alt="circle-arrow-up-right" width={60} height={60} unoptimized/>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-6">
                              <div className="religious-img-card">
                                   <a href="#">
                                        <Image className="br-rad" src="/assets/images/religious-6.png" alt="scrl-Image" width={416} height={375} unoptimized/>
                                        <div className="religious-card-content">
                                             <h2>Ayodhya</h2>
                                             <span>Best Time: October to March</span>
                                        </div>
                                        <div className="religious-card-circle">
                                             <Image src="/assets/images/circle-arrow-up-right.png"
                                                  alt="circle-arrow-up-right" width={60} height={60} unoptimized/>
                                        </div>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="text-center mt-3">
                         <div className="view-more-btn">
                              <a href="#"><span>View More</span></a>
                         </div>
                    </div>
               </div>
          </div>
     </section>
    </>
  )
}

export default ReligiousDestination
