export default function HomeLayout({
    children,
    happyTravelersSection
}: Readonly<{
    children: React.ReactNode;
    happyTravelersSection: React.ReactNode
}>) {
    return (
        <>
            {happyTravelersSection}
        </>
    );
}