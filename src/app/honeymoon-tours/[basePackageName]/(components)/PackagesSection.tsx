'use client'

import InquiryModal from '@/components/common/inquiry-modal/InquiryModal'
import { capitalizeText, firstLetterCapital, formatIndianNumber, getImageForService } from '@/lib/utils'
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
     const [sortBy, setShortBy] = useState('sort');
     const [packageDetails, setPackageDetails] = useState({
          packageName: "",
          budget: 0
     });
     const [modalShow, setModalShow] = useState(false);

     console.log(basePackageName.replace(/-+/g, " "));

     const handleFilterChange = async () => {
          try {
               const sortQuery = sortBy !== 'sort' ? `&sort_by=${sortBy}` : '';
               const response: any = await fetchData({
                    endpoint: `package/public/search?base_package=${basePackageName.replace(/-+/g, " ")}${sortQuery}`
               });

               if (response?.statusCode === 200 || response?.statusCode === 201) {
                    setPackages(response.data || []);
               } else {
                    console.error("Search API failed:",);
               }
          } catch (err) {
               console.error("Error fetching searched packages:", err);
          }
     };


     useEffect(() => {
          if (sortBy != "sort") {
               handleFilterChange();
          }
     }, [sortBy]);

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
                                             value={sortBy}
                                             onChange={(e) => setShortBy(e.target.value)}
                                        >
                                             <option value="sort" disabled>&#x21c5; Sort by</option>
                                             <option value="price-high-to-low" >Price High to Low</option>
                                             <option value="price-low-to-high">Price Low to High</option>
                                             <option value="duration-long-to-sort">Duration Long to Short</option>
                                             <option value="duration-sort-to-long">Duration Short to Long</option>
                                        </select>
                                   </div>

                                   <div className="reset-filter">
                                        <button type="button" onClick={() => {
                                             setShortBy('sort');
                                             setPackages(initialPackages);
                                        }}>Reset All</button>
                                   </div>
                              </div>

                              {Array.isArray(packages) && packages.length > 0 && (
                                   <div className="inner-tour-cards">
                                        <div className="row">
                                             {packages.map((packageInfo, index) => {
                                                  if (!packageInfo || typeof packageInfo !== "object") return null;

                                                  const pkgImg =
                                                       packageInfo.basic_info?.img?.file_public_url || null;

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
                                                                                     <h5 className="card-title package-card-title">
                                                                                          {firstLetterCapital(packageInfo?.package_name)}
                                                                                     </h5>
                                                                                     <span className="card-subtitle package-card-subtitle">
                                                                                          {`${packageInfo?.basic_info?.night}N / ${packageInfo?.basic_info?.days}D`}
                                                                                     </span>
                                                                                </div>
                                                                                <hr />
                                                                                {Array.isArray(packageInfo?.services) && packageInfo.services?.length ?
                                                                                     <><div className="card-services">
                                                                                          {packageInfo.services.map((service) => {
                                                                                               if (!service || !service._id || !service.name) return null;
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
                                                                                     </> : null}
                                                                                <p className="card-text package-card-text card-note mt-2">
                                                                                     <span>* </span>
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
                                                                                          {packageInfo?.difference_price && packageInfo?.difference_price > 0 ? (
                                                                                               <>
                                                                                                    <div className="price-value-sm">₹{formatIndianNumber(packageInfo?.price)}/-</div>
                                                                                                    <div className="price-value">
                                                                                                         ₹{formatIndianNumber(packageInfo?.discounted_price)}<span>/-*</span>
                                                                                                    </div>
                                                                                               </>
                                                                                          ) : (
                                                                                               <div className="price-value">₹<span>{formatIndianNumber(packageInfo?.price)}/-</span>*</div>
                                                                                          )}
                                                                                          <div className="price-content">Starting price Per Adult </div>
                                                                                     </div>
                                                                                     <div className="card-action-btns">
                                                                                          <div className="view-more-btn wo">
                                                                                               <Link
                                                                                                    href={`${pathName}/${packageInfo?.slug}`}
                                                                                                    className=""
                                                                                               >
                                                                                                    <span>View details</span>
                                                                                               </Link>
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
                                                  );
                                             })}
                                        </div>
                                   </div>
                              )}
                         </div>
                    </div>
               </section>

               <InquiryModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    packageDetails={packageDetails}
                    autoCloseOnSubmit={true}
               />
          </>
     )
}

export default PackagesSection
