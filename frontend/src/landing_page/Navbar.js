import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext"; // Adjust path as necessary
import axios from "axios";

function Navbar() {
  // Get the authentication state from AuthContext
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      // Call the logout API to invalidate the session (if necessary)
      await axios.post("http://localhost:3002/logout", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });

      // Remove token from localStorage and update auth state
      localStorage.removeItem("token");
      setIsLoggedIn(false); // Update the state to reflect logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/quantx.png" style={{ width: "25%" }} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            {/* Show Signup and Login links when not logged in */}
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}

            {/* Show Logout button when logged in */}
            {isLoggedIn && (
              <li className="nav-item">
                <button className="nav-link active btn btn-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}

            {/* Other common links */}
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
