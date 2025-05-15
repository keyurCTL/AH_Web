"use client";

import Image from "next/image";
import { useState } from "react";
import { SingleValue } from "react-select";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false })

const ExploreBox = () => {
     type OptionType = { value: string; label: string };

     const [selectedDestination, setSelectedDestination] = useState<OptionType | null>(null);
     const [selectedDuration, setSelectedDuration] = useState<OptionType | null>(null);

     const destinationOptions: OptionType[] = [
          { value: "destination1", label: "Destination 1" },
          { value: "destination2", label: "Destination 2" },
     ];

     const durationOptions: OptionType[] = [
          { value: "3-days", label: "3 Days" },
          { value: "7-days", label: "7 Days" },
     ];

     const handleDestinationChange = (newValue: SingleValue<OptionType>) => {
          setSelectedDestination(newValue);
     };

     const handleDurationChange = (newValue: SingleValue<OptionType>) => {
          setSelectedDuration(newValue);
     };

     return (
          <div className="explore-box">
               <form className="dropdown-group">
                    <div className="dropdown">
                         <Image src="/assets/images/location-map.png" alt="Destination Icon" className="icon" width={20} height={20} unoptimized />
                         <Select
                              className="dropdown-select"
                              classNamePrefix="react-select"
                              options={destinationOptions}
                              placeholder="Type a Destination"
                              value={selectedDestination}
                              onChange={(newValue) => handleDestinationChange(newValue as SingleValue<OptionType>)}
                         />
                    </div>
                    <div className="dropdown">
                         <Image src="/assets/images/Time.png" alt="Duration Icon" className="icon" width={20} height={20} unoptimized />
                         <Select
                              className="dropdown-select"
                              classNamePrefix="react-select"
                              options={durationOptions}
                              placeholder="Select Duration"
                              value={selectedDuration}
                              onChange={(newValue) => handleDurationChange(newValue as SingleValue<OptionType>)}
                         />
                    </div>
                    <button className="explore-btn" type="submit">Explore</button>
               </form>
          </div>
     );
};

export default ExploreBox;
