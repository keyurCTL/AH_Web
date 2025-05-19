import { fetchData } from "@/services/api"
import DestinationSection from "./DestinationSection";

export default async function happyTravelersSection() {

     const res: any = await fetchData({
          endpoint: `package/public`
     })

     console.log("packages", res?.data?.packages);

     await new Promise((resolve) => setTimeout(resolve, 1000));

     return (
          <DestinationSection packages={res?.data?.packages || []} />
     )
}
