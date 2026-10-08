import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/custom', label: 'Custom Orders' },
  { to: '/contact', label: 'Contact' },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Knots <span className="footer__amp">&amp;</span> Bloom
            </Link>
            <p className="footer__tagline">Handmade knots. Beautiful spaces.</p>
          </div>

          <nav className="footer__col" aria-label="Footer menyusi">
            <h3 className="footer__title">Navigate</h3>
            <ul className="footer__list">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__title">Demo Contact</h3>
            <ul className="footer__list">
              <li>
                <a href="mailto:hello@knotsandbloom.example" className="footer__link">
                  hello@knotsandbloom.example
                </a>
              </li>
              <li>
                <a href="tel:+000000000000" className="footer__link">
                  +00 000 000 0000
                </a>
              </li>
              <li>
                <span className="footer__text">Demo Studio, Creative Avenue</span>
              </li>
            </ul>
          </div>

          {/* 4. Follow */}
          <div className="footer__col">
            <h3 className="footer__title">Follow (Demo)</h3>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" className="footer__social" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M10.5 17.5l1.8-8c1.9-.6 3.3.4 3.3 2 0 1.9-1.3 3.2-2.9 3.2-.8 0-1.4-.4-1.6-.9" />
                </svg>
              </a>
              <a href="#" className="footer__social" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3H9v9h3v-9h2.5l.5-3H12V6.5c0-.3.2-.5.5-.5H15z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Knots &amp; Bloom — Demo Website
          </p>
          <p className="footer__note">DEMO WEBSITE — For presentation purposes only.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer