import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, image, category, title, desc, price }) => {
  return (
    <article className="card">
      <Link to={`/collections/${id}`} className="card__media" tabIndex={-1} aria-hidden="true">
        <img src={image} alt="" className="card__img" loading="lazy" />
      </Link>

      <div className="card__body">
        <p className="card__category">{category}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{desc}</p>

        <div className="card__footer">
          <div className="card__price-box">
            <span className="card__price">${price}</span>
            <span className="card__price-note">Demo price</span>
          </div>

          <Link to={`/collections/${id}`} className="card__link" aria-label={`${title} — batafsil`}>
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Card