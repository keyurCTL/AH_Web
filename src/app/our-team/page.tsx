import InnerHeader from "@/components/common/inner-header/InnerHeader";
import OurTeamSection from "@/components/our-team/OurTeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Our Team | Alakh Holidays",
     description: "Meet the dedicated team behind Alakh Holidays, committed to making your travel dreams a reality.",
     keywords: "travel team, Alakh Holidays team, travel experts, meet our team",
};

export default function ourTeam() {
     const breadcrumbs = [
          { label: 'Home', link: '/', class: "" },
          { label: 'Our Team', link: '/our-team', class: "self-page" },
     ];

     const imageProps = {
          src: "/assets/images/our-team-right-img.png",
          width: 300,
          height: 230,
     };

     return (
          <>
               <InnerHeader
                    breadcrumbs={breadcrumbs}
                    title="Our"
                    subtitle="Team"
                    imageProps={imageProps}
               />
               <OurTeamSection />
          </>
     )
}