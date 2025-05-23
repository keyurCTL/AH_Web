import InnerHeaderWithStats from '@/components/common/inner-header/InnerHeaderWithStats';
import { capitalizeText } from '@/lib/utils';
import { fetchData } from '@/services/api';
import { PageProps } from '@/types/common'
import React from 'react'
import PackagesSection from './(components)/PackagesSection';
import { notFound } from 'next/navigation';

const page = async ({ params, searchParams }: PageProps) => {
    const { basePackageName } = await params
    const { explore } = await searchParams
    const res: any = await fetchData({
        endpoint: `review/public`
    })

    const packagesRes: any = await fetchData({
        endpoint: `package/public?base_package=${basePackageName.replace(/-+/g, " ")}&package_starting_from=true&${explore != undefined ? `&duration=${explore}&budget=${explore}` : ""}`
    })

    if ((res && (res?.statusCode != 200 && res?.statusCode != 201)) || (packagesRes && (packagesRes?.statusCode != 200 && packagesRes?.statusCode != 201))) {
        throw new Error("Server not responding")
    }

    if (packagesRes && packagesRes?.statusCode == 200 && packagesRes?.data?.packages?.length == 0) {
        notFound()
    }

    const totalReviews = res?.data?.total_documents || 0;
    const avgRatting = res?.data?.avg_rating?.toFixed(1) || 0;

    const packages = packagesRes?.data?.packages
    const package_starting_from = packagesRes?.data?.package_starting_from || 0

    // console.log("packages", packages);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return (
        <>
            <InnerHeaderWithStats
                title={`${capitalizeText(basePackageName.replace(/-+/g, " "))}`}
                subtitle="Tour Packages"
                breadcrumbs={[
                    { label: 'Home', link: '/', class: "" },
                    { label: 'Gujarat Tourism', link: '/gujarat-tourism', class: "" },
                    { label: `${capitalizeText(basePackageName.replace(/-+/g, " "))} Tour Packages`, link: `/gujarat-tourism/${basePackageName}`, class: "self-page" },
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
            <PackagesSection
                packages={packages}
            />
        </>
    )
}

export default page