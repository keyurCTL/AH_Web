import Image from 'next/image'
import React from 'react'
import "./privacy-policy.css"

const TermsAndConditionsSection = () => {
     return (
          <>
               <div className="privacy-policy-section">
                    <div className="container">
                         <div className="title title-with-tabs">
                              <div className="title-text">
                                   <h2>Our <span>Terms & Conditions</span></h2>
                                   <div className="title-underline">
                                        <Image src="./assets/images/min-title-underline.png" alt="title-underline" height={10} width={260} unoptimized />
                                   </div>
                              </div>
                         </div>
                         <div className="row mt-5">
                              <div className="policy-content" id="Agreement">
                                   <div className="policy-title">User Agreement</div>
                                   <p>By accessing and using the services provided by Alakh Holidays, you agree to adhere to the
                                        following terms and conditions. Failure to comply may result in the termination of your
                                        access to our services.</p>
                                   <p>These terms govern all interactions, bookings, and transactions made through our website and
                                        associated services.</p>
                              </div>
                              <hr />
                              <div className="policy-content" id="Booking">
                                   <div className="policy-title">Booking & Payments</div>
                                   <p>All travel bookings are subject to availability. A confirmation email will be sent upon
                                        successful booking.</p>
                                   <p>A non-refundable deposit may be required to secure reservations. The balance must be paid
                                        within the stipulated time before departure.</p>
                                   <p>We accept payments via credit/debit cards, bank transfers, and other available payment
                                        methods. Alakh Holidays is not responsible for any transaction fees charged by financial
                                        institutions.</p>
                              </div>
                              <hr />
                              <div className="policy-content" id="Cancellation">
                                   <div className="policy-title">Cancellation & Refund Policy</div>
                                   <p>Cancellation requests must be made in writing via email. The refund process varies depending
                                        on the cancellation date and supplier policies.</p>
                                   <p>Some travel packages may be non-refundable. Refunds, when applicable, will be processed
                                        within 30 business days after deduction of applicable charges.</p>
                                   <p>Alakh Holidays reserves the right to cancel bookings due to unforeseen circumstances. In
                                        such cases, a full refund will be issued.</p>
                              </div>
                              <hr />
                              <div className="policy-content" id="TravelDocs">
                                   <div className="policy-title">Travel Documents & Responsibility</div>
                                   <p>Travelers must ensure they have valid passports, visas, permits, and other required travel
                                        documents before departure.</p>
                                   <p>Alakh Holidays will not be held liable for any denied boarding, entry restrictions, or
                                        additional costs incurred due to missing or incorrect travel documentation.</p>
                                   <p>It is the traveler&apos;s responsibility to check country-specific entry requirements, including
                                        vaccinations and COVID-19 guidelines.</p>
                              </div>
                              <hr />
                              <div className="policy-content" id="Liability">
                                   <div className="policy-title">Limitation Of Liability</div>
                                   <p>Alakh Holidays acts as an intermediary between travelers and third-party service providers
                                        (airlines, hotels, transport services, etc.).</p>
                                   <p>We shall not be liable for personal injuries, property damage, delays, or additional
                                        expenses incurred due to actions beyond our control.</p>
                                   <p>Any disputes regarding services provided by third parties must be resolved with the
                                        respective service provider.</p>
                              </div>
                              <hr />
                              <div className="policy-content" id="Conduct">
                                   <div className="policy-title">Traveler Conduct</div>
                                   <p>All travelers are expected to adhere to local laws, respect cultural norms, and comply with
                                        service provider regulations.</p>
                                   <p>Alakh Holidays reserves the right to refuse service to any traveler engaging in misconduct,
                                        illegal activities, or disruptive behavior.</p>
                              </div>
                              <hr />
                              <div className="policy-content" id="ForceMajeure">
                                   <div className="policy-title">Force Majeure</div>
                                   <p>Alakh Holidays shall not be held liable for cancellations, delays, or service disruptions
                                        caused by unforeseen events, including but not limited to natural disasters, political
                                        unrest, strikes, pandemics, or government regulations.</p>
                                   <p>In such cases, we will make reasonable efforts to assist travelers in rebooking or obtaining
                                        refunds where possible.</p>
                              </div>
                              <hr />
                              <div className="policy-content" id="Disputes">
                                   <div className="policy-title">Governing Law & Dispute Resolution</div>
                                   <p>These terms and conditions shall be governed by and construed in accordance with the laws of
                                        India.</p>
                                   <p>Any disputes arising from the use of our services shall be resolved through arbitration or
                                        legal proceedings in Ahmedabad, Gujarat.</p>
                                   <p>Travelers agree to settle disputes amicably before pursuing legal action.</p>
                              </div>
                              <hr />
                              <div className="policy-content" id="Amendments">
                                   <div className="policy-title">Changes To Terms & Conditions</div>
                                   <p>Alakh Holidays reserves the right to modify these terms and conditions at any time. Updates
                                        will be posted on our website and will be effective immediately upon publication.</p>
                                   <p>Continued use of our services after modifications indicates acceptance of the revised terms.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default TermsAndConditionsSection
