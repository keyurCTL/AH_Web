export default function HomeLayout({
    children,
    heroSection,
    happyTravelersSection
}: Readonly<{
    children: React.ReactNode;
    heroSection: React.ReactNode
    happyTravelersSection: React.ReactNode
}>) {
    return (
        <>
            {heroSection}
            {happyTravelersSection}
        </>
    );
}