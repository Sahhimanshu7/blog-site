import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Button, TextInput } from "flowbite-react"

import { useDispatch } from 'react-redux';
import { signOut } from '../redux/user/userSlice';

const DashProfile = () => {
  const { currentUser } = useSelector(state => state.user);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  
  const handleSignOut = async (e) => {
    setLoading(true);
    e.preventDefault();
    dispatch(signOut());
    setLoading(false);
  }

  return (
    <div className='p-3 w-full max-w-lg mx-auto'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col space-y-4 md:min-w-[40vw]'>
        <TextInput type="text" id = "username" placholder='username' defaultValue={currentUser.user.username} />
        <TextInput type="text" id = "email" placholder='email' defaultValue={currentUser.user.email} />
        <TextInput type="password" id = "password" placholder='********' />
        <Button type='submit' gradientDuoTone='purpleToBlue'>
          Update
        </Button>
      </form>
      <div className='text-red-700 flex justify-between m-5'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>
          <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading} onClick={handleSignOut}>
              {
                loading ? (
                  <Spinner size='sm' />
                )
                :
                'Sign Out'
              }
            </Button>
        </span>
      </div>
    </div>
  )
}

export default DashProfile