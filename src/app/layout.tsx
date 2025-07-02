import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./error-pages.css"
import "@/styles/allstyles.css";
import { Poppins, Just_Another_Hand } from "next/font/google";
import Navbar from "@/components/home-page/Navbar/Navbar";
// import BootstrapClient from "@/components/common/BootstrapClient";
import Footer from "@/components/home-page/Footer/Footer";
import BootstrapClient from '@/components/common/BootstrapClient';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // display: "swap",
});

export const JustAnotherHand = Just_Another_Hand({
  variable: "--font-just-another-hand",
  subsets: ["latin"],
  weight: '400'
  // display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Home - Alakh Holidays",
    template: "%s - Alakh Holidays"
  },
  description: "Discover what our travelers say about their experiences with Alakh Holidays. Read reviews and testimonials from satisfied customers.",
  keywords: "travel reviews, customer testimonials, Alakh Holidays, travel experiences",
  // openGraph: {
  //   title: 'Home',
  //   description: 'Discover what our travelers say about their experiences with Alakh Holidays',
  //   siteName: 'Alakh Holidays',
  //   url: 'https://ah-stage.vercel.app',
  //   locale: 'en_US',
  //   type: 'website',
  // },
};

export default function RootLayout({
  heroSection,
  dealssection,
  destinationSection,
  serviceSection,
  happyTravelersSection,
  holidayAssistance,
  ourFamilySection,
  commitmentSection,
  children,
}: Readonly<{
  heroSection: React.ReactNode,
  dealssection: React.ReactNode,
  destinationSection: React.ReactNode,
  serviceSection: React.ReactNode,
  happyTravelersSection: React.ReactNode,
  holidayAssistance: React.ReactNode,
  ourFamilySection: React.ReactNode,
  commitmentSection: React.ReactNode,
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${JustAnotherHand.variable}`}>
        <Navbar />
        {children}
        {heroSection}
        {dealssection}
        {destinationSection}
        {serviceSection}
        {happyTravelersSection}
        {holidayAssistance}
        {ourFamilySection}
        {commitmentSection}
        <Analytics />
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
