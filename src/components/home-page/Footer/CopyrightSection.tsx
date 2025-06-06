"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const CopyrightSection = () => {
    const [year, setYear] = useState("")

    useEffect(() => {
        if(window){
            const date = new Date()
            const year = date.getFullYear()
            setYear(year.toString())
        }
    },[])
    return (
        <div className="copy-right">
            <div>Copyright By © <Link href="/" target="_self">Alakh Holidays</Link> - {year}</div>
            <div>
                Developed By <Link href="https://challengetechnolabs.com/" target="_blank">Challenge Technolabs</Link> - 2025
            </div>
        </div>
    )
}

export default CopyrightSection