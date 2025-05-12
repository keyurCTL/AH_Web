import InnerHeader from "@/components/common/inner-header/InnerHeader";
import ContactSection from "@/components/contact/Contactsection/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Contact Us | Alakh Holidays",
     description: "Get in touch with Alakh Holidays for all your travel inquiries. Contact us for personalized travel solutions.",
     keywords: "contact us, travel inquiries, Alakh Holidays, travel solutions, customer support",
};

export default function Contact() {

     const breadcrumbs = [
          { label: 'Home', link: '/', class: "" },
          { label: 'Contact Us', link: '/contact', class: "self-page" },
     ];

     const imageProps = {
          src: "/assets/images/hero-left-bg.png",
          width: 400,
          height: 150,
     };

     return (
          <>
               <InnerHeader
                    breadcrumbs={breadcrumbs}
                    title="Contact"
                    subtitle="Us"
                    imageProps={imageProps}
               />
               <ContactSection />
          </>
     )
}