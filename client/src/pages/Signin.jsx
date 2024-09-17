import React, { useState } from 'react';
import axios from "axios";

import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

const Signin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      setLoading(true);
      setErrorMessage(null);
      const user = await axios.post('/api/user/login',{
        username: username,
        password: password,
      });
      console.log(user)
      
      if(user.statusText != "OK") {
        dispatch(signInFailure(user.message));
      }
      if(user.statusText === "OK"){
        dispatch(signInSuccess(user.data));
        setLoading(false);
        setErrorMessage(null);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Couldn't login")
    }
  }
  return (
    <div className='min-h-[85vh] mt-20 flex flex-col md:ml-[40vw] ml-[20vw]'>
      <h1 className='ml-[10vw] mb-[40px] text-2xl text dark:text-white'>Sign In</h1>
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
            <div className='flex space-x-2 justify-center md:m-4 mt-4 flex-wrap'>
              <span>Don't have an account? </span>
              <Link to='/sign-up' className='underline text-blue-600'>Sign up</Link>
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>
              {
                loading ? (
                  <Spinner size='sm' />
                )
                :
                'Sign In'
              }
            </Button>
          </div>
        </form>
      </div>
      {errorMessage && (
        <Alert className='mt-5 w-[200px]' color='failure'>
          {errorMessage}
        </Alert>
      )}
    </div>
  )
}

export default Signin;