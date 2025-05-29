"use client";

import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PHONE_REGEX } from '@/lib/constants';
import { fetchData } from '@/services/api';
import Captcha from '@/components/common/captcha/Captcha';

// Form Validation Schema (captcha is validated manually, so not in schema)
const contactSchema = z.object({
     name: z.string().min(2, 'Name must be at least 2 characters'),
     email: z.string().email('Invalid email address'),
     mobile: z.string().min(10, 'Phone number must be at least 10 digits').regex(PHONE_REGEX, 'Invalid phone number'),
     subject: z.string().min(3, 'Subject must be at least 3 characters'),
     message: z.string().min(5, 'Message must be at least 5 characters'),
});

// Form Data Type
type ContactFormData = z.infer<typeof contactSchema>;

const officeData = [
     { city: 'Ahmedabad', address: '916, City Center 2, Nr CIMS Hospital, Science City Road, Sola, Ahmedabad, Gujarat 380060', phone1: '+91 97270 00916', phone2: '+91 91064 69579', email: 'alakhholidays@gmail.com' },
     { city: 'Mehsana', address: 'C-103 Joyos Hubtown, Nr. Virnagar Society, BK Road, Mehsana, Gujarat 384001', phone1: '+91 79900 16326', phone2: '+91 97270 00916', email: 'alakhholidays@gmail.com' },
     { city: 'Rajkot', address: '501, Fifth Floor, Vyanktesh Vogue, Indira Circle, Jala Ram Nagar, 150 Feet Ring Rd, Rajkot, 360007', phone1: '+91 91064 73904', phone2: '+91 97270 00916', email: 'alakhholidays@gmail.com' },
     // { city: 'Vijapur', address: '4, 1st Floor, MA Business Hub, Opp. The Palate Restaurant and Banquet Hall, Anandpura Cross Road, Vijapur, Mehsana-382870', phone1: '+91 81605 56455', phone2: '+91 97270 00916', email: 'alakhholidays@gmail.com' },
     // { city: 'Mansa', address: 'A 1 College Shopping Centre, Itadra Road, Mansa - 382845', phone1: '+91 63561 66705', phone2: '+91 97270 00916', email: 'alakhholidays@gmail.com' },
];

const ContactSection: React.FC = () => {
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
          reset
     } = useForm<ContactFormData>({
          resolver: zodResolver(contactSchema),
     });

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

     const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
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
          try {
               const res: any = await fetchData({
                    endpoint: 'contact-us',
                    method: 'POST',
                    body: data
               });
               if (res?.statusCode === 200) {
                    setFormStatus('success');
                    reset();
                    setFormMessage(res.message);
                    setCaptchaInput(''); // reset captcha input
               } else {
                    setFormMessage(res.message);
                    setFormStatus('error');
               }
          } catch (error) {
               console.log("error", error);
               setFormStatus('error');
               setFormMessage('An error occurred. Please try again.');
          } finally {
               setLoading(false);
          }
          console.log('Form Data:', data);
     };

     useEffect(() => {
          if (formMessage) {
               const timer = setTimeout(() => {
                    setFormMessage('');
                    setFormStatus('');
               }, 7000); // clears after 7 seconds

               return () => clearTimeout(timer);
          }
     }, [formMessage]);

     return (
          <section className="contact-section">
               <div className="container">
                    <div className="row">
                         {/* Contact Cards */}
                         <div className="col-lg-6">
                              <div className="contact-us-content">
                                   {officeData.map((office, index) => (
                                        <div className="contact-card" key={index}>
                                             <div className="contact-card-top">
                                                  <div className="office-location">
                                                       <h3>{office.city}</h3>
                                                       <div className="office-status">Mon - Sat: 10:00 AM to 07:00 PM</div>
                                                  </div>
                                             </div>
                                             <div className="contact-card-middle">
                                                  <div className="office-address"><p>{office.address}</p></div>
                                             </div>
                                             <div className="contact-card-bottom">
                                                  <div className="contact-number d-inline-flex">
                                                       <a href={`tel:${office.phone1}`}><Image src="/assets/images/call.png" alt="call" width={20} height={20} /> <span>{office.phone1}</span></a>
                                                       <a href={`tel:${office.phone2}`}><Image src="/assets/images/call.png" alt="call" width={20} height={20} /> <span>{office.phone2}</span></a>
                                                  </div>
                                                  <div className='contact-email d-inline-flex'>
                                                       <a href={`mailto:${office.email}`}><Image src="/assets/images/mail.png" alt="email" width={20} height={20} /> <span>{office.email}</span></a>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>

                         <div className="col-lg-6">
                              <div className="contact-us">
                                   <div className="contact-us-head">
                                        <h2>Love to hear from you, <br /> Get in touch</h2>
                                   </div>
                                   {formMessage && (
                                        <p style={{ color: formStatus === 'success' ? 'green' : 'red' }} className='fw-light'>
                                             {formMessage}
                                        </p>
                                   )}
                                   <form
                                        onSubmit={handleSubmit(onSubmit)}
                                   >
                                        <div className="form-group">
                                             <div className="input-group">
                                                  <input
                                                       {...register('name')}
                                                       placeholder="Enter Name"
                                                       type="text"
                                                  />
                                                  {errors.name && <p className='error'>{errors.name.message}</p>}
                                             </div>

                                             <div className="input-group">
                                                  <input
                                                       {...register('email')}
                                                       placeholder="Enter Email"
                                                       type="email"
                                                  />
                                                  {errors.email && <p className='error'>{errors.email.message}</p>}
                                             </div>

                                             <div className="input-group">
                                                  <input
                                                       {...register('mobile')}
                                                       placeholder="Enter Phone"
                                                       type="text"
                                                  />
                                                  {errors.mobile && <p className='error'>{errors.mobile.message}</p>}
                                             </div>

                                             <div className="input-group">
                                                  <input
                                                       {...register('subject')}
                                                       placeholder="Enter Subject"
                                                       type="text"
                                                  />
                                                  {errors.subject && <p className='error'>{errors.subject.message}</p>}
                                             </div>

                                             <div className="input-group">
                                                  <textarea
                                                       {...register('message')}
                                                       placeholder="Enter Message"
                                                       rows={2}
                                                  ></textarea>
                                                  {errors.message && <p className='error'>{errors.message.message}</p>}
                                             </div>

                                             {/* Captcha Component */}
                                                  <Captcha
                                                       onCaptchaChange={handleCaptchaChange}
                                                       onInputChange={handleCaptchaInputChange}
                                                  />
                                             {captchaError && <p className="error">{captchaError}</p>}

                                             <button
                                                  type="submit"
                                                  disabled={loading}
                                                  className="btn btn-primary mt-3"
                                             >
                                                  {loading ? 'Sending...' : 'Send Message'}
                                             </button>
                                        </div>
                                   </form>
                              </div>
                         </div>

                    </div>
               </div>
          </section>
     );
};

export default ContactSection;
