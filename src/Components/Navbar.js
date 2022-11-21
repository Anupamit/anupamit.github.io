import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Navigation.css'

function Navbar() {
    return (
        <div className='navigationBar'>
            <Link 
            className='navLink'
            >Home</Link>
            <Link 
            className='navLink'
            >Portfolio</Link>
            <Link 
            className='navLink'
            >Contact</Link>
        </div>
    )
}

export default Navbar