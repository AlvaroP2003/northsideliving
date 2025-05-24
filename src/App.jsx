import MainLayout from "./Pages/Components/MainLayout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Listings from "./Pages/Listings"
import Tools from "./Pages/Tools"
import Contact from "./Pages/Contact"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="services" element={<Services/>} />
          <Route path="listings" element={<Listings/>} />
          <Route path="tools" element={<Tools/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}