import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "@/styles/allstyles.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/home-page/Navbar/Navbar";
// import BootstrapClient from "@/components/common/BootstrapClient";
import Footer from "@/components/home-page/Footer/Footer";
import BootstrapClient from '@/components/common/BootstrapClient';

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
      <body className={`${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
