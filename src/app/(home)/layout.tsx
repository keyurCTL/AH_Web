export default function HomeLayout({
    heroSection,
    dealssection,
    happyTravelersSection,
    hotelSection,
    serviceSection,
    ourFamilySection,
    commitmentSection,
    destinationSection,
    holidayAssistance
}: Readonly<{
    children: React.ReactNode;
    heroSection: React.ReactNode,
    dealssection: React.ReactNode,
    happyTravelersSection: React.ReactNode,
    hotelSection: React.ReactNode,
    serviceSection: React.ReactNode,
    ourFamilySection: React.ReactNode,
    commitmentSection: React.ReactNode,
    destinationSection: React.ReactNode
    holidayAssistance: React.ReactNode
}>) {
    return (
        <>
            {heroSection}
            {dealssection}
            {destinationSection}
            {serviceSection}
            {happyTravelersSection}
            {/* {hotelSection} */}
            {holidayAssistance}
            {ourFamilySection}
            {commitmentSection}
        </>
    );
}