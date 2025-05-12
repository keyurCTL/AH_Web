// components/CommonHeader.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./innerheader.css";

// types for Breadcrumb
interface Breadcrumb {
     label: string;
     link?: string;
     class: string;
}

// types for Stats
interface Stat {
     icon: string; // path to the icon image
     title: string;
     value: string;
     subtext?: string;
     className?: string;
}

// props for InnerHeader component
interface InnerHeaderProps {
     title: string;
     subtitle: string;
     breadcrumbs: Breadcrumb[];
     stats: Stat[];
}

const InnerHeaderWithStats: React.FC<InnerHeaderProps> = ({ title, subtitle, breadcrumbs, stats }) => {
     return (
          <div className="inner-header-main">
               <div className="container">
                    <div className='inner-header-with-stats'>
                         <div className="inner-page-title">
                              <h1>{title}</h1>
                              <h2>{subtitle}</h2>
                              <div className="inner-breadcrumb">
                                   {breadcrumbs.map((breadcrumb, index) => (
                                        <React.Fragment key={index}>
                                             {breadcrumb.link ? (
                                                  <Link className={breadcrumb.class} href={breadcrumb.link}>
                                                       {breadcrumb.label}
                                                  </Link>
                                             ) : (
                                                  <span className={breadcrumb.class}>{breadcrumb.label}</span>
                                             )}
                                             {index < breadcrumbs.length - 1 && (
                                                  <Image
                                                       src="/assets/images/blue-plane.png"
                                                       alt="blue-plane"
                                                       width={16}
                                                       height={16}
                                                       unoptimized
                                                  />
                                             )}
                                        </React.Fragment>
                                   ))}
                              </div>
                         </div>

                         <div className="inner-header-stats">
                              {stats.map((stat, index) => (
                                   <div className="stats" key={index}>
                                        <div className="stats-head">
                                             <div className="icon">
                                                  <Image src={stat.icon} alt={stat.title} width={24} height={24} />
                                             </div>
                                             <div className="title">{stat.title}</div>
                                        </div>
                                        <hr />
                                        <div className="stats-foot">
                                             <div className={stat.className || ''}>{stat.value}</div>
                                             {stat.subtext && <span>{stat.subtext}</span>}
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default InnerHeaderWithStats;
