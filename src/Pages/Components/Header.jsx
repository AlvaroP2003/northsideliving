import { Outlet,NavLink } from "react-router-dom"
import { Menu,X } from "lucide-react"
import { useState } from "react"


export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const activeLink = "text-[#9c7b5c] font-semibold"
    const normalLink = "text-gray-600"

    const toggleMenu = (show) => {
        setShowMenu(show)
    }

    return (
        <header className=" flex justify-between items-center px-5 h-[10vh] shadow-lg lg:px-15 lg:h-[15vh]">
            <img src="/Images/header_main-01.webp" className="w-[175px] lg:w-[300px]"></img>
            <ul className="hidden lg:flex gap-10">
                <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink>
                <NavLink to='about' className={({isActive}) => isActive ? activeLink : normalLink}>About</NavLink>
                <NavLink to='services' className={({isActive}) => isActive ? activeLink : normalLink}>Services</NavLink>
                <NavLink to='listings' className={({isActive}) => isActive ? activeLink : normalLink}>Listings</NavLink>
                <NavLink to='tools' className={({isActive}) => isActive ? activeLink : normalLink}>Tools</NavLink>
                <NavLink to='contact' className={({isActive}) => isActive ? activeLink : normalLink}>Contact</NavLink>
            </ul>
            <div
                onClick={() => toggleMenu(true)}
            >
                <Menu className="text-[#9c7b5c] lg:hidden"/>
            </div>
            <div className={`absolute top-0 z-50 bg-white border-l border-gray-200 w-[200px] h-screen px-5 shadow-xl transition-all ${showMenu ? 'right-0' : '-right-[200px]'}`}>
                <div className="flex justify-end items-center h-[10vh]">
                    <X 
                        className="text-[#9c7b5c]"
                        onClick={() => toggleMenu(false)}
                    />
                </div>
                <ul className="flex flex-col gap-10 px-2.5 py-5">
                    <NavLink onClick={() => toggleMenu(false)} to='/' className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink>
                    <NavLink onClick={() => toggleMenu(false)} to='about' className={({isActive}) => isActive ? activeLink : normalLink}>About</NavLink>
                    <NavLink onClick={() => toggleMenu(false)} to='services' className={({isActive}) => isActive ? activeLink : normalLink}>Services</NavLink>
                    <NavLink onClick={() => toggleMenu(false)} to='listings' className={({isActive}) => isActive ? activeLink : normalLink}>Listings</NavLink>
                    <NavLink onClick={() => toggleMenu(false)} to='tools' className={({isActive}) => isActive ? activeLink : normalLink}>Tools</NavLink>
                    <NavLink onClick={() => toggleMenu(false)} to='contact' className={({isActive}) => isActive ? activeLink : normalLink}>Contact</NavLink>
                </ul>
            </div>

            { showMenu ? 
            <div 
                onClick={() => toggleMenu(false)}
                className="absolute top-0 right-0 backdrop-blur-xs bg-white/30 h-[100vh] w-[100vw] z-40">
            </div> 
            : null }
            
        </header>
    )
}