"use client";

// import "./holidayasistance.css";
import Image from 'next/image';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from "react-hook-form";

const schema = z.object({
     to: z.string().min(1, 'Destination is required'),
     from: z.string().min(1, 'Source is required'),
     email: z.string().email('Invalid email address'),
     phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
     departureDate: z.string().optional(),
});

const HolidayAsistance = () => {
     const [selectedDate, setSelectedDate] = useState<Date | null>(null);
     const [selectedMonth, setSelectedMonth] = useState<string>('');

     const MONTH_OPTIONS = Array.from({ length: 12 }, (_, i) => {
          const date = new Date(Date.UTC(2025, i));
          const monthName = date.toLocaleString('en-US', { month: 'short' }); // force locale
          return {
               value: `2025-${(i + 1).toString().padStart(2, '0')}`,
               label: monthName,
          };
     });

     const {
          control,
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({
          resolver: zodResolver(schema),
     });

     const onSubmit = (data: z.infer<typeof schema>) => {
          if (selectedDate) {
               data.departureDate = selectedDate.toISOString().split('T')[0];
          } else if (selectedMonth) {
               data.departureDate = selectedMonth;
          } else {
               data.departureDate = 'Anytime';
          }
          console.log('Form Data:', data);
     };

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
                                                       <label htmlFor="phone">Phone Number</label>
                                                       <div className="input-icon">
                                                            <input {...register('phone')} placeholder="Enter Your Phone Number" />
                                                            <Image src="/assets/images/call-reciver.png"
                                                                 alt="Destination Icon" className="icon" height={20} width={20} unoptimized />
                                                       </div>
                                                       {errors.phone && typeof errors.phone.message === 'string' && <p className="error">{errors.phone.message}</p>}
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
                                                                      onChange={(date: Date) => {
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

                                             <button type="submit" className="submit-btn mt-4">Submit</button>
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
