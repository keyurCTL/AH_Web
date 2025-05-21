"use client";

// import "./holidayasistance.css";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from "react-hook-form";
import { fetchData } from '@/services/api';
import { PHONE_REGEX } from '@/lib/constants';

const schema = z.object({
     to: z.string().min(1, 'Destination is required'),
     from: z.string().min(1, 'Source is required'),
     email: z.string().email('Invalid email address'),
     mobile: z.string().min(10, 'Phone number must be at least 10 digits').regex(PHONE_REGEX, 'Invalid phone number'),
     departure_date: z.string().optional(),
});

const HolidayAsistance = () => {
     const [selectedDate, setSelectedDate] = useState<Date | null>(null);
     const [selectedMonth, setSelectedMonth] = useState<string>('');
     const [formMessage, setFormMessage] = useState<string>('');
     const [formStatus, setFormStatus] = useState<'success' | 'error' | ''>('');
     const [loading, setLoading] = useState<boolean>(false);

     const MONTH_OPTIONS = Array.from({ length: 12 }, (_, i) => {
          const date = new Date(Date.UTC(2025, i));
          const monthName = date.toLocaleString('en-US', { month: 'short' });
          return {
               value: `2025-${(i + 1).toString().padStart(2, '0')}`,
               label: monthName,
          };
     });

     const {
          control,
          register,
          handleSubmit,
          reset,
          formState: { errors },
     } = useForm({
          resolver: zodResolver(schema),
     });

     const onSubmit = async (data: z.infer<typeof schema>) => {
          setLoading(true);
          setFormMessage('');
          setFormStatus('');

          if (selectedDate) {
               data.departure_date = selectedDate.toISOString().split('T')[0];
          } else if (selectedMonth) {
               data.departure_date = selectedMonth;
          } else {
               data.departure_date = 'Anytime';
          }

          try {
               const res: any = await fetchData({
                    endpoint: 'quick-inquiry',
                    method: 'POST',
                    body: data
               });

               if (res?.statusCode === 200) {
                    setFormStatus('success');
                    reset();
                    setSelectedDate(null);
                    setSelectedMonth("")
                    setFormMessage(res.message);
               } else {
                    setFormMessage(res.message);
                    setFormStatus('error');
               }
          } catch (err) {
               setFormStatus('error');
               setFormMessage('An error occurred. Please try again.');
               console.log("error", err);
          } finally {
               setLoading(false);
          }
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
          <section className="holiday-assistance-section">
               <div className="container">
                    <div className="row">
                         <div className="col-lg-6">
                              <div className="title title-with-tabs">
                                   <div className="title-text">
                                        <h2>Plan Your Holidays With Our <br />
                                             <span> Assistance </span>
                                        </h2>
                                        <div className="title-underline">
                                             <Image src="/assets/images/min-title-underline.png"
                                                  alt="title-underline" width={234} height={9} unoptimized />
                                        </div>
                                   </div>
                              </div>
                              <div className="holiday-assistance-img">
                                   <Image layout="intrinsic" height={389} width={434} src="/assets/images/holidays-assistance.png" unoptimized alt="holiday-assistance-img" />
                              </div>
                         </div>
                         <div className="col-lg-6">
                              <div className="ha-box">
                                   <div className="ha-box-img">
                                        <Image src="/assets/images/ha-location-map.png" alt="location-map" unoptimized height={100} width={100} />
                                        <h4>Chalo Bag Bharo Nikal Pado</h4>
                                   </div>
                                   {formMessage && (
                                        <p style={{ color: formStatus === 'success' ? 'green' : 'red' }} className='mb-0 text-center fw-light'>
                                             {formMessage}
                                        </p>
                                   )}
                                   <div className="form-container">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                             <div className="row">
                                                  <div className="col-6">
                                                       <label htmlFor="to">To</label>
                                                       <div className="input-icon">
                                                            <Image src="/assets/images/location.png"
                                                                 alt="Destination Icon" className="icon" height={20} width={20} unoptimized />
                                                            <input {...register('to')} placeholder="To" />
                                                       </div>
                                                       {errors.to && typeof errors.to.message === 'string' && <p className="error">{errors.to.message}</p>}
                                                  </div>

                                                  <div className="col-6">
                                                       <label htmlFor="from">From</label>
                                                       <div className="input-icon">
                                                            <Image src="/assets/images/location.png"
                                                                 alt="Destination Icon" className="icon" height={20} width={20} unoptimized />
                                                            <input {...register('from')} placeholder="From" />
                                                       </div>
                                                       {errors.from && typeof errors.from.message === 'string' && <p className="error">{errors.from.message}</p>}
                                                  </div>
                                             </div>

                                             <div className="row">
                                                  <div className="col-12">
                                                       <label htmlFor="email">Email ID</label>
                                                       <div className="input-icon">
                                                            <Image src="/assets/images/mail.png"
                                                                 alt="Destination Icon" className="icon" height={20} width={20} unoptimized />
                                                            <input {...register('email')} placeholder="Enter Your Email" />
                                                       </div>
                                                       {errors.email && typeof errors.email.message === 'string' && <p className="error">{errors.email.message}</p>}
                                                  </div>
                                             </div>

                                             <div className="row">
                                                  <div className="col-12">
                                                       <label htmlFor="mobile">Phone Number</label>
                                                       <div className="input-icon">
                                                            <input {...register('mobile')} placeholder="Enter Your Phone Number" />
                                                            <Image src="/assets/images/call-reciver.png"
                                                                 alt="Destination Icon" className="icon" height={20} width={20} unoptimized />
                                                       </div>
                                                       {errors.mobile && typeof errors.mobile.message === 'string' && <p className="error">{errors.mobile.message}</p>}
                                                  </div>
                                             </div>

                                             <div className="row">
                                                  <label>Departure Date <span>(Choose any)</span></label>

                                                  {/* Fixed Date Selection */}
                                                  <div className="col-4">
                                                       <Controller
                                                            name="fixed"
                                                            control={control}
                                                            render={() => (
                                                                 <DatePicker
                                                                      className={selectedDate ? 'select selected' : 'select'}
                                                                      selected={selectedDate}
                                                                      onChange={(date) => {
                                                                           setSelectedDate(date);
                                                                           setSelectedMonth('');
                                                                      }}
                                                                      dateFormat="yyyy-MM-dd"
                                                                      placeholderText="Fixed"
                                                                 />
                                                            )}
                                                       />
                                                  </div>

                                                  {/* Flexible Date Selection */}
                                                  <div className="col-4">
                                                       <select
                                                            className={selectedMonth && selectedMonth !== "Anytime" ? 'select selected' : 'select'}
                                                            value={selectedMonth}
                                                            onChange={(e) => {
                                                                 setSelectedMonth(e.target.value);
                                                                 setSelectedDate(null);
                                                            }}
                                                       >
                                                            <option value="">Flexible</option>
                                                            {MONTH_OPTIONS.map(({ value, label }) => (
                                                                 <option key={value} value={value}>
                                                                      {label}
                                                                 </option>
                                                            ))}
                                                       </select>
                                                  </div>

                                                  {/* Anytime Selection */}
                                                  <div className="col-4">
                                                       <button
                                                            className={selectedMonth === 'Anytime' ? 'select selected' : 'select'}
                                                            type="button"
                                                            onClick={() => {
                                                                 setSelectedDate(null);
                                                                 setSelectedMonth('Anytime');
                                                            }}
                                                       >
                                                            Anytime
                                                       </button>
                                                  </div>
                                             </div>

                                             <button type="submit" className={`submit-btn mt-4 ${loading ? "opacity-50" : ""}`} disabled={loading}>
                                                  {loading ? 'Submitting...' : 'Submit'}
                                             </button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default HolidayAsistance;
