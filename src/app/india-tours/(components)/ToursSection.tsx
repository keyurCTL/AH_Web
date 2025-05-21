"use client";

import { capitalizeText, firstLetterCapital, getCategoriesNSubCategories } from '@/lib/utils'
import { Package } from '@/types/package/package'
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Alert } from 'react-bootstrap';

type ToursSectionProps = {
    packages: {
        [base_package: string]: Package[];
    };
}

const ToursSection = ({ packages }: ToursSectionProps) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { push, replace } = useRouter();
    const [selectedValue, setSelectedValue] = useState("")
    const params = new URLSearchParams(searchParams);
    const subCategory = `${capitalizeText(params.get("explore")?.replace(/-+/g, " "))}` || ""

    const totalBasePackages = packages != null ? Object.keys(packages)?.length : 0
    const subCategoryOptions: [] = getCategoriesNSubCategories("india-tours")

    const handleExploreDDChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedValue(value)
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set("explore", value);
        } else {
            params.delete("explore");
        }

        replace(`${pathname}?${params.toString()}`);
    };

    const handleReset = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("explore");
        replace(`${pathname}?${params.toString()}`);
    };

    useEffect(() => {
        const exploreValue = params.get('explore') || '';
        setSelectedValue(exploreValue);
    }, [searchParams]);


    return (
        <section className="tours-section">
            <div className="container">
                <div className="tours-content">
                    <div className="title">
                        <h4>TOTAL TOURS : <span>({totalBasePackages})</span></h4>
                    </div>
                    <div className="tour-filters">
                        <div className="filter">
                            <select name="explore-tour" id="explore-tour" value={selectedValue} onChange={handleExploreDDChange}>
                                <option value="">All</option>
                                {subCategoryOptions?.map((item: string, index) => (
                                    <option key={index} value={item}>{capitalizeText(item?.replace(/-+/g, " "))}</option>
                                ))}
                            </select>
                        </div>
                        {selectedValue != "" ?
                            <div className="reset-filter">
                                <button type="reset" onClick={handleReset}>Reset All</button>
                            </div> : null}
                    </div>
                    <div className="tour-cards">
                        <div className="row">
                            {Object.keys(packages)?.length ? Object.keys(packages)?.sort()?.map((item, index) => {
                                const packageImg = packages[item][0]?.navbar?.img?.file_public_url || null
                                const totalPackages = packages[item]?.length || 0

                                return (
                                    <div key={index} className="col-lg-4">
                                        <div className="tour-card">
                                            <div className="tour-image">
                                                <img src={packageImg} alt={`${item} package image`} />
                                            </div>
                                            <div className="tour-card-footer">
                                                <div className="tour-card-details">
                                                    <div className="tour-name">{firstLetterCapital(item)}</div>
                                                    <div className="total-packages">{`${totalPackages} Package${totalPackages > 1 ? "s" : ""}`}</div>
                                                </div>
                                                <div className="view-more-btn">
                                                    <Link href={`${pathname}/${item?.toLowerCase()?.replace(/\s+/g, "-")}`}><span>View Packages</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                            }) :
                                <div className='col-lg-12'>
                                    <Alert variant={"warning"} >
                                        Currently there are no tours available for <b>"{subCategory}"</b>
                                    </Alert>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ToursSection