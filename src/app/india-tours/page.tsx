import InnerHeaderWithStats from "@/components/common/inner-header/InnerHeaderWithStats";
import { fetchData } from "@/services/api";
import { PageProps } from "@/types/common";
import { Metadata } from "next";
import ToursSection from "./(components)/ToursSection";

export const metadata: Metadata = {
    description: "India tours meta description",
    keywords: "about us, Alakh Holidays, travel agency, company mission, travel experiences",
};

const page = async ({ searchParams }: PageProps) => {
    const { explore } = await searchParams

    const res: any = await fetchData({
        endpoint: `review/public`
    })

    const packagesRes: any = await fetchData({
        endpoint: `package/public?category=['india-tours']&package_starting_from=true&is_group=true${explore != undefined ? `&sub_category=${explore}` : ""}`
    })

    if ((res && (res?.statusCode != 200 && res?.statusCode != 201)) || (packagesRes && (packagesRes?.statusCode != 200 && packagesRes?.statusCode != 201))) {
        throw new Error("Server not responding")
    }

    const totalReviews = res?.data?.total_documents || 0;
    const avgRatting = res?.data?.avg_rating?.toFixed(1) || 0;

    const packages = packagesRes?.data?.packages
    const package_starting_from = packagesRes?.data?.package_starting_from || 0

    return (
        <>
            <InnerHeaderWithStats
                title="India"
                subtitle="Tours"
                breadcrumbs={[
                    { label: 'Home', link: '/', class: "" },
                    { label: 'India Tours', link: '/india-tours', class: "self-page" },
                ]}
                stats={[
                    {
                        icon: '/assets/images/wallet.png',
                        title: 'Packages Starting',
                        value: `₹${String(Math.round(Number(package_starting_from)))}/-`,
                    },
                    {
                        icon: '/assets/images/Reviews.png',
                        title: 'Rated',
                        value: `${avgRatting}/5`,
                        subtext: `(based on ${totalReviews} reviews)`,
                    }
                ]}
            />
            <ToursSection packages={packages} />
        </>
    )
}

export default page