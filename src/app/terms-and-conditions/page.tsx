import TermsAndConditionsSection from "@/components/privacy-policy/TermsAndConditionsSection"
import { Metadata } from "next"

export const metadata: Metadata = {
     title: "Terms and Conditions",
     description: "Alakh Holidays Terms and Conditions",
     keywords: "terms and conditions, Alakh Holidays, user agreement, travel policies",
}

export default function TermsAndConditions() {
     return (
          <>
               <TermsAndConditionsSection />
          </>
     )
}
