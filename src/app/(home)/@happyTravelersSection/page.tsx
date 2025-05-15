import { fetchData } from "@/services/api"
import "./happytravelerssection.css"
import HappyTravelersSection from "./HappyTravelersSection"

export default async function happyTravelersSection() {

    const res: any = await fetchData({
        endpoint: `review/public`
    })

    return (
        <HappyTravelersSection reviews={res?.data?.reviews || []} />
    )
}
