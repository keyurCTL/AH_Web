import Image from 'next/image'
import React from 'react'
import "./privacy-policy.css"

const PrivacyPolicySection = () => {
     return (
          <>
               <div className="privacy-policy-section">
                    <div className="container">
                         <div className="title title-with-tabs">
                              <div className="title-text">
                                   <h2>Our <span>Privacy Policy</span></h2>
                                   <div className="title-underline">
                                        <Image src="/assets/images/min-title-underline.png" alt="title-underline" width={260} height={10} unoptimized />
                                   </div>
                              </div>
                         </div>
                         <div className="row mt-5">
                              <div className="policy-content" id="Collection">
                                   <div className="policy-title">Collection And Use Of Personal Information</div>
                                   <p>Alakh Holidays collects personal information, including but not limited to your name,
                                        contact details, passport details, payment details, and travel preferences. This
                                        information is collected when you make inquiries, book travel packages, sign up for
                                        newsletters, or interact with our website.</p>
                                   <p>We use this information to process your bookings, improve our services, and communicate
                                        with you regarding travel updates, promotions, and customer support.</p>
                              </div> <hr />
                              <div className="policy-content" id="Purpose">
                                   <div className="policy-title">Purpose Of Collecting Personal Information</div>
                                   <p>Your personal data is collected for several purposes, including:</p>
                                   <ul>
                                        <li>Facilitating travel bookings and services</li>
                                        <li>Providing personalized travel recommendations</li>
                                        <li>Improving our website and services based on user behavior</li>
                                        <li>Ensuring compliance with regulatory and legal obligations</li>
                                   </ul>
                              </div> <hr />
                              <div className="policy-content" id="Cookies">
                                   <div className="policy-title">Cookies</div>
                                   <p>Cookies are small files stored on your device that help us improve your browsing
                                        experience. They allow us to remember your preferences, track website traffic, and
                                        provide relevant advertisements.</p>
                                   <p>You can manage or disable cookies in your browser settings, though some website
                                        features may not function properly without them.</p>
                              </div> <hr />
                              <div className="policy-content" id="ThirdParty">
                                   <div className="policy-title">Third Party Website Links</div>
                                   <p>Our website may include links to third-party websites for your convenience. Please note
                                        that Alakh Holidays is not responsible for the privacy practices of these external
                                        websites. We recommend reviewing their privacy policies before providing any personal
                                        information.</p>
                              </div> <hr />
                              <div className="policy-content" id="Sharing">
                                   <div className="policy-title">Parties With Whom Your Information Is Shared</div>
                                   <p>We may share your information with trusted third-party service providers, such as
                                        airlines, hotels, travel agencies, and payment processors, to facilitate your travel
                                        arrangements. We do not sell or misuse your personal information.</p>
                              </div> <hr />
                              <div className="policy-content" id="Marketing">
                                   <div className="policy-title">Marketing Use</div>
                                   <p>With your consent, we may use your personal data to send promotional offers, travel
                                        discounts, and updates about new travel packages. You have the option to unsubscribe
                                        from marketing communications at any time.</p>
                              </div> <hr />
                              <div className="policy-content" id="Security">
                                   <div className="policy-title">Data Protection And Security</div>
                                   <p>We implement strong security measures to protect your personal data from unauthorized
                                        access, modification, or disclosure. Secure payment gateways and encrypted
                                        transactions are used to enhance data safety.</p>
                              </div> <hr />
                              <div className="policy-content" id="IPR">
                                   <div className="policy-title">Intellectual Property Rights (IPR)</div>
                                   <p>All content, including text, images, logos, and website design, is the intellectual
                                        property of Alakh Holidays. Unauthorized reproduction, distribution, or use of our
                                        content without permission is prohibited.</p>
                              </div> <hr />
                              <div className="policy-content" id="Authenticity">
                                   <div className="policy-title">Authenticity Of Data</div>
                                   <p>It is your responsibility to provide accurate and truthful information when using our
                                        services. Alakh Holidays is not liable for any issues arising from incorrect or
                                        misleading data.</p>
                              </div> <hr />
                              <div className="policy-content" id="Changes">
                                   <div className="policy-title">Changes To This Privacy Policy</div>
                                   <p>We may update this Privacy Policy periodically. Any changes will be communicated
                                        through our website. We encourage users to review this policy regularly to stay
                                        informed.</p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default PrivacyPolicySection
