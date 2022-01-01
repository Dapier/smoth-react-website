import React, {useState, useEffect} from 'react'
import {Nav, NavContainer, NavLogo, MobileIco, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarItems'
import { IoApps } from "react-icons/io5";
import LogoLi from './../../images/LogoLi.png'

//React scroll
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle}) => {
    const [scrollNav, setscrollNav] = useState(false);

    const toggleNav = () =>{
        if(window.scrollY >=80){
            setscrollNav(true)
        }else{
            setscrollNav(false)
        }
    }

    useEffect(() => {
       window.addEventListener('scroll', toggleNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <MobileIco onClick={toggle}>
                        <IoApps className='color: #fff'/>
                    </MobileIco>
                    <NavLogo to="/" onClick={toggleHome}>
                        <img src={LogoLi} height="60px" width="60px"/>
                        
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to='about' 
                            smooth={true} 
                            duration={600} 
                            spy={true} 
                            exact='true' 
                            offset={-80} 
                            activeClass='active'
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='works'
                            smooth={true} 
                            duration={600} 
                            spy={true} 
                            exact='true' 
                            offset={-80} 
                            >Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='services'
                            smooth={true} 
                            duration={600} 
                            spy={true} 
                            exact='true' 
                            offset={-80} 
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='contact'
                            smooth={true} 
                            duration={600} 
                            spy={true} 
                            exact='true' 
                            offset={-80} 
                            >Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign up</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
