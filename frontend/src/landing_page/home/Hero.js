import React from 'react'
import {Link} from "react-router-dom"
function Hero() {
    return ( 
        <div className='container p-5 text-center mb-5'>
            <div  className="row">
               <img src="media/images/homeHero.png" alt="heroimg" className='mb-5'></img>
               <h1 className="mt-5">Invest in Everything</h1>
               <p className='fs-5'>Online platforms to invest in stocks, derivatives, mutual funds and more</p>
               <button style={{ width: "30%", margin: "0 auto", color: "white", fontSize:"25px" }} 
                        className="p-3 btn btn-primary">
                           <Link className="nav-link active" aria-current="page" to="/signup">Signup </Link> 
                    </button>
            </div>
        </div>
    );
}

export default Hero;