"use client";

import InquiryModal from "@/components/common/inquiry-modal/InquiryModal";
import usePagination from "@/hooks/usePagination";
import { capitalizeText, formatIndianNumber, getImageForService, saveFile } from "@/lib/utils"
import { fetchData } from "@/services/api";
import { Package } from "@/types/package/package"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import React, { useState } from "react"
import { Accordion } from "react-bootstrap"

type ItineraryProps = {
    packageInfo: Package | null
}
type RouteParams = {
    basePackageName: string;
    packageName: string;
};

export default function Itinerary({ packageInfo }: ItineraryProps) {
    const {
        currentPage,
        visiblePages,
        hasNextPage,
        hasPrevPage,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        setCurrentPage,
    } = usePagination({ totalPages: packageInfo?.itinerary?.length || 0 });
    
    const [isDownloadLoading, setIsDownloadLoading] = useState(false)
    const { basePackageName, packageName } = useParams<RouteParams>()
    const decodedPackageName = decodeURIComponent(packageName)
    const [modalShow, setModalShow] = useState(false);
    const [packageDetails, setPackageDetails] = useState({
        packageName: "",
        budget: 0
    });

    const breadcrumbs = [
        { label: 'Home', link: '/', class: "" },
        { label: 'Gujarat Tour Packages', link: '/gujarat-tourism' },
        { label: `${capitalizeText(basePackageName?.replace(/-+/g, " "))} Tour Packages`, link: `/gujarat-tourism/${basePackageName}` },
        { label: `${decodedPackageName}`, link: `/gujarat-tourism/${basePackageName}/${decodedPackageName}`, class: "self-page" },
    ]

    const places = packageInfo?.overview?.places || [];
    const halfPlaces = Math.ceil(places.length / 2);

    const handlePackagePdf = async (id: string, name: string) => {
        try {
            setIsDownloadLoading(true)
            const response = await fetchData({ endpoint: `export-file/package-pdf/public/${id}`, responseType: "blob" })
            await saveFile(response, `${name}`, "pdf");
        } catch (error) {
            console.log("ERROR", error);
        } finally {
            setIsDownloadLoading(false)
        }
    }

    return (
        <>
            <div className="itinerary-section">
                <div className="container">
                    <div className="itinerary-header mb-4">
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
                    <div className="itinerary-page">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="itinerary-page-left">
                                    {/* Title Section */}
                                    {packageInfo?.package_name && (
                                        <div className="itinerary-title">
                                            <h3>{capitalizeText(packageInfo.package_name)}</h3>
                                            <div className="day-info">
                                                {packageInfo.basic_info?.night && (
                                                    <div className="info">{packageInfo.basic_info.night} Night</div>
                                                )}
                                                {packageInfo.basic_info?.days && (
                                                    <div className="info">{packageInfo.basic_info.days} Days</div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Description Section */}
                                    <div className="itinerary-content">
                                        {(packageInfo?.basic_info?.img?.file_secure_url || packageInfo?.basic_info?.about_description) && (
                                            <div className="description">
                                                {packageInfo.basic_info?.img?.file_secure_url && (
                                                    <div className="description-img">
                                                        <Image
                                                            src={packageInfo.basic_info.img.file_secure_url}
                                                            width={100}
                                                            height={300}
                                                            alt="itinerary description img"
                                                            layout="intrinsic"
                                                            unoptimized
                                                        />
                                                    </div>
                                                )}
                                                {packageInfo.basic_info?.about_description && (
                                                    <div className="description-content">
                                                        <h5>About Destination</h5>
                                                        <span>{capitalizeText(packageInfo.basic_info.about_description)}</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Accordion */}
                                        <div className="itineary-accordian">
                                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                                {/* Overview Tab */}
                                                {(places?.length || packageInfo?.overview?.days_overview?.length || packageInfo?.overview?.meals?.length || packageInfo?.overview?.accomodation?.length) && (
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>
                                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                                <span>Overview</span>
                                                            </div>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="overview-content">
                                                                {/* Places */}
                                                                {places?.length > 0 && (
                                                                    <div className="places">
                                                                        <div className="overview-title">
                                                                            <Image width={20} height={20} src="/assets/images/location-map.png" alt="location-map" />
                                                                            <span>Places</span>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-6">
                                                                                <ul className="overview-list">
                                                                                    {places.slice(0, halfPlaces).map((place, index) => (
                                                                                        <li key={index}>{capitalizeText(place)}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <ul className="overview-list">
                                                                                    {places.slice(halfPlaces).map((place, index) => (
                                                                                        <li key={index + halfPlaces}>{capitalizeText(place)}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Days Overview */}
                                                                {packageInfo?.overview?.days_overview?.length > 0 && (
                                                                    <div className="itinerary-container">
                                                                        {packageInfo.overview.days_overview.map((day, index) => (
                                                                            <div className="itinerary-item" key={index}>
                                                                                <div className="day">Day {index + 1}</div>
                                                                                <div className="content">
                                                                                    {day?.title && <div className="title">{capitalizeText(day.title)}</div>}
                                                                                    {day?.description && <p>{capitalizeText(day.description)}</p>}
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}

                                                                {/* Meals */}
                                                                {packageInfo?.overview?.meals?.length > 0 && (
                                                                    <div className="meals mb-2">
                                                                        <div className="overview-title">
                                                                            <img src="/assets/images/meal.png" alt="meals" />
                                                                            <span>Meals</span>
                                                                        </div>
                                                                        <ul className="overview-list">
                                                                            {packageInfo.overview.meals.map((meal, index) => (
                                                                                <li key={index}>{meal?.name} – <span>{meal?.value}</span></li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )}

                                                                {/* Accommodation */}
                                                                {packageInfo?.overview?.accomodation?.length > 0 && (
                                                                    <div className="accomodation">
                                                                        <div className="overview-title">
                                                                            <img src="/assets/images/meal.png" alt="meals" />
                                                                            <span>Accomodation</span>
                                                                        </div>
                                                                        <ul className="overview-list">
                                                                            {packageInfo.overview.accomodation.map((acc, index) => (
                                                                                <li key={index}>{capitalizeText(acc)}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                )}

                                                {/* Itinerary Tab */}
                                                {packageInfo?.itinerary?.length > 0 && (
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header>
                                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                                <span>Itinerary</span>
                                                            </div>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="itinerary-detail">
                                                                <ul className="nav nav-tabs" id="itineraryTabs" role="tablist">
                                                                    <div className="title">Days</div>
                                                                    <button
                                                                        disabled={!hasPrevPage}
                                                                        onClick={prevPage}
                                                                        className={`nav-link bg-gray-100 text-gray-700`}
                                                                        // id={`day${index + 1}-tab`}
                                                                        type="button"
                                                                        role="tab"
                                                                    >
                                                                        {"<"}
                                                                    </button>
                                                                    {visiblePages.map((page) => (
                                                                        <li className="nav-item" role="presentation" key={page}>
                                                                            <button
                                                                                className={`nav-link ${currentPage === (page) ? "active bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                                                                                // id={`day${index + 1}-tab`}
                                                                                onClick={() => setCurrentPage(page)}
                                                                                type="button"
                                                                                role="tab"
                                                                            >
                                                                                {page}
                                                                            </button>
                                                                        </li>
                                                                    ))}
                                                                    <button
                                                                        disabled={!hasNextPage}
                                                                        className={`nav-link bg-gray-100 text-gray-700`}
                                                                        // id={`day${index + 1}-tab`}
                                                                        onClick={nextPage}
                                                                        type="button"
                                                                        role="tab"
                                                                    >
                                                                        {">"}
                                                                    </button>
                                                                </ul>

                                                                <div className="tab-content mt-4">
                                                                    {packageInfo.itinerary.map((day, index) => (
                                                                        <div
                                                                            key={index}
                                                                            className={`tab-pane fade ${currentPage === (index + 1) ? "show active block" : "hidden"}`}
                                                                            id={`day${index + 1}`}
                                                                            role="tabpanel"
                                                                        >
                                                                            <div className="row">
                                                                                {day?.img?.file_secure_url && (
                                                                                    <div className="col-md-5">
                                                                                        <Image
                                                                                            src={day.img.file_secure_url}
                                                                                            width={200}
                                                                                            height={100}
                                                                                            className="img-fluid rounded"
                                                                                            alt={`Day ${index + 1} view`}
                                                                                            layout="intrinsic"
                                                                                            unoptimized
                                                                                        />
                                                                                    </div>
                                                                                )}
                                                                                <div className="col-md-7">
                                                                                    {day?.title && <h4 className="mb-3">{capitalizeText(day.title)}</h4>}
                                                                                    <ul className="list-unstyled">
                                                                                        {day?.activities?.map((activity, i) => (
                                                                                            <li key={i}>
                                                                                                <strong>{capitalizeText(activity.title)}</strong>
                                                                                                <p>{capitalizeText(activity.description)}</p>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                )}

                                                {/* Hotels Tab */}
                                                {packageInfo?.hotels?.length > 0 && (
                                                    <Accordion.Item eventKey="3">
                                                        <Accordion.Header>
                                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                                <span>Hotels</span>
                                                            </div>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="hotel-section-accordion">
                                                                <div className="note">Note: Our agents will provide you these or similar hotels depending on availability</div>
                                                                <div className="hotel-list">
                                                                    {packageInfo.hotels.map((hotel: any, index) => (
                                                                        <div key={index} className="hotel-item mb-4">
                                                                            <div className="row">
                                                                                {hotel.hotel_img?.file_secure_url && (
                                                                                    <div className="col-lg-6">
                                                                                        <div className="hotel-img">
                                                                                            <img src={hotel.hotel_img.file_secure_url} alt={hotel.hotel_name || 'Hotel'} />
                                                                                        </div>
                                                                                    </div>
                                                                                )}
                                                                                <div className="col-lg-6">
                                                                                    <div className="hotel-info">
                                                                                        <h5>{capitalizeText(hotel.hotel_name)}</h5>
                                                                                        <div className="d-flex align-items-center my-1">
                                                                                            {[...Array(5)].map((_, i) => (
                                                                                                <svg
                                                                                                    key={i}
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    fill={i < hotel.hotel_star ? "#facc15" : "none"}
                                                                                                    viewBox="0 0 24 24"
                                                                                                    stroke="#facc15"
                                                                                                    className="star-img"
                                                                                                >
                                                                                                    <path
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                        strokeWidth="1.5"
                                                                                                        d="M11.48 3.499l2.285 4.629 5.106.742-3.695 3.601.872 5.086-4.568-2.403-4.568 2.403.872-5.086-3.695-3.601 5.106-.742 2.285-4.629z"
                                                                                                    />
                                                                                                </svg>
                                                                                            ))}
                                                                                        </div>
                                                                                        <div className="location">
                                                                                            {capitalizeText(hotel.area)}, {capitalizeText(hotel.state)}
                                                                                        </div>
                                                                                        <div className="hotel-services">
                                                                                            {hotel.tags?.map((tag, i) => (
                                                                                                <span key={i}>{capitalizeText(tag)}</span>
                                                                                            ))}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                )}

                                                {/* Inclusions / Exclusions Tab */}
                                                {(packageInfo?.inclusions?.length || packageInfo?.exclusions?.length) && (
                                                    <Accordion.Item eventKey="4">
                                                        <Accordion.Header>
                                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                                <span>Inclusions / Exclusions</span>
                                                            </div>
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="inc-exc-section">
                                                                {packageInfo?.inclusions?.length > 0 && (
                                                                    <>
                                                                        <div className="title">Inclusions</div>
                                                                        <ul className="inc">
                                                                            {packageInfo.inclusions.map((inclusion, index) => (
                                                                                <li key={index}>{capitalizeText(inclusion)}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </>
                                                                )}
                                                                {packageInfo?.exclusions?.length > 0 && (
                                                                    <>
                                                                        <div className="title">Exclusions</div>
                                                                        <ul className="exc">
                                                                            {packageInfo.exclusions.map((exclusion, index) => (
                                                                                <li key={index}>{capitalizeText(exclusion)}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                )}
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Pricing and Services */}
                            <div className="col-lg-4">
                                <div className="itinerary-page-right">
                                    <div className="package-price-box">
                                        <div className="price">
                                            {packageInfo?.discounted_price > 0 ? (
                                                <div className="dis-price">
                                                    <div className="price-value-sm">₹{formatIndianNumber(packageInfo?.price)}/-</div>
                                                    <div className="ammont">
                                                        ₹{formatIndianNumber(packageInfo?.discounted_price)}<span>/-*</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="dis-price">
                                                    <div className="ammont">₹{formatIndianNumber(packageInfo?.price)}/-</div>
                                                </div>)
                                            }
                                            <div className="info">Starting price per adult</div>
                                        </div>
                                        {packageInfo?.services?.length > 0 && (
                                            <div className="services">
                                                <div className="card-services">
                                                    {packageInfo.services.map((service) => {
                                                        const imageSrc = getImageForService(service.name);
                                                        return (
                                                            <div className="card-service" key={service._id}>
                                                                <div className="service-icon">
                                                                    <Image src={imageSrc} width={30} height={30} layout="intrinsic" alt={service.name} />
                                                                </div>
                                                                <div className="service-name">{service.name}</div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <div className="act-btns">
                                                    <div className="iti-outline-btn">
                                                        <button
                                                            disabled={isDownloadLoading}
                                                            onClick={async () => {
                                                                if (!isDownloadLoading) {
                                                                    await handlePackagePdf(packageInfo?._id, packageInfo?.package_name);
                                                                }
                                                            }}
                                                            type="button"
                                                        >
                                                            {isDownloadLoading ? "Downloading..." : "Download"}
                                                        </button>
                                                    </div>
                                                    <div className="iti-btn">
                                                        <button type="button"
                                                            onClick={() => {
                                                                setPackageDetails({
                                                                    packageName: packageInfo?.package_name,
                                                                    budget: packageInfo?.price
                                                                }); // Set the name here
                                                                setModalShow(true); // Then show the modal
                                                            }}
                                                        >Inquiry Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="call-now">
                                            <button className="call-now-btn">
                                                <img src="/assets/images/call-reciver.png" alt="call" />
                                                <span>
                                                    <a href="tel:+919727000916">CALL US NOW</a>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InquiryModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                packageDetals={packageDetails}
                autoCloseOnSubmit={true}
            />
        </>
    )
}