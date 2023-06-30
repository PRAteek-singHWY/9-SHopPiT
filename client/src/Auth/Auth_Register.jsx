
// import { Avatar, Button, Paper, Grid, Container, TextField } from "@material-ui/core"
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import React, { useState } from 'react'
// import useStyles from "./styles";
// import Input from "./Input";
// import { GoogleLogin, googleLogout } from '@react-oauth/google';
// import axios from "axios"
// import jwt_decode from "jwt-decode"

// import {
//   BrowserRouter,
//   Link,
//   useNavigate,
//   Route,
//   Routes,
// } from "react-router-dom";
// const Auth_Register = () => {
//   const classes = useStyles();
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [showPassword, setShowPassword] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();


//   const handleChange = (event) => {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value,
//     });
//   };



//   const handleShowPassword = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };






//   const googleSuccess = async (response) => {
//     const decoded = jwt_decode(response.credential);
//     const { name, email, picture, sub } = decoded;
//     console.log(decoded.name)
//     console.log(decoded.email)
//     console.log(decoded.picture)
//     console.log(decoded.sub)

//     const userData = {
//       Name: name,
//       Email: email,
//       ProfilePicture: picture,
//       GoogleId: sub,
//     };
//     console.log(userData)

//     // console.log(decoded.email)
//     // console.log(decoded.picture)
//     // console.log(decoded.sub)

//     // /making a call to our backend from this function
//     if (userData) {
//       setLoading(true)
//       try {
//         // settting generatingImg to True to show "Asking AI...." in the AI Picker button
//         //response
//         const response = await fetch(
//           //fetching from api
//           "http://localhost:8080/api/v1/auth",
//           //method
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             //converting javascript object to JSON srtring
//             //e.g
//             // const data = { name: 'John', age: 25, isStudent: true };
//             // const jsonString = JSON.stringify(data);
//             // console.log(jsonString);
//             // // Output: {"name":"John","age":25,"isStudent":true}

//             //here the body gets it's value which is being used   in our backend
//             body: JSON.stringify(userData),
//             //fetching finished
//           }
//         );

//         //parsing the data --> getting data from backend
//         const data = await response.json();
//         navigate("/");
//         console.log(data);

//       } catch (error) {
//         console.log(error)
//       }
//       finally {
//         setLoading(false);
//       }

//     } else {
//       alert("Try Google Sign In Later");
//     }



//   }




//   const googleFailure = () => {
//     console.log("Google SignIn was UnsuccessFull, Try Again Later")
//   }
//   const [form, setForm] = useState({
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     password: "",
//     ConfirmPassword: ""
//   });









//   //handle Submit for generating ai generated image
//   const handleSubmit = async () => {

//     // comparing passwords

//     if (form.password !== form.ConfirmPassword) {
//       setPasswordError('Password Entered is Incorrect, Please Try gain');
//       return;
//     }

//     //making a call to our backend from this function
//     if (form.FirstName && form.LastName && form.Email && form.password && form.ConfirmPassword) {
//       setLoading(true)
//       try {
//         // settting generatingImg to True to show "Asking AI...." in the AI Picker button
//         //response
//         const response = await fetch(
//           //fetching from api
//           "http://localhost:8080/api/v1/auth",
//           //method
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             //converting javascript object to JSON srtring
//             //e.g
//             // const data = { name: 'John', age: 25, isStudent: true };
//             // const jsonString = JSON.stringify(data);
//             // console.log(jsonString);
//             // // Output: {"name":"John","age":25,"isStudent":true}

//             //here the body gets it's value which is being used   in our backend
//             body: JSON.stringify(form),
//             //fetching finished
//           }
//         );

//         //parsing the data --> getting data from backend
//         const data = await response.json();
//         console.log(data);
//         navigate("/");


//       } catch (error) {
//         console.log(error)
//       }
//       finally {
//         setLoading(false);
//       }

//     } else {
//       alert("Please enter the details");
//     }
//   };







//   return (
//     <div className="  flex flex-col p-4  ">
//       <div className="flex flex-col   mb-6 items-center ">
//         <LockOutlinedIcon className=" text-pink-500 -mr-1 " />
//         <h1 className="py-2 text-xl font-bold text-center text-pink-500 ">{'Sign Up'}</h1>
//       </div>
//       <form onSubmit={(e) => e.preventDefault()} className="space-y-4  bg-transparent ">

//         <div className="flex gap-3">
//           <Input
//             name="FirstName"
//             label="First Name"
//             handleChange={handleChange}
//             autoFocus
//             value={form.FirstName}
//             placeholder="First Name"
//           />
//           <Input
//             name="LastName"
//             label="Last Name"
//             handleChange={handleChange}
//             value={form.LastName}

//             placeholder="Last Name"
//           />
//         </div>

//         <Input
//           name="Email"
//           label="Email Address"
//           handleChange={handleChange}
//           type="Email"
//           value={form.Email}

//           placeholder="Email Address"
//         />
//         <Input
//           name="password"
//           label="Password"
//           handleChange={handleChange}
//           type={showPassword ? 'text' : 'password'}
//           handleShowPassword={handleShowPassword}
//           value={form.password}

//           placeholder="Password "
//         />


//         <Input
//           name="ConfirmPassword"
//           label="Confirm Password"
//           handleChange={handleChange}
//           type="password"
//           value={form.ConfirmPassword}
//           error={passwordError !== ''}
//           helperText={passwordError}
//           placeholder="Confirm Password"
//         />

//         <button
//           type="submit"
//           className=" px-4 py-2  bg-transparent rounded-md focus:outline-none focus:ring-2  border-pink-500 border w-full   bg-pink-500  text-pink-500 "
//           onClick={handleSubmit}
//         >
//           {'Sign Up'}
//         </button>

//         <div className="flex  justify-center ">
//           <GoogleLogin
//             clientId="682146987015-jsmeqv22o4pcoh9bpnv0s22h1pkatm3d.apps.googleusercontent.com"
//             render={(renderProps) => (
//               <button
//                 type="submit"
//                 className="bg-primary w-full text-white rounded-md py-2 px-4 flex items-center justify-center"
//                 onClick={renderProps.onClick}
//                 disabled={renderProps.disabled}
//               >
//                 Google Sign In
//               </button>
//             )}
//             onSuccess={googleSuccess}
//             onFailure={googleFailure}
//             cookiePolicy={'single_host_origin'}
//           />
//         </div>
//         <Link to="/">
//           <button className="bg-transparent mt-3 flex ml-7 hover:text-pink-500 text-gray-600" >  Already have an account? Sign In</button>
//         </Link>

//       </form>
//     </div>
//   );
// };

// export default Auth_Register;



























import { Avatar, Button, Paper, Grid, Container, TextField } from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import React, { useState } from 'react'
import useStyles from "./styles";
import Input from "./Input";
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from "axios"
import jwt_decode from "jwt-decode"

import {
  BrowserRouter,
  Link,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";
const Auth_Register = () => {
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const googleSuccess = async (response) => {
    const decoded = jwt_decode(response.credential);
    const { name, email, picture, sub } = decoded;

    const userData = {
      Name: name,
      Email: email,
      ProfilePicture: picture,
      GoogleId: sub,
    };

    if (userData) {
      setLoading(true)
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/auth/google",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        const data = await response.json();
        setErrorMessage(data.message)
        if(response.status === 200){
          navigate("/")
        }
      } catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false);
      }

    } else {
      alert("Try Google Sign In Later");
    }
  };

  const googleFailure = () => {
    console.log("Google SignIn was Unsuccessful, Try Again Later")
  };

  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    password: "",
    ConfirmPassword: ""
  });






  const handleSubmit = async () => {
    if (form.password !== form.ConfirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    if (form.FirstName && form.LastName && form.Email && form.password && form.ConfirmPassword) {
      setLoading(true)
      try {




        const response = await fetch(
          "http://localhost:8080/api/v1/auth/manual",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        const data = await response.json();
          setErrorMessage(data.message)
          if(response.status === 200){
            navigate("/")
          }
      } catch (error) {
        console.log(error)

        

      }
      finally {
        setLoading(false);
      }
    } else {
      alert("Please enter all the details");
    }
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col mb-6 items-center">
        <LockOutlinedIcon className="text-pink-500 -mr-1" />
        <h1 className="py-2 text-xl font-bold text-center text-pink-500 ">Sign Up</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-transparent">

        <div className="flex gap-3">
          <Input
            name="FirstName"
            label="First Name"
            handleChange={handleChange}
            autoFocus
            value={form.FirstName}
            placeholder="First Name"
          />
          <Input
            name="LastName"
            label="Last Name"
            handleChange={handleChange}
            value={form.LastName}
            placeholder="Last Name"
          />
        </div>

        <Input
          name="Email"
          label="Email Address"
          handleChange={handleChange}
          type="Email"
          value={form.Email}
          placeholder="Email Address"
        />
        {/* 
{errorMessage && (
          <Typography variant="body2" >
            {errorMessage}
          </Typography>
        )} */}
        <Input
          name="password"
          label="Password"
          handleChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          handleShowPassword={handleShowPassword}
          value={form.password}
          placeholder="Password"
        />

        <Input
          name="ConfirmPassword"
          label="Confirm Password"
          handleChange={handleChange}
          type="password"
          value={form.ConfirmPassword}
          error={passwordError !== ''}
          helperText={passwordError}
          placeholder="Confirm Password"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-transparent rounded-md focus:outline-none focus:ring-2 border-pink-500 border w-full bg-pink-500 text-pink-500 hover:bg-pink-500 hover:text-pink-200"
          onClick={handleSubmit}
        >
          Sign Up
        </button>

        <div className="flex justify-center">
          <GoogleLogin
            clientId="682146987015-jsmeqv22o4pcoh9bpnv0s22h1pkatm3d.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                type="submit"
                className="bg-primary w-full text-white rounded-md py-2 px-4 flex items-center justify-center"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Google Sign In
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={'single_host_origin'}
          />
        </div>


        {errorMessage ? (
          <div className="flex flex-col ">
  <p className={`text-left ${errorMessage === 'Account with this Email already exists, Sign in to continue' ? 'text-blue-500' : errorMessage === 'Registered Successfully' ? 'text-green-600' : 'text-red-600'}`}>
    {errorMessage}
  </p>
  <Link to="/">
    <button className="bg-transparent mt-3 flex ml-7 hover:text-pink-500 text-gray-600">
      Already have an account? Sign In
    </button>
  </Link>
</div>

        ) : (
          <Link to="/">
            <button className="bg-transparent mt-3 flex ml-7 hover:text-pink-500 text-gray-600">
              Already have an account? Sign In
            </button>
          </Link>
        )}

      </form>
    </div>
  );
};

export default Auth_Register;




