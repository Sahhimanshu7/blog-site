import React from 'react';
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai'; 
import { FaMoon } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from '../redux/theme/themeSlice';

const Header = () => {
  const path = useLocation().pathname;

  const { currentUser } = useSelector(state => state.user);

  const dispatch = useDispatch();

  return (
    <Navbar fluid rounded className='border-b-2'>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-mono">Blog-Site</span>
      </Navbar.Brand>
      <form className='order-1'>
        <TextInput 
          type='text'
          placeholder='Search'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline outline-none'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='blue' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex space-x-4 md:order-2'>
        <Button className='w-12 h-10' color='blue' pill onClick={() => dispatch(toggleTheme())}>
          <FaMoon />
        </Button>
        {currentUser ? 
        (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar 
                alt='user'
                img={currentUser.profilePicture}
                rounded
              />
            }
          >

            <Dropdown.Header>
              <span className='block text-sm'>{currentUser.username}</span>
              <span className='block text-sm'>{currentUser.email}</span>
              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown.Header>
          </Dropdown>
        )
        : 
        <Link to='sign-in'>
          <Button pill gradientDuoTone='purpleToBlue'>
            Sign In
          </Button>
        </Link>
}
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/saved'>
            Saved
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/my-blogs'>
            My Blogs
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
      
    </Navbar>
  )
}

export default Header