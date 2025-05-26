'use client'

import InquiryModal from '@/components/common/inquiry-modal/InquiryModal'
import { capitalizeText, firstLetterCapital, getImageForService } from '@/lib/utils'
import { fetchData } from '@/services/api'
import { Package } from '@/types/package/package'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type PackagesSectionProps = {
     packages: Package[]
}

type RouteParams = {
     basePackageName: string;
};

const PackagesSection = ({ packages: initialPackages }: PackagesSectionProps) => {
     const pathName = usePathname()
     const { basePackageName } = useParams<RouteParams>();
     const totalPackages = initialPackages?.length || 0
     const [packages, setPackages] = useState<Package[]>(initialPackages);
     const [shortBy, setShortBy] = useState('short');
     const [packageDetails, setPackageDetails] = useState({
          packageName: "",
          budget: 0
     });
     const [modalShow, setModalShow] = useState(false);

     const handleFilterChange = async () => {
          try {
               const sortQuery = shortBy !== 'short' ? `&sort_by=${shortBy}` : '';
               const response: any = await fetchData({
                    endpoint: `package/public/search?base_package=${basePackageName.replace(/-+/g, " ")}${sortQuery}`
               });

               if (response?.statusCode === 200 || response?.statusCode === 201) {
                    setPackages(response.data || []);
               } else {
                    console.error("Search API failed:", response);
               }
          } catch (err) {
               console.error("Error fetching searched packages:", err);
          }
     };


     useEffect(() => {
          handleFilterChange();
     }, [shortBy]);

     return (
          <>
               <section className="inner-tours-section">
                    <div className="container">
                         <div className="inner-tour-content">
                              <div className="title">
                                   <h4>{capitalizeText(basePackageName.replace(/-+/g, " "))} Tours : <span>({totalPackages})</span></h4>
                              </div>
                              <div className="tour-filters">
                                   <div className="filter">
                                        <select
                                             value={shortBy}
                                             onChange={(e) => setShortBy(e.target.value)}
                                        >
                                             <option value="short" disabled>&#x21c5; Sort by</option>
                                             <option value="price-high-to-low" >Price High to Low</option>
                                             <option value="price-low-to-high">Price Low to High</option>
                                             <option value="duration-long-to-short">Druration Long to Short</option>
                                             <option value="duration-short-to-long">Druration Short to Long</option>
                                        </select>
                                   </div>

                                   <div className="reset-filter">
                                        <button type="button" onClick={() => {
                                             setShortBy('short');
                                             setPackages(initialPackages);
                                        }}>Reset All</button>
                                   </div>
                              </div>

                              <div className="inner-tour-cards">
                                   <div className="row">
                                        {packages?.map(
                                             (packageInfo, index) => {
                                                  const pkgImg = packageInfo.basic_info?.img?.file_public_url || null
                                                  return (
                                                       <div key={index} className="col-1g-12 mb-4">
                                                            <div className="card package-card h-100">
                                                                 <div className="row">
                                                                      <div className="col-lg-3">
                                                                           <div className="package-card-img-wrapper h-100">
                                                                                <Image
                                                                                     src={pkgImg}
                                                                                     className="card-img-top package-card-img"
                                                                                     alt={`${packageInfo?.package_name} image`}
                                                                                     height={250}
                                                                                     width={290}
                                                                                />
                                                                           </div>
                                                                      </div>
                                                                      <div className="col-lg-9 inner-card">
                                                                           <div className="card-body package-card-body">
                                                                                <div className="card-title-box">
                                                                                     <h5 className="card-title package-card-title">{firstLetterCapital(packageInfo?.package_name)}</h5>
                                                                                     <span className="card-subtitle package-card-subtitle">
                                                                                          {`${packageInfo?.basic_info?.night} Nights / ${packageInfo?.basic_info?.days} Days`}
                                                                                     </span>
                                                                                </div>
                                                                                <hr />
                                                                                <div className="card-services">
                                                                                     {packageInfo?.services.map((service) => {
                                                                                          const imageSrc = getImageForService(service.name);
                                                                                          return (
                                                                                               <div className="card-service" key={service._id}>
                                                                                                    <div className="service-icon">
                                                                                                         <Image
                                                                                                              src={imageSrc}
                                                                                                              width={30}
                                                                                                              height={30}
                                                                                                              layout="intrinsic"
                                                                                                              alt={service.name}
                                                                                                         />
                                                                                                    </div>
                                                                                                    <div className="service-name">{service.name}</div>
                                                                                               </div>
                                                                                          );
                                                                                     })}
                                                                                </div>

                                                                                <hr />
                                                                                <p className="card-text package-card-text card-note mt-2"><span>* </span>
                                                                                     Off-season rates are not Applicable in Diwali/ Dussehra / Holi /
                                                                                     Republic Day /Independent Day/Long Weekend. Etc. (Not Valid
                                                                                     for last two weeks of Dec and first week of Jan)
                                                                                </p>
                                                                                <span className="card-note pb-2">
                                                                                     <span>*</span> Terms and Conditions Applied
                                                                                </span>
                                                                           </div>
                                                                           <div className="card-body-right">
                                                                                <div className="hl"></div>
                                                                                <div className="card-price">
                                                                                     <div className="price">
                                                                                          <div className="price-value">₹<span>{packageInfo?.price}/-</span>*</div>
                                                                                          <div className="price-content">Starting price Per Adult </div>
                                                                                     </div>
                                                                                     <div className="card-action-btns">
                                                                                          <div className="view-more-btn wo">
                                                                                               <Link href={`${pathName}/${packageInfo?.package_name}`} className=""><span>View details</span></Link>
                                                                                          </div>
                                                                                          <div className="view-more-btn">
                                                                                               <button
                                                                                                    onClick={() => {
                                                                                                         setPackageDetails({
                                                                                                              packageName: packageInfo?.package_name,
                                                                                                              budget: packageInfo?.price
                                                                                                         }); // Set the name here
                                                                                                         setModalShow(true); // Then show the modal
                                                                                                    }}
                                                                                                    className="btn"
                                                                                               >
                                                                                                    <span>Enquire</span>
                                                                                               </button>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  )
                                             }
                                        )}

                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <InquiryModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    packageDetals={packageDetails}
                    autoCloseOnSubmit={true}
               />
          </>
     )
}

export default PackagesSection
