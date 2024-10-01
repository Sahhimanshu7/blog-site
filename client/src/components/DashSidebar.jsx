import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Button, Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";

import { useDispatch } from 'react-redux';
import { signOut } from '../redux/user/userSlice';

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');

  const dispatch = useDispatch();
  
  const handleSignOut = async (e) => {
    e.preventDefault();
    dispatch(signOut());
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl) setTab(tabFromUrl);
  }, [location.search]);
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item active ={tab === 'profile'} icon={HiUser} label={'User'} labelColor={'dark'}>
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer" onClick={(e) => handleSignOut(e)}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar