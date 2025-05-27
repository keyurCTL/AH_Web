import { PageProps } from '@/types/common'
import React from 'react'
import Itinerary from './(components)/Itinerary'
import { fetchData } from '@/services/api'
import { Package } from '@/types/package/package'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
    params: Promise<{ packageName: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { packageName } = await params
    const packageRes: any = await fetchData({
        endpoint: `package/public/${packageName}`
    })
    const packageInfo: Package = packageRes?.data

    return {
        title: packageInfo?.package_name,
        description: packageInfo?.basic_info?.about_description
    }
}


const page = async ({ params: { packageName }, searchParams }: PageProps) => {
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