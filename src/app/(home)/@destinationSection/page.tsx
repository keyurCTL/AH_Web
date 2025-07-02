import { fetchData } from "@/services/api"
import DestinationSection from "./DestinationSection";
import ReligiousDestination from "./ReligiousDestination";

export default async function destinationSection() {

     const res: any = await fetchData({
          endpoint: `package/public`
     })

     return (
          <>
               <DestinationSection packages={res?.data?.packages || []} />
               <ReligiousDestination packages={res?.data?.packages || []} />
          </>
     )
}
