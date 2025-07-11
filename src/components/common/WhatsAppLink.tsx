"use client";
import { useMemo, useEffect, useState } from "react";
import Image from "next/image";
import WhatsAppIcon from "../../../public/assets/images/whatsapp.png"; // adjust path as needed

const WhatsAppLink = ({ packageInfo }) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const message = useMemo(() => {
    return `Inquiry for ${packageInfo?.package_name}\nPlease share details.\n${currentUrl}`;
  }, [packageInfo?.package_name, currentUrl]);

  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      className="whatsapp-link"
      href={`https://wa.me/919106473904?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={WhatsAppIcon} alt="WhatsApp-icon" width={25} height={25} unoptimized />
      <span>WhatsApp</span>
    </a>
  );
};

export default WhatsAppLink;
