import React from 'react'
import { Footer } from "flowbite-react";
import { Link } from 'react-router-dom';

const FooterCom = () => {
  return (
  <Footer container className='border border-t-8 border-teal-500'>
    <div>
      <Link to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-mono">Blog-Site</span>
      </Link> 
    </div>
    <div className='grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
      <div>
        <Footer.Title title='About' />
        <Footer.LinkGroup col>
          <Footer.Link
          href='https://www.sahhimanshu7.com'
          target='_blank'
          rel='noopener noreferrer'
          >
            Himanshu Sah
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title='Follow Me' />
        <Footer.LinkGroup col>
          <Footer.Link
          href='https://github.com/Sahhimanshu7'
          target='_blank'
          rel='noopener noreferrer'
          >
            Github
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      
    </div>
    
  </Footer>
  )
}

export default FooterCom