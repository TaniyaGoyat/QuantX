import React from 'react'
import { Link } from "react-router-dom";
function OpenAccount() {
    return (
      <div className='container p-5 text-center mb-5'>
      <div  className="row">
         <h1 className="mt-5">Open a QuantX Account</h1>
         <p className='fs-5'>  Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
         <button style={{ width: "30%", margin: "0 auto", color: "white", fontSize:"25px" }} 
                  className="p-3 btn btn-primary"><Link className="nav-link active" aria-current="page" to="/signup">
                  Signup 
                </Link>
              </button>
      </div>
  </div>
      );
}

export default OpenAccount;