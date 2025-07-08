'use client'

import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import './modal.css'
import { InquiryFormValues, inquirySchema } from './schema'
import { fetchData } from '@/services/api'
import Captcha from '../captcha/Captcha'

type PackageDetails = {
     packageName: string
     budget: number
     extra_details?: string
     date_of_travel?: string
}

type InquiryModalProps = {
     show: boolean
     onHide: () => void
     packageDetails: PackageDetails
     autoCloseOnSubmit?: boolean
}

const InquiryModal: React.FC<InquiryModalProps> = ({ show, onHide, packageDetails, autoCloseOnSubmit }) => {

     const [formMessage, setFormMessage] = useState<string>('');
     const [formStatus, setFormStatus] = useState<'success' | 'error' | ''>('');
     const [loading, setLoading] = useState<boolean>(false);

     // Captcha states
     const [generatedCaptcha, setGeneratedCaptcha] = useState('');
     const [captchaInput, setCaptchaInput] = useState('');
     const [captchaError, setCaptchaError] = useState('');

     const {
          register,
          handleSubmit,
          formState: { errors },
          reset,
     } = useForm<InquiryFormValues>({
          resolver: zodResolver(inquirySchema),
     })

     // Captcha handlers to update captcha from child component
     const handleCaptchaChange = (captcha: string) => {
          setGeneratedCaptcha(captcha);
          setCaptchaInput(''); // reset input on new captcha
          setCaptchaError('');
     };

     const handleCaptchaInputChange = (input: string) => {
          setCaptchaInput(input);
          setCaptchaError('');
     };

     const onSubmit = async (data: InquiryFormValues) => {
          // Validate captcha before sending form
          if (captchaInput.trim() === '') {
               setCaptchaError('Please enter the CAPTCHA');
               return;
          }
          if (captchaInput !== generatedCaptcha) {
               setCaptchaError('CAPTCHA does not match');
               return;
          }

          setLoading(true);
          const { extra_details, date_of_travel, ...rest } = data;

          const finalPayload = {
               ...rest,
               package_details: {
                    package_name: packageDetails?.packageName,
                    budget: packageDetails?.budget,
                    extra_details,
                    date_of_travel,
               },
          }

          try {
               const res: any = await fetchData({
                    endpoint: 'package-inquiry',
                    method: 'POST',
                    body: finalPayload
               })

               if (res?.statusCode === 200 || res?.statusCode === 201) {
                    setFormStatus('success');
                    setFormMessage(res.message);
                    reset();
                    setCaptchaInput(''); // reset captcha input

                    // ✅ Auto-close modal after 3 seconds if allowed
                    if (autoCloseOnSubmit) {
                         setTimeout(() => {
                              onHide();
                         }, 4000);
                    }
               } else {
                    setFormStatus('error');
                    setFormMessage(res.message || 'Something went wrong.');
               }
          } catch (error) {
               console.error("Error:", error);
               setFormStatus('error');
               setFormMessage('An error occurred. Please try again.');
          } finally {
               setLoading(false);
               // DO NOT auto-close modal here
          }
     }

     useEffect(() => {
          if (!show) {
               setFormMessage('');
               setFormStatus('');
               setLoading(false);
               reset();
          }
     }, [show, reset]);

     useEffect(() => {
          if (formMessage) {
               const timer = setTimeout(() => {
                    setFormMessage('');
                    setFormStatus('');
               }, 4000);
               return () => clearTimeout(timer);
          }
     }, [formMessage]);

     const generateOptions = (count: number) =>
          Array.from({ length: count + 1 }, (_, i) => i).map((num) => (
               <option key={num} value={num.toString()}>
                    {num}
               </option>
          ))

     return (
          <Modal show={show} onHide={onHide} size="lg" centered>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                         <Modal.Title>Inquiry Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                         {formMessage && (
                              <p style={{ color: formStatus === 'success' ? 'green' : 'red' }} className='fw-light blockquote-footer mt-2'>
                                   {formMessage}
                              </p>
                         )}
                         <div className="row">
                              <div className="col-6 mb-1">
                                   <label className="form-label">Name</label>
                                   <input type="text" className="form-control" {...register('name')} />
                                   {errors.name && <span className="text-danger">{errors.name.message}</span>}
                              </div>
                              <div className="col-6 mb-1">
                                   <label className="form-label">Mobile</label>
                                   <input type="tel" className="form-control" {...register('mobile_number')} />
                                   {errors.mobile_number && <span className="text-danger">{errors.mobile_number.message}</span>}
                              </div>
                         </div>

                         <div className="row">
                              <div className="col-6 mb-1">
                                   <label className="form-label">Package Name</label>
                                   <input type="text" className="form-control" value={packageDetails?.packageName} readOnly />
                              </div>
                              <div className="col-6 mb-1">
                                   <label className="form-label">Email</label>
                                   <input type="email" className="form-control" {...register('email')} />
                                   {errors.email && <span className="text-danger">{errors.email.message}</span>}
                              </div>
                         </div>

                         <div className="row">
                              <div className="col-6 mb-1">
                                   <label className="form-label">Your City</label>
                                   <input type="text" className="form-control" {...register('city')} />
                                   {errors.city && <span className="text-danger">{errors.city.message}</span>}
                              </div>
                              <div className="col-6 mb-1">
                                   <label className="form-label">Date of Travel</label>
                                   <input type="date" className="form-control" {...register('date_of_travel')} />
                                   {errors.date_of_travel && <span className="text-danger">{errors.date_of_travel.message}</span>}
                              </div>
                         </div>

                         <div className="row">
                              <div className="col-4 mb-1">
                                   <label className="form-label">No. of Adults</label>
                                   <select className="form-select" {...register('no_of_adult')}>
                                        <option value="">Select</option>
                                        {generateOptions(20).slice(1)}
                                   </select>
                                   {errors.no_of_adult && <span className="text-danger">{errors.no_of_adult.message}</span>}
                              </div>
                              <div className="col-4 mb-1">
                                   <label className="form-label">No. of Children</label>
                                   <select className="form-select" {...register('no_of_children')}>
                                        <option value="">Select</option>
                                        {generateOptions(10)}
                                   </select>
                                   {errors.no_of_children && <span className="text-danger">{errors.no_of_children.message}</span>}
                              </div>
                              <div className="col-4 mb-1">
                                   <label className="form-label">No. of Infants</label>
                                   <select className="form-select" {...register('no_of_infant')}>
                                        <option value="">Select</option>
                                        {generateOptions(10)}
                                   </select>
                                   {errors.no_of_infant && <span className="text-danger">{errors.no_of_infant.message}</span>}
                              </div>
                         </div>

                         <div className="row">
                              <div className="col-6 mb-1">
                                   <label className="form-label">Extra Details</label>
                                   <textarea className="form-control" rows={3} {...register('extra_details')} />
                              </div>
                              <div className="col-6 mb-1 captcha-section">
                                   {/* Captcha Component */}
                                   <Captcha
                                        onCaptchaChange={handleCaptchaChange}
                                        onInputChange={handleCaptchaInputChange}
                                   />
                                   {captchaError && <p className="error">{captchaError}</p>}
                              </div>
                         </div>
                    </Modal.Body>
                    <Modal.Footer>
                         <div className="view-more-btn">
                              <button type="submit" className="btn" disabled={loading}>
                                   <span>{loading ? "Submitting..." : "Submit"}</span>
                              </button>
                         </div>
                         <div className="view-more-btn wo">
                              <button className="btn" type="button" onClick={onHide} disabled={loading}>
                                   <span>Close</span>
                              </button>
                         </div>
                    </Modal.Footer>
               </form>
          </Modal>
     )
}

export default InquiryModal
