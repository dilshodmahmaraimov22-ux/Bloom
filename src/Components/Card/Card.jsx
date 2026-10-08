import React from 'react'
import Card from './Card'
import './Featured.css'

// Rasmlarni o'zingiznikiga almashtiring
import img1 from '../assets/wall-hanging.jpg'
import img2 from '../assets/dreamcatcher.jpg'
import img3 from '../assets/star-wreath.jpg'
import img4 from '../assets/plant-hanger.jpg'

const products = [
  {
    id: 1,
    image: img1,
    category: 'Wall Decor',
    title: 'Boho Wall Hanging',
    desc: 'Layered ivory cording with a soft tasseled fringe, hand-knotted on a natural wood dowel.',
    price: 68,
  },
  {
    id: 2,
    image: img2,
    category: 'Home Decor',
    title: 'Ivory Dreamcatcher',
    desc: 'A full round mandala of hand-knotted natural rope, radiating fine detailed knotwork.',
    price: 84,
  },
  {
    id: 3,
    image: img3,
    category: 'Gift Ideas',
    title: 'Woven Star Wreath',
    desc: 'A playful star-shaped weave in warm mustard, terracotta and sage — a joyful little gift.',
    price: 28,
  },
  {
    id: 4,
    image: img4,
    category: 'Plant Hangers',
    title: 'Sage Plant Hanger',
    desc: 'A beaded cotton garland designed to cradle a small terracotta pot among your greenery.',
    price: 32,
  },
  {
    id: 5,
    image: img1,
    category: 'Wall Decor',
    title: 'Textured Wall Art',
    desc: 'Chunky wrapped beads and long fringe create rhythm and texture across the whole panel.',
    price: 92,
  },
  {
    id: 6,
    image: img3,
    category: 'Gift Ideas',
    title: 'Macramé Gift Piece',
    desc: 'A compact woven keepsake in mixed warm tones, ready to gift or display on its own.',
    price: 24,
  },
]

const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured__head">
          <p className="featured__eyebrow">From the studio</p>
          <h2 className="featured__title">Featured Creations</h2>
          <p className="featured__sub">
            A few of our most-loved handmade pieces, ready to bring home.
          </p>
        </div>

        <div className="featured__grid">
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured