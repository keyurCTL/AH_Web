import CommitmentSection from "@/components/home-page/CommitmentSection/CommitmentSection";
import DealsSection from "@/components/home-page/Dealssection/DealsSection";
import DestinationSection from "@/components/home-page/Destinationsection/DestinationSection";
import ReligiousDestination from "@/components/home-page/Destinationsection/ReligiousDestination";
import HappyTravelersSection from "@/components/home-page/HappyTravelersSection/HappyTravelersSection";
import HeroSection from "@/components/home-page/Herosection/HeroSection";
import HolidayAsistance from "@/components/home-page/HolidayAssistance/HolidayAsistance";
import HotelSection from "@/components/home-page/Hotelsection/HotelSection";
import OurFamilySection from "@/components/home-page/OurFamilySection/OurFamilySection";
import ServiceSection from "@/components/home-page/ServiceSection/ServiceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alakh Holidays | Crafting Unforgettable Travel Experiences",
  description: "Discover the world with Alakh Holidays. Explore our exclusive travel packages, personalized itineraries, and exceptional customer service.",
  keywords: "travel agency, holiday packages, travel experiences, Alakh Holidays, travel deals",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <DealsSection />
      <DestinationSection />
      <ReligiousDestination />
      <HotelSection />
      <ServiceSection />
      <HappyTravelersSection />
      <HolidayAsistance />
      <OurFamilySection />
      <CommitmentSection />
    </>
  );
}
