import InnerHeader from "@/components/common/inner-header/InnerHeader";
import AllOffers from "@/app/offers/AllOfffers/AllOffers";
import { Metadata } from "next";
import { fetchData } from "@/services/api";

export const metadata: Metadata = {
     title: "Offers | Alakh Holidays",
     description: "Explore exclusive offers and discounts on travel packages with Alakh Holidays. Grab the best deals now!",
     keywords: "travel offers, discounts, travel deals, Alakh Holidays, holiday packages",
};

export default async function Offers() {
     const breadcrumbs = [
          { label: 'Home', link: '/', class: "" },
          { label: 'Offers', link: '/offers', class: "self-page" },
     ];
     const imageProps = {
          src: "/assets/images/offers-right-bg.png",
          width: 350,
          height: 300,
     };

     const res: any = await fetchData({
          endpoint: `offer/public`
     })

     const offers = res?.data?.offers || []

     await new Promise((resolve) => setTimeout(resolve, 2000));

     return (
          <>
               <InnerHeader
                    breadcrumbs={breadcrumbs}
                    title="Offers"
                    subtitle="Grab Hot Deals of the Day"
                    imageProps={imageProps}
               />
               <AllOffers offers={offers} />
          </>
     );
}