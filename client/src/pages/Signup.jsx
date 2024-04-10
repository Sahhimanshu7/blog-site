import React, { useState } from 'react';
import axios from "axios";

import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setErrorMessage(null);
      const user = await axios.post('/api/user/signup/',{
        username: username,
        password: password,
        email: email
      });
      setLoading(false);
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
      setErrorMessage("Couldn't signup, Please try again!")
    }
  }
  return (
    <div className='min-h-[85vh] mt-20 flex flex-col md:ml-[40vw] ml-[20vw]'>
      <h1 className='ml-[10vw] mb-[40px] text-2xl text dark:text-white'>Sign Up</h1>
      <div className='md:w-[30vw] w-[50vw]'>
        <form onSubmit={handleSubmit} className='space-y-8'>
          <div className=''>
            <Label value="Username" />
            <TextInput 
              type="text"
              placeholder="Username"
              id="username"
              required
              onChange={(e) => setUsername(e.target.value.trim())}
            />
          </div>
          <div className=''>
            <Label value="Email" />
            <TextInput 
              type="email"
              placeholder="name@company.com"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </div>
          <div className=''>
            <Label value="Password" />
            <TextInput 
              type="password"
              placeholder="********"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value.trim())}
            />
          </div>
          <div className='flex flex-col-reverse m-2'>
            <div className='flex space-x-4 justify-center md:m-4 mt-4'>
              <span>Have an account? </span>
              <Link to='/sign-in' className='underline text-blue-600'>Sign In</Link>
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>
              {
                loading ? (
                  <Spinner size='sm' />
                )
                :
                'Sign Up'
              }
            </Button>
          </div>
        </form>
      </div>
      {errorMessage && (
        <Alert className='mt-5' color='failure'>
          {errorMessage}
        </Alert>
      )}
    </div>
  )
}

export default Signup;