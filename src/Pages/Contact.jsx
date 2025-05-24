import {PhoneOutgoing,Mail} from "lucide-react"


export default function Contact() {
    return (
        <section className="flex justify-center items-center bg-[url('/Images/contact.jpg')] bg-cover bg-center h-[90vh] lg:h-[85vh]">
            <form className="bg-white flex flex-col gap-3 p-10 rounded-lg w-[350px] lg:w-[500px]">
                <h1 className="text-2xl font-semibold text-[#9c7b5c]">Get in touch</h1>
                <input className="text-sm border-1 border-gray-300 p-2.5 rounded-lg" placeholder="Name"/>
                <input className="text-sm border-1 border-gray-300 p-2.5 rounded-lg" placeholder="Email"/>
                <textarea className="text-sm border-1 border-gray-300 p-2.5 rounded-lg" placeholder="Message" rows={4}/>

                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-[#9c7b5c]"><PhoneOutgoing size={16} stroke="white"/></div>
                    <p className="text-sm">(+27) 065 888 9018</p>
                </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-[#9c7b5c]"><Mail size={16} stroke="white"/></div>
                    <p className="text-sm">info@northsideliving.co.za</p>
                </div>
                <button 
                    className="text-white bg-[#9c7b5c] px-7.5 py-2 rounded-md justify-self-end mt-10 cursor-pointer"
                    type="submit">SEND</button>
            </form>
        </section>
    )
}