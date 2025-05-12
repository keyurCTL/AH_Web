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

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

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
                <GujratTours />
                <IndiaTours />
                <InternationalTours />
                <HoneymoonTours />
                <li className="nav-item">
                  <Link className="nav-link" href="#">Religious Tours</Link>
                </li>
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
