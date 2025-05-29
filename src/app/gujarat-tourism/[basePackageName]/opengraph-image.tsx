import { ImageResponse } from 'next/og';
import { fetchData } from '@/services/api';
import { Package } from '@/types/package/package';

export const alt = 'Explore Gujarat Tours';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const poppinsFont = fetch(
  new URL('../../../../public/fonts/Poppins-Regular.woff2', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function Image({ params: { basePackageName } }: { params: { basePackageName: string } }) {
  const fontData = await poppinsFont;

  const packagesRes: any = await fetchData({
    endpoint: `package/public?base_package=${basePackageName.replace(/-+/g, ' ')}&package_starting_from=true`,
  });

  const packages: Package[] = packagesRes?.data?.packages?.slice(0, 3) || [];

  const imageUrls = packages.map(pkg => pkg?.navbar?.img).filter(Boolean).slice(0, 3);

  // Fallback
  if (imageUrls.length === 0) {
    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: 'Poppins',
            fontSize: 40,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#eee',
            color: '#333',
          }}
        >
          No images available
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'Poppins',
            data: fontData,
            style: 'normal',
            weight: 400,
          },
        ],
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          fontFamily: 'Poppins',
        }}
      >
        {/* Background Images in 3 columns */}
        {imageUrls.map((url, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              backgroundImage: `url(${url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}
          />
        ))}

        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        />

        {/* Center Text */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            fontSize: 64,
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
          }}
        >
          Explore Gujarat Tours
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Poppins',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
