import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/custom', label: 'Custom Orders' },
  { to: '/contact', label: 'Contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Link to="/" className="header__logo" aria-label="Knots & Bloom — bosh sahifa">
            Knots <span className="header__amp">&amp;</span> Bloom
          </Link>

          <button
            type="button"
            className={`header__burger ${open ? 'is-open' : ''}`}
            aria-label="Menyuni ochish"
            aria-expanded={open}
            aria-controls="header-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <div id="header-menu" className={`header__menu ${open ? 'is-open' : ''}`}>
            <nav className="header__nav" aria-label="Asosiy menyu">
              <ul className="header__list">
                {links.map(({ to, label, end }) => (
                  <li className="header__item" key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        `header__link ${isActive ? 'header__link--active' : ''}`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Link to="/collections" className="header__btn">
              Shop Collections
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header