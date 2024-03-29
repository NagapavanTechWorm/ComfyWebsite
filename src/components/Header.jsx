import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-neutral py-2 px-10 text-neutral-content">
        <div className='align-element flex justify-center sm:justify-end'>
            <div className='flex gap-x-6 justify-center items-center'>
                <Link to="/login" className='link link-hover p-1 text-xm sm:text-sm'>Sign in / Guest</Link>
                <Link to="/register" className='link link-hover p-1 text-xm sm:text-sm'>Create An Account</Link>
            </div>
        </div>
    </header>
  )
}

export default Header;