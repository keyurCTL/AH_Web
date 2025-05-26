"use client";

import InquiryModal from "@/components/common/inquiry-modal/InquiryModal";
import { capitalizeText } from "@/lib/utils"
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
    const { basePackageName, packageName } = useParams<RouteParams>()
    const decodedPackageName = decodeURIComponent(packageName)
    const [activeDay, setActiveDay] = useState(0);
    const [packageDetails, setPackageDetails] = useState({
        packageName: "",
        budget: 0
    });
    const [modalShow, setModalShow] = useState(false);

    const breadcrumbs = [
        { label: 'Home', link: '/', class: "" },
        { label: 'Gujarat Tour Packages', link: '/gujarat-tourism' },
        { label: `${capitalizeText(basePackageName?.replace(/-+/g, " "))} Tour Packages`, link: `/gujarat-tourism/${basePackageName}` },
        { label: `${decodedPackageName}`, link: `/gujarat-tourism/${basePackageName}/${decodedPackageName}`, class: "self-page" },
    ]

    const places = packageInfo?.overview?.places || [];
    const halfPlaces = Math.ceil(places.length / 2);

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
                                    <div className="itinerary-title">
                                        <h3>{capitalizeText(packageInfo?.package_name)}</h3>
                                        <div className="day-info">
                                            <div className="info">{packageInfo?.basic_info?.night} Night</div>
                                            <div className="info">{packageInfo?.basic_info?.days} Days</div>
                                        </div>
                                    </div>
                                    <div className="itinerary-content">
                                        <div className="description">
                                            <div className="description-img">
                                                <Image src={packageInfo?.basic_info?.img?.file_secure_url} width={100} height={300}
                                                    alt="itinerary description img" layout='intrinsic' unoptimized />
                                            </div>
                                            <div className="description-content">
                                                <h5>About Destination</h5>
                                                <span>{capitalizeText(packageInfo?.basic_info?.about_description)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="itineary-accordian">
                                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                        <div className="d-flex justify-content-between align-items-center w-100">
                                                            <span>Overview</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="overview-content">
                                                            <div className="places">
                                                                <div className="overview-title">
                                                                    <Image width={20} height={20} src="/assets/images/location-map.png"
                                                                        alt="location-map" />
                                                                    <span>Places</span>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <ul className="overview-list">
                                                                            {places?.slice(0, halfPlaces).map((place: string, index: number) => (
                                                                                <li key={index}>{capitalizeText(place)}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <ul className="overview-list">
                                                                            {places?.slice(halfPlaces).map((place: string, index: number) => (
                                                                                <li key={index + halfPlaces}>{capitalizeText(place)}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="itinerary-container">
                                                                {packageInfo?.overview?.days_overview?.map((day: any, index: number) => (
                                                                    <div className="itinerary-item" key={index}>
                                                                        <div className="day">Day {index + 1}</div>
                                                                        <div className="content">
                                                                            <div className="title">{capitalizeText(day?.title)}</div>
                                                                            <p>{capitalizeText(day?.description)}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="meals mb-2">
                                                                <div className="overview-title">
                                                                    <img src="/assets/images/meal.png"
                                                                        alt="meals" />
                                                                    <span>Meals</span>
                                                                </div>
                                                                <ul className="overview-list">
                                                                    {packageInfo?.overview?.meals?.map((meal: any, index: number) => (
                                                                        <li key={index}>{meal?.name} – <span>{meal?.value}</span></li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className="accomodation">
                                                                <div className="overview-title">
                                                                    <img src="/assets/images/meal.png"
                                                                        alt="meals" />
                                                                    <span>Accomodation</span>
                                                                </div>
                                                                <ul className="overview-list">
                                                                    {packageInfo?.overview?.accomodation?.map((accomodation: any, index: number) => (
                                                                        <li key={index}>{capitalizeText(accomodation)}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
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
                                                                {packageInfo?.itinerary.map((day, index) => (
                                                                    <li className="nav-item" role="presentation" key={index}>
                                                                        <button
                                                                            className={`nav-link ${activeDay === index ? "active bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                                                                            id={`day${index + 1}-tab`}
                                                                            type="button"
                                                                            role="tab"
                                                                            onClick={() => setActiveDay(index)}
                                                                        >
                                                                            {index + 1}
                                                                        </button>
                                                                    </li>
                                                                ))}
                                                            </ul>

                                                            <div className="tab-content mt-4">
                                                                {packageInfo?.itinerary.map((day, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className={`tab-pane fade ${activeDay === index ? "show active block" : "hidden"}`}
                                                                        id={`day${index + 1}`}
                                                                        role="tabpanel"
                                                                    >
                                                                        <div className="row">
                                                                            <div className="col-md-5">
                                                                                <Image
                                                                                    src={day.img?.file_secure_url}
                                                                                    width={200}
                                                                                    height={100}
                                                                                    className="img-fluid rounded"
                                                                                    alt={`Day ${index + 1} view`}
                                                                                    layout='intrinsic'
                                                                                    unoptimized
                                                                                />
                                                                            </div>
                                                                            <div className="col-md-7">
                                                                                <h4 className="mb-3">{capitalizeText(day.title)}</h4>
                                                                                <ul className="list-unstyled">
                                                                                    {day.activities.map((activity, i) => (
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
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>
                                                        <div className="d-flex justify-content-between align-items-center w-100">
                                                            <span>Hotels</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="hotel-section-accordion">
                                                            <div className="note">Note: Our agents will provide
                                                                you these or similar hotels depending on
                                                                availability</div>
                                                            <div className="hotel-list">
                                                                {packageInfo?.hotels?.map((hotel: any, index: number) => (
                                                                    <div key={index} className="hotel-item mb-4">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <div className="hotel-img">
                                                                                    <img src={hotel.hotel_img?.file_secure_url}
                                                                                        alt="Hotel 1" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="hotel-info">
                                                                                    <h5>{capitalizeText(hotel?.hotel_name)}</h5>
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
                                                                                    <div className="location"> {capitalizeText(hotel?.area)}, {capitalizeText(hotel.state)}</div>
                                                                                    <div className="hotel-services">
                                                                                        {hotel.tags.map((tag: string, i: number) => (
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
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>
                                                        <div className="d-flex justify-content-between align-items-center w-100">
                                                            <span>Inclusions / Exclusions</span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="inc-exc-section">
                                                            <div className="title">Inclusions</div>
                                                            <ul className="inc">
                                                                {packageInfo?.inclusions?.map((inclusion: any, index: number) => (
                                                                    <li key={index}>{capitalizeText(inclusion)}</li>
                                                                ))}
                                                            </ul>
                                                            <div className="title">Exclusions</div>
                                                            <ul className="exc">
                                                                {packageInfo?.exclusions?.map((exclusion: any, index: number) => (
                                                                    <li key={index}>{capitalizeText(exclusion)}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="itinerary-page-right">
                                    <div className="package-price-box">
                                        <div className="price">
                                            <div className="ammont">₹{packageInfo?.price}/-</div>
                                            <div className="info">Starting price per adult</div>
                                        </div>
                                        <div className="services">
                                            <div className="card-services">
                                                <div className="card-service">
                                                    <div className="service-icon">
                                                        <img src="/assets/images/car.png" alt="car" />
                                                    </div>
                                                    <div className="service-name">Pickup/Drop</div>
                                                </div>
                                                <div className="card-service">
                                                    <div className="service-icon">
                                                        <img src="/assets/images/hotel.png" alt="hotel" />
                                                    </div>
                                                    <div className="service-name">Hotels</div>
                                                </div>
                                                <div className="card-service">
                                                    <div className="service-icon">
                                                        <img src="/assets/images/meal.png" alt="meal" />
                                                    </div>
                                                    <div className="service-name">Meals</div>
                                                </div>
                                                <div className="card-service">
                                                    <div className="service-icon">
                                                        <img src="/assets/images/itinerary.png" alt="itinerary" />
                                                    </div>
                                                    <div className="service-name">Sightseeing</div>
                                                </div>
                                                <div className="card-service">
                                                    <div className="service-icon">
                                                        <img src="/assets/images/transport.png" alt="transport" />
                                                    </div>
                                                    <div className="service-name">Transport</div>
                                                </div>
                                                <div className="card-service">
                                                    <div className="service-icon">
                                                        <img src="/assets/images/guide.png" alt="tour managers" />
                                                    </div>
                                                    <div className="service-name">Guide</div>
                                                </div>
                                            </div>
                                            <div className="act-btns">
                                                <div className="iti-outline-btn">
                                                    <button
                                                        // onClick={async () => {
                                                        //     await handlePackagePdf(packageInfo?._id, packageInfo?.package_name)
                                                        // }}
                                                        type="button"
                                                    >
                                                        Download
                                                    </button>
                                                </div>
                                                <div className="iti-btn">
                                                    <button
                                                        onClick={() => {
                                                            setPackageDetails({
                                                                packageName: packageInfo?.package_name,
                                                                budget: packageInfo?.price
                                                            }); // Set the name here
                                                            setModalShow(true); // Then show the modal
                                                        }}
                                                        type="button"
                                                    >
                                                        <span>Enquire</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="call-now">
                                            <button className="call-now-btn">
                                                <img src="/assets/images/call-reciver.png" alt="call" />
                                                <span>CALL US NOW</span>
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