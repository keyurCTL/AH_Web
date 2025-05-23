import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "@/styles/allstyles.css";
import { Poppins, Just_Another_Hand } from "next/font/google";
import Navbar from "@/components/home-page/Navbar/Navbar";
// import BootstrapClient from "@/components/common/BootstrapClient";
import Footer from "@/components/home-page/Footer/Footer";
import BootstrapClient from '@/components/common/BootstrapClient';
import Head from 'next/head';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // display: "swap",
});

const JustAnotherHand = Just_Another_Hand({
  variable: "--font-just-another-hand",
  subsets: ["latin"],
  weight: '400'
  // display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head>
        <title>Home | Alakh Holidays</title>
        <meta name="description" content="Learn more about Alakh Holidays, our mission, values, and the dedicated team behind your travel experiences." />
        <meta name="keywords" content="Alakh Holidays, travel agency, best tour planner, best travelling agency" />
      </Head>
      <body className={`${poppins.variable} ${JustAnotherHand.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
