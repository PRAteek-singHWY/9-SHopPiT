import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, Paper, Grid, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import Input from './Input';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Auth_Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //this response by default de to oauth packages contains all the detail like mail sdv the picture url in the data file
  const googleSuccess = async (response) => {
    const decoded = jwt_decode(response.credential);
    const { name, email, picture, sub } = decoded;
    // console.log(sub)
    try {
      const res = await fetch("http://localhost:8080/api/v1/authlogin/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sub }),
      });
      const data = await res.json();
      setErrorMessage(data.message)
  
      if (res.status === 200) {
        console.log(data.token);
  
        // Set the user information in local storage or state for authentication and authorization purposes
  
        navigate('/home'); // Navigate to the home route upon successful login
      }
    } catch (error) {
      // console.log(error);
    }
  };
  const googleFailure = () => {
    console.log('Google SignIn was Unsuccessful, Try Again Later');
  };

  const [form, setForm] = useState({
    Email: '',
    password: '',
  });

  const handleSubmit = async () => {
    if (form.Email && form.password) {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8080/api/v1/authlogin/manual", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        setErrorMessage(data.message)
        if (res.status === 200) {
          // console.log("token"+data.token);
  
          // Set the user information in local storage or state for authentication and authorization purposes
  s̄
          navigate('/home'); // Navigate to the home route upon successful login
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter the details');
    }
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col mb-6 items-center">
        <LockOutlinedIcon className="text-pink-500 -mr-1" />
        <h1 className="py-2 text-xl font-bold text-center text-pink-500">Sign In</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-transparent">
        <Input
          name="Email"
          label="Email Address"
          handleChange={handleChange}
          type="Email"
          value={form.Email}
          placeholder="Email Address"
        />
        <Input
          name="password"
          label="Password"
          handleChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          handleShowPassword={handleShowPassword}
          value={form.password}
          placeholder="Password"
        />

        {passwordError && <p className="text-red-600 text-center">{passwordError}</p>}

        <button
          type="submit"
          className="px-4 py-2 bg-transparent rounded-md focus:outline-none focus:ring-2 border-pink-500 border w-full bg-pink-500 text-pink-500 hover:bg-pink-500 hover:text-pink-200"
          onClick={handleSubmit}
        >
          Sign In
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


        {errorMessage && (
  <p className="text-red-500">
    {errorMessage}
  </p>
        ) }


        <Link to="/signup">
          <button className="bg-transparent mt-3 flex ml-7 hover:text-pink-500 text-gray-600">
            Don't have an account? Sign Up
          </button>
        </Link>

        <Link to="/forgotpassword">
          <button className="bg-transparent mt-3 flex ml-7 hover:text-pink-500 text-gray-600">
            Forgot Password?
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Auth_Login;
