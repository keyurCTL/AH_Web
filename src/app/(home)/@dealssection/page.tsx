import { fetchData } from "@/services/api";
import DealsSection from "./DealsSection";

export default async function Deals() {
    const res: any = await fetchData({
        endpoint: `offer/public`,
    })

    const offers = res?.data?.offers || []
    // await new Promise((resolve) => setTimeout(resolve, 40000));

    return (
        offers?.length ? <DealsSection offers={offers} /> : null
    )
}