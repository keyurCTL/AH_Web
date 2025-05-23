import { PageProps } from '@/types/common'
import React from 'react'
import Itinerary from './(components)/Itinerary'
import { fetchData } from '@/services/api'
import { Package } from '@/types/package/package'
import Link from 'next/link'
import Image from 'next/image'
import { capitalizeText } from '@/lib/utils'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetaData({ params: { basePackageName, packageName } }): Promise<Metadata> {
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