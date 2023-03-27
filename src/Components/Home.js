import React from 'react'
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Aboutus/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}

export default Home