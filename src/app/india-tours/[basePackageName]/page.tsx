import { PageProps } from '@/types/common'
import React from 'react'

const page = ({ params, searchParams }: PageProps) => {
    const { basePackageName } = params
    console.log("basePackageName", basePackageName);
    return (
        <div>page</div>
    )
}

export default page