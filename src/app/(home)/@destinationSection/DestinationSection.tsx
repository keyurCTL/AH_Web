"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Package } from "@/types/package/package";
import { firstLetterCapital } from "@/lib/utils";

type DestinationSectionProps = {
  packages: Package[];
};

const DestinationSection = ({ packages }: DestinationSectionProps) => {
  const [activeTab, setActiveTab] = useState<"domestic" | "international">("domestic");
//   const [uniquePackages, setUniquePackages] = useState<Package[]>([]);
  const [domesticInfo, setDomesticInfo] = useState<Package[]>([]);
  const [internationalInfo, setInternationalInfo] = useState<Package[]>([]);

  // Deduplicate and classify packages
  useEffect(() => {
    if (!packages.length) return;

    const seen = new Set<string>();
    const unique: Package[] = [];

    packages.forEach(pkg => {
      if (!seen.has(pkg.base_package)) {
        seen.add(pkg.base_package);
        unique.push(pkg);
      }
    });

//     setUniquePackages(unique);

    const domestic = unique.filter(item => item.category.includes("india-tours"));
    const international = unique.filter(item => item.category.includes("international-tour"));

    setDomesticInfo(domestic);
    setInternationalInfo(international);
  }, [packages]);

  const displayedPackages = activeTab === "domestic" ? domesticInfo : internationalInfo;

  return (
    <section className="top-destination-section">
      <div className="container">
        <div className="top-destination-box">
          <div className="title title-with-tabs">
            <div className="title-text">
              <h2>
                Top <span>Destination</span>
              </h2>
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
                    className={`nav-link ${activeTab === "domestic" ? "active" : ""}`}
                  >
                    Domestic
                  </button>
                  <button
                    onClick={() => setActiveTab("international")}
                    className={`nav-link ${activeTab === "international" ? "active" : ""}`}
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
                  {displayedPackages?.slice(0, 4).map((packageItem, index) => (
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
                        <h4>{firstLetterCapital(packageItem.base_package)}</h4>
                        <p>{packageItem.services.map(service => service.name).join(", ")}</p>
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
                    {displayedPackages.map((packageItem, index) => (
                      <div key={index} className="col-6">
                        <div className="scroll-img-card">
                          <a href="#">
                            <Image
                              src={packageItem.navbar?.img?.file_public_url}
                              alt={packageItem.navbar?.name}
                              width={283}
                              height={287}
                              layout="responsive"
                              unoptimized
                            />
                            <div className="scroll-card-content">
                              <h2>{firstLetterCapital(packageItem.base_package)}</h2>
                              <span>Starting From ₹{packageItem.price}/-</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;