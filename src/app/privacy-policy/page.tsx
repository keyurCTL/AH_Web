import { Metadata } from "next";
import PrivacyPolicySection from "@/components/privacy-policy/PrivacyPolicy";

export const metadata: Metadata = {
     title: "Privacy Policy",
     description: "Alakh Holidays Privacy Policy",
     keywords: "privacy policy, Alakh Holidays, data protection, user privacy",
};

export default function PrivacyPolicy() {
     return (
          <>
               <PrivacyPolicySection />
          </>
     );
}
