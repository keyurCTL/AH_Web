"use client";

import { PHONE_REGEX } from "@/utils/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IFormInput {
     fullname: string;
     email: string;
     phone: string;
}

const UserSchema = z.object({
     fullname: z.string().min(5, { message: "Name must be 5 or more characters long" }),
     email: z.string().email({ message: "Invalid email address" }),
     phone: z.string().min(10, "Please enter a valid Phone number").regex(PHONE_REGEX),
});

const FooterForm = () => {
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm<IFormInput>({
          resolver: zodResolver(UserSchema),
     });

     const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

     return (
          <div className="newsletter-form">
               <form id="mc-embedded-subscribe-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3">
                         <div className="col-sm-6">
                              <input
                                   type="text"
                                   id="fullname"
                                   placeholder="Full Name*"
                                   {...register("fullname")}
                              />
                              {errors.fullname && <p className="error">{errors.fullname.message}</p>}
                         </div>
                         <div className="col-sm-6">
                              <input
                                   type="email"
                                   id="email"
                                   placeholder="Email Id*"
                                   {...register("email")}
                              />
                              {errors.email && <p className="error">{errors.email.message}</p>}
                         </div>
                    </div>
                    <div className="row">
                         <div className="col-sm-6">
                              <input
                                   type="tel"
                                   id="phone"
                                   placeholder="+91*"
                                   {...register("phone")}
                              />
                              {errors.phone && <p className="error">{errors.phone.message}</p>}
                         </div>
                         <div className="col-sm-6">
                              <button type="submit">Subscribe</button>
                         </div>
                    </div>
               </form>
          </div>
     );
};

export default FooterForm;
