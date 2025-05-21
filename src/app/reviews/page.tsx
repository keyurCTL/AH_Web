import InnerHeaderWithStats from "@/components/common/inner-header/InnerHeaderWithStats";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import { fetchData } from "@/services/api";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Reviews | Alakh Holidays",
     description: "Discover what our travelers say about their experiences with Alakh Holidays. Read reviews and testimonials from satisfied customers.",
     keywords: "travel reviews, customer testimonials, Alakh Holidays, travel experiences",
};

export default async function Reviews() {

     const res: any = await fetchData({
          endpoint: `review/public`
     })

     // console.log("res?.data?.reviews", res?.data?.reviews);
     // await new Promise((resolve) => setTimeout(resolve, 1000));

     return (
          <>
               <InnerHeaderWithStats
                    title="Happy"
                    subtitle="Travelers"
                    breadcrumbs={[
                         { label: 'Home', link: '/', class: "" },
                         { label: 'Reviews', link: '/reviews', class: "self-page" },
                    ]}
                    stats={[
                         { icon: '/assets/images/thumbs-up.png', title: 'Reviews', value: '50' },
                         {
                              icon: '/assets/images/Reviews.png',
                              title: 'Rated',
                              value: '4.4/5',
                              subtext: '(based on 4676 reviews)',
                         }
                    ]}
               />
               <ReviewsSection reviews={res?.data?.reviews || []} />
          </>
     )
}