import { Hourglass } from "lucide-react"


export default function Listings() {
    return (
        <section className="flex flex-col justify-center items-center gap-2.5 h-[90vh] lg:h-[85vh]">
            <Hourglass size={100} strokeWidth={1} className="text-gray-400"/>
            <h1 className="text-lg  text-gray-400">FEATURE COMING SOON</h1>
        </section>
    )
}