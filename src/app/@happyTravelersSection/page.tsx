import { fetchData } from "@/services/api"
import "./happytravelerssection.css"
import HappyTravelersSection from "./HappyTravelersSection"

export default async function happyTravelersSection() {

    const res: any = await fetchData({
        endpoint: `review/public`
    })

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return (
        <HappyTravelersSection reviews={res?.data?.reviews || []} />
    )
}
