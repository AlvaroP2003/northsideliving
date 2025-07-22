import { Plus, X } from "lucide-react"
import { useState } from "react"


export default function Listings() {
    
    const [activeTab,setActiveTab] = useState('to-rent')
    const [showFilters,setShowFilters] = useState(false)

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
                <div className="relative flex items-center justify-center h-[30%] gap-5">

                    <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className="h-full border-2 border-white w-[150px] text-white rounded-lg flex justify-between items-center px-5">
                        <p>Filters</p>
                        {showFilters ? <X size={15} strokeWidth={3}/> : <Plus size={15} strokeWidth={3}/>}
                    </button>
                    <input className="bg-white h-full w-[500px] px-5 rounded-lg placeholder:text-sm" placeholder="Search street, suburb or dream..."></input>
                    <button className="cursor-pointer bg-[#9c7b5c] h-full w-[150px] rounded-lg text-white">Search</button>

                    {showFilters &&
                    <div className="absolute top-15 w-full bg-white rounded-lg shadow-lg border-1 border-neutral-200">
                        <div className="grid grid-cols-3 p-5">
                            <select></select>
                            <select></select>
                            <select></select>
                            <select></select>
                            <select></select>
                            <select></select>
                        </div>

                        <div className="flex">
                            <div className="flex flex-col flex-1 p-5 gap-5">
                                <h3 className="font-bold text-sm">Features</h3>
                                <div className="grid grid-cols-2 gap-5">
                                    <span className="flex gap-2.5">
                                        <input className="border-1" type="checkbox" />
                                        <label className="text-sm">Pet Friendly</label>
                                    </span>

                                     <span className="flex gap-2.5">
                                        <input className="border-1" type="checkbox" />
                                        <label className="text-sm">Garden</label>
                                    </span>

                                     <span className="flex gap-2.5">
                                        <input className="border-1" type="checkbox" />
                                        <label className="text-sm">Pool</label>
                                    </span>

                                     <span className="flex gap-2.5">
                                        <input className="border-1" type="checkbox" />
                                        <label className="text-sm">Flatlet</label>
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 p-5 gap-5">
                                <h3 className="font-bold text-sm">Other</h3>
                                <div className="grid grid-cols-2 gap-5">
                                    <span className="flex gap-2.5">
                                        <input className="border-1" type="checkbox" />
                                        <label className="text-sm">Retirement</label>
                                    </span>

                                     <span className="flex gap-2.5">
                                        <input className="border-1" type="checkbox" />
                                        <label className="text-sm">Repossessed</label>
                                    </span>

                                     <span className="flex gap-2.5">
                                        <input className="border-1" type="checkbox" />
                                        <label className="text-sm">On Show</label>
                                    </span>

                                     <span className="flex gap-2.5">
                                        <input className="border-1" type="checkbox" />
                                        <label className="text-sm">Securtiy Estate</label>
                                    </span>

                                     <span className="flex gap-2.5">
                                        <input className="border-1" type="checkbox" />
                                        <label className="text-sm">Auction</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
           </div>
        </section>
    )
}