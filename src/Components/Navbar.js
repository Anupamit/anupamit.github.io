import React, { useRef,useState,useEffect } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import '../Styles/Navigation.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navRef= useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
    };
    }, [navRef]);
    
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    
    // const showNavbar = () =>{
    //     navRef.toggle("responsive_nav")
    // }

    return (
        <header>
        <span></span>
            <nav ref={navRef} className={isOpen ? "responsive_nav" : ""}>
                <a href='/'>Home</a>
                <a href='/portfolio'>Portfolio</a>
                <a target='_self' href='/contact'>Contact</a>
                <button className='nav-btn nav-close-btn' onClick={toggleNav}><FaTimes/></button>
            </nav>
            <button className='nav-btn' onClick={toggleNav}>
                <FaBars/>
            </button>
        </header>   
    )
}

export default Navbar