import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='header'>
        <div className="container">
            <div className="header__container">
                <ul className='header__list'>
                    <li className='header__item'>
                        <h1 className='title'>Knots & Bloom</h1>
                    </li>
                    <li className='header__item'>
                        <Link to="/" className='header__link'>Collections</Link>
                        <Link to="/about" className='header__link'>About</Link>
                        <Link to="/custom" className='header__link'>Custom Orders</Link>
                        <Link to="contact" className='header__link'>Contact</Link>
                    </li>
                    <li className='header__item'>
                        <button className='header__btn'>Shop Collections</button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header