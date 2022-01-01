import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import { contactSection, tecnologySection, worksSection } from '../components/Info/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen ={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero />
            <Info {...tecnologySection}/>
            <Info {...worksSection}/>
            <Services />
            <Info {...contactSection}/>
            <Footer />
        </>
    )
}

export default Home
