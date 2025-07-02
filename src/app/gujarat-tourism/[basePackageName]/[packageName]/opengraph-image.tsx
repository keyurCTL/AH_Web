import { fetchData } from '@/services/api'
import { Package } from '@/types/package/package'
import { ImageResponse } from 'next/og'


// Image metadata
export const alt = 'Package Preview'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { packageName: string } }) {
    const { packageName } = params

    const packageRes: any = await fetchData({
        endpoint: `package/public/${packageName}`,
    })
    const packageInfo: Package = packageRes?.data

    const pkgImg = packageInfo?.basic_info?.img?.file_public_url
    const packageTitle = packageInfo?.package_name

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Background Image */}
                <img
                    src={pkgImg}
                    alt={`${packageTitle?.toLowerCase()} img`}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />

                {/* Dark Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                />

                {/* Title Overlay */}
                <h1
                    style={{
                        position: 'relative',
                        color: '#fff',
                        fontSize: 80,
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        padding: '0 60px',
                        textAlign: 'center',
                        textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
                    }}
                >
                    {packageTitle}
                </h1>
            </div>
        ),
        {
            ...size,
            // fonts: [
            //     {
            //         name: 'Inter',
            //         data: interSemiBold,
            //         style: 'normal',
            //         weight: 600,
            //     },
            // ],
        }
    )
}
