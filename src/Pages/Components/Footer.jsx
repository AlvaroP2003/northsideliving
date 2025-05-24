import { NavLink } from "react-router-dom";
import { Facebook,Linkedin,Instagram} from "lucide-react"


export default function Footer() {
    return (
        <footer className="border-t-2 border-[#9c7b5c] py-10 px-10 lg:px-15">

            <img src="/Images/header_main-01.webp" className="w-[200px] pb-10 lg:w-[300px]"/>
            <div className="h-[1px] w-full bg-[#9c7b5c]"/>

            <div className="grid grid-cols-1 py-10 lg:grid-cols-3 gap-5">
                <div className="flex flex-col gap-2.5">
                    <h2 className="text-lg text-[#9c7b5c] font-semibold">Main Link</h2>
                    <ul className="flex flex-col gap-1 text-gray-600 text-sm">
                        <NavLink>Home</NavLink>
                        <NavLink>About</NavLink>
                        <NavLink>Listing</NavLink>
                        <NavLink>Tools</NavLink>
                        <NavLink>Services</NavLink>
                        <NavLink>Contact Us</NavLink>
                    </ul>
                </div>
                <div className="flex flex-col gap-2.5">
                    <h2 className="text-lg text-[#9c7b5c] font-semibold">Resources</h2>
                    <ul className="flex flex-col gap-2 text-gray-600 text-sm">
                        <NavLink>Privacy Policy</NavLink>
                        <NavLink>Terms & conditions</NavLink>
                        <NavLink>Cookie Policy</NavLink>
                        <NavLink>PAIA Manual</NavLink>
                    </ul>
                </div>
                <div className="flex flex-col gap-2.5">
                    <h2 className="text-lg text-[#9c7b5c] font-semibold">Follow us on</h2>
                    <div className="flex gap-5">
                        <div className="flex justify-between items-center bg-[#9c7b5c] p-2 rounded-full"><Facebook size={15} fill="white" stroke="none"/></div>
                        <div className="flex justify-between items-center bg-[#9c7b5c] p-2 rounded-full"><Linkedin size={15} fill="white" stroke="none"/></div>
                        <div className="flex justify-between items-center bg-[#9c7b5c] p-2 rounded-full"><Instagram size={15} stroke="white"/></div>
                    </div>
                    <p className="text-gray-500">CK Reg no: 2025/01880/07</p>
                </div>
            </div>

            <div className="flex justify-between gap-10 flex-col-reverse items-center lg:flex-row">
                <p className="text-sm text-[#9c7b5c] font-semibold py-5">©2025 Copyrights Reserved at Northside Living</p>

                <div className="grid grid-cols-2 gap-10 lg:flex">
                    <img className="w-[125px]" src="Images/property24-01.webp"/>
                    <img className="w-[125px]" src="Images/private_property-01.webp"/>
                    <img className="w-[125px]" src="Images/payprop-01.webp"/>
                    <img className="w-[125px]" src="Images/betterbond-01.webp"/>
                </div>
            </div>
        </footer>
    )
}