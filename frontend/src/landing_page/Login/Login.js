// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { AuthContext } from "../../AuthContext"; // Adjust path if needed

// const Login = () => {
//   const navigate = useNavigate();
//   const { setIsLoggedIn } = useContext(AuthContext);

//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });

//   const { email, password } = inputValue;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });

//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-right",
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3002/login",
//         {
//           ...inputValue,
//         },
//         { withCredentials: true }
//       );

//       const { success, message, token } = data;

//       if (success) {
//         handleSuccess(message);
//         localStorage.setItem("token", token); // ✅ Save token
//         setIsLoggedIn(true);                 // ✅ Update auth state

//         setTimeout(() => {
//           navigate("/");
//         }, 1000);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     setInputValue({
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div className="form_container">
//       <h2>Login Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//         <span>
//           Don’t have an account? <Link to={"/signup"}>Signup</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;


// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { AuthContext } from "../../AuthContext"; // Adjust path if needed

// const Login = () => {
//   const navigate = useNavigate();
//   const { setIsLoggedIn } = useContext(AuthContext);

//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });

//   const { email, password } = inputValue;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });

//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-right",
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3002/login",
//         {
//           ...inputValue,
//         },
//         { withCredentials: true }
//       );

//       const { success, message, token } = data;

//       if (success) {
//         handleSuccess(message);
//         localStorage.setItem("token", token); // Save token
//         setIsLoggedIn(true); // Update auth state

//         setTimeout(() => {
//           // CHANGE THIS LINE - redirect to dashboard instead of home page
//           navigate("/dashboard");
//         }, 1000);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     setInputValue({
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div className="form_container">
//       <h2>Login Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//         <span>
//           Don't have an account? <Link to={"/signup"}>Signup</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;


import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthContext"; // Adjust path if needed

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message, token } = data;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", token);
        setIsLoggedIn(true);

        setTimeout(() => {
          // ✅ Redirect to dashboard app (port 3001)
          window.location.href = "http://localhost:3001/dashboard";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
