import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header__wrap">
            <img src="./logo.svg" alt="" className="logo" />
                <Link className='link' to={'/'}>Home</Link>
                <Link className='link' to={'/about'}>About</Link>
                <Link className='link' to={'/contacts'}>Contacts</Link>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header