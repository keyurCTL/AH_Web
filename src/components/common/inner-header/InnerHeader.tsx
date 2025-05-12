// components/CommonHeader.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./innerheader.css"

// types for Breadcrumb
interface Breadcrumb {
     label: string;
     link?: string;
     class: string;
}

interface ImageProps {
     src: string;
     width: number;
     height: number;
}

// props for InnerHeader component
interface InnerHeaderProps {
     title: string;
     subtitle: string;
     breadcrumbs: Breadcrumb[];
     imageProps?: ImageProps;
}

const InnerHeader: React.FC<InnerHeaderProps> = ({ title, subtitle, breadcrumbs, imageProps }) => {
     return (
          <div className="inner-header-main">
               <div className="container">
                    <div className="inner-page-title">
                         <h1>{title}</h1>
                         <h2>{subtitle}</h2>
                         <div className="inner-breadcrumb">
                              {breadcrumbs.map((breadcrumb, index) => (
                                   <React.Fragment key={index}>
                                        {breadcrumb.link ? (
                                             <Link className={breadcrumb.class} href={breadcrumb.link}>{breadcrumb.label}</Link>
                                        ) : (
                                             <span className={breadcrumb.class}>{breadcrumb.label}</span>
                                        )}
                                        {index < breadcrumbs.length - 1 && (
                                             <Image src="/assets/images/blue-plane.png" alt="blue-plane" width={16} height={16} unoptimized />
                                        )}
                                   </React.Fragment>
                              ))}
                         </div>
                    </div>
               </div>
               <div className="bg-img">
                    {imageProps?.src ? (
                         <Image
                              src={imageProps.src}
                              alt="hero-left-bg"
                              width={imageProps.width}
                              height={imageProps.height}
                         />
                    ) : null}
               </div>
          </div>
     );
};

export default InnerHeader;
