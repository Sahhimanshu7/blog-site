import React from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai'; 
import { FaMoon } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const path = useLocation().pathname;
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
        <Button className='w-12 h-10' color='blue' pill>
          <FaMoon />
        </Button>
        <Link to='sign-in'>
          <Button pill gradientDuoTone='purpleToBlue'>
            Sign In
          </Button>
        </Link>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
      
    </Navbar>
  )
}

export default Header