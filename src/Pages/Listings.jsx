import { Hourglass } from "lucide-react"
import { useState } from "react"


export default function Listings() {
    
    const [activeTab,setActiveTab] = useState('to-rent')

    return (
        <section className="h-[90vh] lg:h-[85vh]">

           <div className="relative flex items-center justify-center h-[300px] bg-[url('/Images/listings.jpg')] bg-cover bg-center">
                <div className="bg-black/50 absolute inset-0"></div>

                <h1 className="text-white text-3xl z-10">Find your perfect place to call home</h1>

                <div className="absolute bottom-0 flex">
                    <button 
                        onClick={() => {setActiveTab('to-rent')}} 
                        className={`cursor-pointer bg-[#C9B99F] py-3 px-20 rounded-t-xl ${activeTab === 'to-rent' ? 'text-white font-medium' : 'bg-white text-neutral-700 hover:text-[#C9B99F]'}`}
                        >To Rent</button>
                    <button 
                        onClick={() => {setActiveTab('to-buy')}} 
                        className={`cursor-pointer bg-[#C9B99F] py-3 px-20 rounded-t-xl ${activeTab === 'to-buy' ? 'text-white font-medium' : 'bg-white text-neutral-700 hover:text-[#C9B99F]'}`}
                        >To Buy</button>
                </div>
           </div>

           <div className="relative bg-[#C9B99F] h-[20vh] flex items-center justify-center">
                <div className="flex items-center justify-center h-[30%] gap-5">

                    <button className="h-full border-2 border-white w-[150px] text-white rounded-lg">Filters</button>
                    <input className="bg-white h-full w-[500px] px-10 rounded-lg placeholder:text-sm" placeholder="Search street, suburb or dream..."></input>
                    <button className="cursor-pointer bg-[#9c7b5c] h-full w-[150px] rounded-lg text-white">Search</button>

                </div>
           </div>
        </section>
    )
}