import React from 'react'
import OpenAccount from '../OpenAccount.js';
import Navbar from "../Navbar.js" 
import Footer from "../Footer.js"
import Hero from "./Hero.js";
import Awards from "./Awards.js";
import Stats from "./Stats.js";
import Pricing from "./Pricing.js";
import Education from "./Education.js";

function HomePage() {
    return ( 
       <>
       <Hero/>
       <Awards/>
       <Stats/>
       <Pricing/>
       <Education/>
       <OpenAccount/>
       </>
     );
}

export default HomePage;