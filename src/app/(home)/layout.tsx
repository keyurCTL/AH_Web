
export default function HomeLayout({
    children,
    heroSection,
    happyTravelersSection,
    destinationSection
}: Readonly<{
    children: React.ReactNode;
    heroSection: React.ReactNode
    happyTravelersSection: React.ReactNode
    destinationSection: React.ReactNode
}>) {
    return (
        <>
            {heroSection}
            {happyTravelersSection}
            {destinationSection}
        </>
    );
}