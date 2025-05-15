"use client"

import Image from "next/image";
import logo from '../../../../public/assets/images/logo/ah-logo.png';
import './navbar.css';
import GujratTours from "./navbarmenus/GujratTours";
import IndiaTours from "./navbarmenus/IndiaTours";
import InternationalTours from "./navbarmenus/InternationalTours";
import HoneymoonTours from "./navbarmenus/HoneymoonTours";
import MobileMenu from "./navbarmenus/MobileMenu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchData } from "@/services/api";
import { Package } from "@/types/package/package";

type NavbarInfoType = {
  package_starting_from: number,
  packages: Package[]
}

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [navbarinfo, setNavbarInfo] = useState<NavbarInfoType | null>(null)
  console.log("navbarinfo", navbarinfo);

  // Sticky Navbar Logic
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsSticky(scroll > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res: any = await fetchData({ endpoint: "package/public" })
        if (res.statusCode == 200) {
          setNavbarInfo(res?.data)
        }

      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    })()
  }, [])

  return (
    <>
      <div className={`nav-main ${isSticky ? 'sticky' : ''}`}>
        <div className="top-bar">
          <div className="logo">
            <Link href="/">
              <Image
                src={logo}
                alt="Alakh Holidays Logo"
                width={176}
                unoptimized
              />
            </Link>
          </div>
          <div className="top-contact">
            <div className="top-contact-content">
              <Image
                src="/assets/images/call.png"
                alt="call"
                width={20}
                height={20}
                unoptimized
              />
              <a href="tel:+919727000916">+91 97270 00916</a>
            </div>
            <div className="top-contact-content">
              <Image
                src="/assets/images/offers.png"
                alt="offers"
                width={20}
                height={20}
                unoptimized
              />
              <Link href="/offers">Offers</Link>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {navbarinfo != null && navbarinfo?.packages?.filter(item => item.category.includes("gujarat-tourism"))?.length ? <GujratTours packages={navbarinfo != null && navbarinfo?.packages?.filter(item => item.category.includes("gujarat-tourism"))?.length ? navbarinfo?.packages?.filter(item => item.category.includes("gujarat-tourism")) : []} /> : null}
                {navbarinfo != null && navbarinfo?.packages?.filter(item => item.category.includes("india-tours"))?.length ? <IndiaTours packages={navbarinfo != null && navbarinfo?.packages?.filter(item => item.category.includes("india-tours"))?.length ? navbarinfo?.packages?.filter(item => item.category.includes("india-tours")) : []} /> : null}
                {navbarinfo != null && navbarinfo?.packages?.filter(item => item.category.includes("international-tour"))?.length ? <InternationalTours packages={navbarinfo != null && navbarinfo?.packages?.filter(item => item.category.includes("international-tour"))?.length ? navbarinfo?.packages?.filter(item => item.category.includes("international-tour")) : []} /> : null}
                {navbarinfo != null && navbarinfo?.packages?.filter(item => item.category.includes("honeymoon-tours"))?.length ? <HoneymoonTours packages={navbarinfo != null && navbarinfo?.packages?.filter(item => item.category.includes("honeymoon-tours"))?.length ? navbarinfo?.packages?.filter(item => item.category.includes("honeymoon-tours")) : []} /> : null}
                {navbarinfo != null && navbarinfo?.packages?.filter(item => item.category.includes("religious-tours"))?.length ?
                  <li className="nav-item">
                    <Link className="nav-link" href="#">Religious Tours</Link>
                  </li>
                  : null}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="mobile-menu">
        <MobileMenu />
      </div>
    </>
  );
};

export default Navbar;
