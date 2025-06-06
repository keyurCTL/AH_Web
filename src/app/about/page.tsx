import AboutCompany from "@/components/about/Aboutcompany/AboutCompany";
import CompanyStats from "@/components/about/Companystats/CompanyStats";
import OurFamilySection from "@/components/about/OurFamilySection/OurFamilySection";
import ServiceSection from "@/components/about/ServiceSection/ServiceSection";
import InnerHeader from "@/components/common/inner-header/InnerHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: "About us",
     description: "Learn more about Alakh Holidays, our mission, values, and the dedicated team behind your travel experiences.",
     keywords: "about us, Alakh Holidays, travel agency, company mission, travel experiences",
};

export default function About() {

     const breadcrumbs = [
          { label: 'Home', link: '/', class: "" },
          { label: 'About Us', link: '/about', class: "self-page" },
     ];
     const imageProps = {
          src: "/assets/images/hero-left-bg.png",
          width: 400,
          height: 150,
     };

     return (
          <>
               <InnerHeader title="About" subtitle="us" breadcrumbs={breadcrumbs} imageProps={imageProps} />
               <AboutCompany />
               <CompanyStats />
               <ServiceSection />
               <OurFamilySection />
          </>
     )
}