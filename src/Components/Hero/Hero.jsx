import React from 'react'
import { Link } from 'react-router-dom'
import hero1 from '../Images/hero1.png'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__container">
          {/* Chap tomon */}
          <div className="hero__content">
            <p className="hero__eyebrow">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>Handcrafted with love</span>
            </p>

            <h1 className="hero__title">
              Handmade Knots,
              <span className="hero__title-accent">Made to Bloom.</span>
            </h1>

            <p className="hero__text">
              Thoughtfully handcrafted macramé pieces designed to bring warmth,
              texture and a little more beauty into your space.
            </p>

            <div className="hero__actions">
              <Link to="/collections" className="hero__btn hero__btn--primary">
                Explore Collections
              </Link>
              <Link to="/custom" className="hero__btn hero__btn--outline">
                Custom Order
              </Link>
            </div>
          </div>

          {/* O'ng tomon */}
          <div className="hero__media">
            <div className="hero__frame">
              <img
                src={hero1}
                alt="Devorga osilgan qo'lda to'qilgan makrame girlyanda"
                className="hero__img"
              />
            </div>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Every piece hand-knotted to order
            </div>
          </div>
        </div>
      </div>

      {/* Pastdagi to'lqin */}
      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1000 24" preserveAspectRatio="none">
          <path
            d="M0,2 C60,2 120,10 180,12 S300,20 350,20 S440,14 490,12 S580,2 640,2 S740,10 800,12 S920,20 1000,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <span className="hero__dot" style={{ left: '18%' }} />
        <span className="hero__dot" style={{ left: '49%' }} />
        <span className="hero__dot" style={{ left: '80%' }} />
      </div>
    </section>
  )
}

export default Hero