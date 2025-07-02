export default function HomeLayout({
    heroSection,
    dealssection,
    happyTravelersSection,
    serviceSection,
    ourFamilySection,
    commitmentSection,
    destinationSection,
    holidayAssistance,
    children
}: Readonly<{
    heroSection: React.ReactNode,
    dealssection: React.ReactNode,
    happyTravelersSection: React.ReactNode,
    hotelSection: React.ReactNode,
    serviceSection: React.ReactNode,
    ourFamilySection: React.ReactNode,
    commitmentSection: React.ReactNode,
    destinationSection: React.ReactNode
    holidayAssistance: React.ReactNode,
    children: React.ReactNode;
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
            {children}
        </>
    );
}