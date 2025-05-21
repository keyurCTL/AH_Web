import { fetchData } from "@/services/api"
import DestinationSection from "./DestinationSection";
import ReligiousDestination from "./ReligiousDestination";

export default async function destinationSection() {

     const res: any = await fetchData({
          endpoint: `package/public`
     })

     console.log("packages", res?.data?.packages);

     await new Promise((resolve) => setTimeout(resolve, 1000));

     return (
          <>
               <DestinationSection packages={res?.data?.packages || []} />
               <ReligiousDestination packages={res?.data?.packages || []} />
          </>
     )
}
