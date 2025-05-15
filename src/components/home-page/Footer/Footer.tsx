import Image from "next/image"
// import "./footer.css"
import Link from "next/link"
import FooterForm from "./FooterForm"

const Footer = () => {
     return (
          <>
               <section className="footer-section">
                    <div className="container">
                         <div className="footer-logo">
                              <Image src="/assets/images/logo/ah-logo.png" alt="ah-logo" height={84} width={260} unoptimized />
                         </div>
                         <div className="footer-content">
                              <div className="row">
                                   <div className="col-lg-6">
                                        <div className="newsletter-section">
                                             <div className="f-title">
                                                  Keep travelling all year round!
                                             </div>
                                             <div className="f-content">
                                                  Subscribe to our newsletter to find travel
                                                  inspiration in your inbox.
                                             </div>
                                             <FooterForm />
                                        </div>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="row">
                                             <div className="col-sm-4 col-12">
                                                  <div className="footer-links">
                                                       <div className="f-title">Explore Us</div>
                                                       <ul className="list-unstyled">
                                                            <li>
                                                                 <Link href="/about">About Us</Link>
                                                            </li>
                                                            <li><Link href="/our-team">Our Team</Link></li>
                                                            <li><Link href="/reviews">Reviews</Link></li>
                                                            <li><Link href="/contact">Contact Us</Link></li>
                                                       </ul>
                                                  </div>
                                             </div>
                                             <div className="col-sm-8 col-12">
                                                  <div className="footer-links">
                                                       <div className="f-title">Useful Links</div>
                                                       <div className="row">
                                                            <div className="col-6">
                                                                 <ul className="list-unstyled">
                                                                      <li>
                                                                           <Link href="#">Gujarat Tourism</Link>
                                                                      </li>
                                                                      <li><Link href="#">India Tour</Link></li>
                                                                      <li>
                                                                           <Link href="#">International Tour</Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="#">Honeymoon Packages</Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                            <div className="col-6">
                                                                 <ul className="list-unstyled">
                                                                      <li>
                                                                           <Link href="#">Religious Tour</Link>
                                                                      </li>
                                                                      <li><Link href="#">Hotels</Link></li>
                                                                      <li>
                                                                           <Link
                                                                                href="/terms-and-conditions">Terms & Conditions</Link>
                                                                      </li>
                                                                      <li>
                                                                           <Link href="/privacy-policy">Privacy Policy</Link>
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <hr />
                              <div className="row">
                                   <div className="col-lg-3 col-sm-6">
                                        <div className="f-title">Home Branch</div>
                                        <div className="address-box">
                                             <div className="location-pill">AHMEDABAD</div>
                                             <p>
                                                  916, City Center 2 Nr CIMS Hospital Science City
                                                  Road, Sola, Ahmedabad, Gujarat 380060
                                             </p>
                                        </div>
                                   </div>
                                   <div className="col-lg-9 col-sm-6">
                                        <div className="f-title">Other Branches</div>
                                        <div className="other-brances">
                                             <div className="address-box">
                                                  <div className="location-pill ob">MEHSANA</div>
                                                  <p>
                                                       C-103 Joyos Hubtown, Nr. Virnagar Society, BK
                                                       road, Mehsana, Gujarat 384001
                                                  </p>
                                             </div>
                                             <div className="address-box">
                                                  <div className="location-pill ob">RAJKOT</div>
                                                  <p>
                                                       501, Fifth Floor, Vyanktesh Vogue, Indira
                                                       Circle, Jala Ram Nagar, 150 Feet Ring Rd,
                                                       Rajkot, 360007
                                                  </p>
                                             </div>
                                             <div className="address-box">
                                                  <div className="location-pill ob">VIJAPUR</div>
                                                  <p>
                                                       4, 1st floor, MA Business Hub, Opp. The Palate
                                                       Restaurant , Anandpura Cross Road, Vijapur -
                                                       382870
                                                  </p>
                                             </div>
                                             <div className="address-box">
                                                  <div className="location-pill ob">MANSA</div>
                                                  <p>
                                                       A 1 College Shopping Centre Itadra Road, Mansa -
                                                       382845
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <hr />
                              <div className="copy-right">
                                   <div>Copyright By © <Link href="#">Alakh Holidays</Link> - 2025</div>
                                   <div>
                                        Developed By <Link href="https://challengetechnolabs.com/" target="_blank">Challenge Technolabs</Link> - 2025
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Footer
