"use client";

import { firstLetterCapital } from "@/lib/utils";
import { Package } from "@/types/package/package"
import Image from "next/image"
import { useEffect, useState } from "react"

type ReligiousDestinationProps = {
     packages: Package[]
}

const ReligiousDestination = (props: ReligiousDestinationProps) => {
     const { packages } = props;

     const [religiousInfo, setReligiousInfo] = useState<Package[]>([]);

     useEffect(() => {
          if (packages?.length) {
               const religious = packages.filter(item =>
                    item.category.includes("religious-tours")
               );
               if (religious.length) {
                    setReligiousInfo(religious);
               }
          }
     }, [packages]);

     console.log("religiousInfo", religiousInfo);

     return (
          <>
               <section className="religious-section">
                    <div className="container">
                         <div className="title title-with-tabs">
                              <div className="title-text">
                                   <h2>Top <span>Religious Destination</span></h2>
                                   <div className="title-underline"><Image src="/assets/images/big-title-underline.png"
                                        alt="title-underline" width={368} height={10} unoptimized /></div>
                              </div>
                         </div>
                         <div className="religious-section-content">
                              <div className="row">
                                   {religiousInfo?.map(
                                        (packageItem, index) => {
                                             const religiousImg = packageItem.navbar?.img?.file_secure_url || null;
                                             return (
                                                  <div key={index} className="col-lg-4 col-md-6 col-6">
                                                       <div className="religious-img-card">
                                                            <a href="#">
                                                                 <Image
                                                                      className="br-rad"
                                                                      src={religiousImg}
                                                                      alt={packageItem?.package_name}
                                                                      width={416}
                                                                      height={375}
                                                                      layout="responsive"
                                                                      unoptimized
                                                                 />
                                                                 <div className="religious-card-content">
                                                                      <h2>{firstLetterCapital(packageItem.package_name)}</h2>
                                                                 </div>
                                                                 <div className="religious-card-circle">
                                                                      <Image src="/assets/images/circle-arrow-up-right.png"
                                                                           alt="circle-arrow-up-right" width={60} height={60} unoptimized />
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             )
                                        }
                                   )}
                              </div>
                              {(religiousInfo?.length > 6) && (
                                   <div className="text-center mt-3">
                                        <div className="view-more-btn">
                                             <a href="#"><span>View More</span></a>
                                        </div>
                                   </div>
                              )}
                         </div>
                    </div>
               </section>
          </>
     )
}

export default ReligiousDestination
