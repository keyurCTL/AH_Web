import InnerHeaderWithStats from "@/components/common/inner-header/InnerHeaderWithStats";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import { fetchData } from "@/services/api";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Reviews",
     description: "Discover what our travelers say about their experiences with Alakh Holidays. Read reviews and testimonials from satisfied customers.",
     keywords: "travel reviews, customer testimonials, Alakh Holidays, travel experiences",
};

export default async function Reviews() {

     const res: any = await fetchData({
          endpoint: `review/public`
     })

     // console.log("res?.data?.reviews", res?.data?.reviews);
     // await new Promise((resolve) => setTimeout(resolve, 1000));

     const totalReviews = res?.data?.total_documents || 0;
     const avgRatting = res?.data?.avg_rating?.toFixed(1) || 0;

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
                         { icon: '/assets/images/thumbs-up.png', title: 'Reviews', value: `${totalReviews}` },
                         {
                              icon: '/assets/images/Reviews.png',
                              title: 'Rated',
                              value: `${avgRatting}/5`,
                              subtext: `(based on ${totalReviews} reviews)`,
                         }
                    ]}
               />
               <ReviewsSection reviews={res?.data?.reviews || []} />
          </>
     )
}