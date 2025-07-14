import { PageProps } from '@/types/common'
import React from 'react'
import Itinerary from './(components)/Itinerary'
import { fetchData } from '@/services/api'
import { Package } from '@/types/package/package'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
    params: Promise<{ packageName: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { packageName } = await params;

    const packageRes: any = await fetchData({
        endpoint: `package/public/${packageName}`,
    });

    const packageInfo: Package = packageRes?.data;    

    return {
        // This shows in the browser tab (document.title)
        title: `${packageInfo?.package_name}`,
        description: packageInfo?.seo?.meta_description,
        other: {
            'title': packageInfo?.seo?.meta_title,
        },
        keywords: packageInfo?.seo?.meta_keywords?.toString(),
    };
}

const page = async ({ params }: PageProps) => {
    const { packageName } = await params
    const packageRes: any = await fetchData({
        endpoint: `package/public/${packageName}`
    })    

    if ((packageRes && (packageRes?.statusCode != 200 && packageRes?.statusCode != 201))) {
        throw new Error("Server not responding")
    }
    if (packageRes && packageRes?.statusCode == 200 && packageRes?.data == null) {
        notFound()
    }

    const packageInfo: Package = packageRes?.data || null

    return (
        <Itinerary packageInfo={packageInfo} />
    )
}

export default page