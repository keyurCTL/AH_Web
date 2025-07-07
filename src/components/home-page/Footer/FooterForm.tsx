"use client";

import { PHONE_REGEX } from "@/lib/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetchData } from "@/services/api";
import { useEffect, useState } from "react";
import Image from "next/image";

interface IFormInput {
     // full_name: string;
     email: string;
     // mobile: string;
}

const UserSchema = z.object({
     // full_name: z.string().min(5, { message: "Name must be 5 or more characters long" }),
     email: z.string().email({ message: "Invalid email address" }),
     // mobile: z.string().min(10, "Please enter a valid Phone number").regex(PHONE_REGEX),
});

const FooterForm = () => {
     const [formMessage, setFormMessage] = useState<string>('');
     const [formStatus, setFormStatus] = useState<'success' | 'error' | ''>('');
     const [loading, setLoading] = useState<boolean>(false);

     const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
     } = useForm<IFormInput>({
          resolver: zodResolver(UserSchema),
     });

     const onSubmit: SubmitHandler<IFormInput> = async (data) => {
          setLoading(true);
          try {
               const res: any = await fetchData({
                    endpoint: 'subscribe-newsletter',
                    method: 'POST',
                    body: data
               })
               if (res?.statusCode === 200) {
                    setFormStatus('success');
                    reset();
                    setFormMessage(res.message);
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
     }

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
          <div className="newsletter-form">
               {formMessage && (
                    <p style={{ color: formStatus === 'success' ? 'green' : 'red' }} className='fw-light blockquote-footer'>
                         {formMessage}
                    </p>
               )}
               <form id="mc-embedded-subscribe-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3">
                         {/* <div className="col-sm-6">
                              <input
                                   type="text"
                                   id="full_name"
                                   placeholder="Full Name*"
                                   {...register("full_name")}
                              />
                              {errors.full_name && <p className="error">{errors.full_name.message}</p>}
                         </div> */}
                         <div className="col-sm-6">
                              <input
                                   type="email"
                                   id="email"
                                   placeholder="Email Id*"
                                   {...register("email")}
                              />
                              {errors.email && <p className="error">{errors.email.message}</p>}
                         </div>
                         <div className="col-sm-6">
                              <button className={loading ? "opacity-50" : ""} type="submit" disabled={loading}>
                                   {loading ? 'Please wait...' : 'Subscribe'}
                              </button>
                         </div>
                    </div>
                    <div className="row">
                         {/* <div className="col-sm-6">
                              <input
                                   type="tel"
                                   id="mobile"
                                   placeholder="Contact*"
                                   {...register("mobile")}
                              />
                              {errors.mobile && <p className="error">{errors.mobile.message}</p>}
                         </div> */}
                    </div>
               </form>
          </div>
     );
};

export default FooterForm;
