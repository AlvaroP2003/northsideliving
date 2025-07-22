import { Hourglass } from "lucide-react"


export default function Listings() {
    return (
        <section className="h-[90vh] lg:h-[85vh]">

           <div className="relative flex items-center justify-center h-[250px] border-1">
                <h1>Find your perfect place to call home</h1>

                <div className="absolute bottom-0 flex ">
                    <button className="bg-[#C9B99F] py-2.5 px-5 ">To Rent</button>
                    <button>To Buy</button>
                </div>
           </div>
        </section>
    )
}