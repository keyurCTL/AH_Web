export default function HomeLayout({
    children,
    heroSection,
    happyTravelersSection,
    destinationSection,
    holidayAssistance
}: Readonly<{
    children: React.ReactNode;
    heroSection: React.ReactNode
    happyTravelersSection: React.ReactNode
    destinationSection: React.ReactNode
    holidayAssistance: React.ReactNode
}>) {
    return (
        <>
            {heroSection}
            {happyTravelersSection}
            {destinationSection}
            {holidayAssistance}
        </>
    );
}