"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Package } from "@/types/package/package";

type DestinationSectionProps = {
     packages: Package[]
}

const DestinationSection = (props: DestinationSectionProps) => {
     const { packages } = props;
     console.log("packages", packages);

     const [activeTab, setActiveTab] = useState("domestic");
     const [domesticInfo, setDomesticInfo] = useState<Package[] | null>(null);
     const [internationalInfo, setInternationalInfo] = useState<Package[] | null>(null);

     const uniquePackages: Package[] = [];

     packages.forEach(pkg => {
          const alreadyExists = uniquePackages.some(
               (existingPkg) => existingPkg.base_package === pkg.base_package
          );

          if (!alreadyExists) {
               uniquePackages.push(pkg);
          }
     });

     console.log("uniquePackages", uniquePackages);

     useEffect(() => {
          if (uniquePackages?.length) {
               const domestic = uniquePackages.filter(item =>
                    item.category.includes("india-tours")
               );
               const international = uniquePackages.filter(item =>
                    item.category.includes("international-tour")
               );
               if (domestic.length) {
                    setDomesticInfo(domestic);
               }
               if (international.length) {
                    setInternationalInfo(international);
               }
          }
     }, [packages]);

     console.log("domesticInfo", domesticInfo);
     console.log("internationalInfo", internationalInfo);

     return (
          <>
               <section className="top-destination-section">
                    <div className="container">
                         <div className="top-destination-box">
                              <div className="title title-with-tabs">
                                   <div className="title-text">
                                        <h2>Top <span>Destination</span></h2>
                                        <div className="title-underline">
                                             <Image
                                                  src="/assets/images/title-underline.png"
                                                  alt="title-underline"
                                                  width={112}
                                                  height={6}
                                                  unoptimized
                                             />
                                        </div>
                                   </div>
                                   <div className="deal-tabs">
                                        <nav>
                                             <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                  <button
                                                       onClick={() => setActiveTab("domestic")}
                                                       className={
                                                            activeTab === "domestic" ? "active nav-link" : "nav-link"
                                                       }
                                                  >
                                                       Domestic
                                                  </button>
                                                  <button
                                                       onClick={() => setActiveTab("international")}
                                                       className={
                                                            activeTab === "international"
                                                                 ? "active nav-link"
                                                                 : "nav-link"
                                                       }
                                                  >
                                                       International
                                                  </button>
                                             </div>
                                        </nav>
                                   </div>
                              </div>
                              <div className="top-destination-content">
                                   <div className="row mt-5">
                                        <div className="col-md-6">
                                             <div className="destination-content">
                                                  {activeTab === "domestic" && domesticInfo?.map(
                                                       (packageItem, index) => (
                                                            <a key={index} href="#" className="dc-card">
                                                                 <div className="dc-card-img">
                                                                      <Image
                                                                           src={packageItem?.navbar?.img?.file_public_url}
                                                                           alt={packageItem.navbar.name}
                                                                           height={109}
                                                                           width={109}
                                                                           unoptimized
                                                                      />
                                                                 </div>
                                                                 <div className="dc-card-content">
                                                                      <h4>{packageItem.base_package}</h4>
                                                                      <p>{packageItem.services.map(service => service.name).join(', ')}</p>
                                                                      <div className="dc-price-badge">
                                                                           <span>₹{packageItem.price}/-*</span>
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       ))}
                                                  {activeTab === "international" && internationalInfo?.map(
                                                       (packageItem, index) => (
                                                            <a key={index} href="#" className="dc-card">
                                                                 <div className="dc-card-img">
                                                                      <Image
                                                                           src={packageItem?.navbar?.img?.file_public_url}
                                                                           alt={packageItem.navbar.name}
                                                                           height={109}
                                                                           width={109}
                                                                           unoptimized
                                                                      />
                                                                 </div>
                                                                 <div className="dc-card-content">
                                                                      <h4>{packageItem.base_package}</h4>
                                                                      <p>{packageItem.services.map(service => service.name).join(', ')}</p>
                                                                      <div className="dc-price-badge">
                                                                           <span>₹{packageItem.price}/-*</span>
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       ))}
                                             </div>
                                        </div>
                                        <div className="col-md-6">
                                             <div className="scrolling-dc-content">
                                                  <div className="row">
                                                       {activeTab === "international" && internationalInfo?.map(
                                                            (packageItem, index) => (
                                                                 <div key={index} className="col-6">
                                                                      <div className="scroll-img-card">
                                                                           <a href="#">
                                                                                <Image
                                                                                     src={packageItem.navbar?.img?.file_public_url}
                                                                                     alt={packageItem.navbar?.name}
                                                                                     width={283}
                                                                                     height={287}
                                                                                     unoptimized
                                                                                />
                                                                                <div className="scroll-card-content">
                                                                                     <h2>{packageItem.base_package}</h2>
                                                                                     <span>Starting From ₹{packageItem.price}/-</span>
                                                                                </div>
                                                                           </a>
                                                                      </div>
                                                                 </div>
                                                            ))
                                                       }
                                                       {activeTab === "domestic" && domesticInfo?.map(
                                                            (packageItem, index) => (
                                                                 <div key={index} className="col-6">
                                                                      <div className="scroll-img-card">
                                                                           <a href="#">
                                                                                <Image
                                                                                     src={packageItem.navbar?.img?.file_public_url}
                                                                                     alt={packageItem.navbar?.name}
                                                                                     width={283}
                                                                                     height={287}
                                                                                     unoptimized
                                                                                />
                                                                                <div className="scroll-card-content">
                                                                                     <h2>{packageItem.base_package}</h2>
                                                                                     <span>Starting From ₹{packageItem.price}/-</span>
                                                                                </div>
                                                                           </a>
                                                                      </div>
                                                                 </div>
                                                            ))
                                                       }
                                                  </div>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default DestinationSection;
