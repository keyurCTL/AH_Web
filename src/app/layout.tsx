import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "@/styles/allstyles.css";
import { Poppins } from "next/font/google";
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
      <body className={`${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
