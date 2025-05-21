import Image from 'next/image'
import React from 'react'
// import "./ourfamily.css"

const OurFamilySection = () => {
     return (
          <>
               <section className="our-family-section">
                    <div className="container">
                         <div className="our-fam">
                              <h4>Our Family</h4>
                              <Image src="/assets/images/mmt-logo.png" alt="mmt-logo" width={195} height={60} unoptimized />
                              <Image src="/assets/images/tbo-logo.png" alt="tbo-logo" width={195} height={36} unoptimized />
                              <Image src="/assets/images/expedia-logo.png" alt="expedia-logo" width={195} height={60} unoptimized />
                              <Image src="/assets/images/akbar-logo.png" alt="akbar-logo" width={195} height={60} unoptimized />
                         </div>
                    </div>
               </section>
          </>
     )
}

export default OurFamilySection
