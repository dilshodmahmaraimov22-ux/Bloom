import "./Card.css";

import card1 from "../assets/boho-wall-hanging.jpg";
import card2 from "../assets/ivory-dreamcatcher.jpg";
import card3 from "../assets/woven-star-wreath.jpg";
import card4 from "../assets/sage-plant-hanger.jpg";


const products = [
  {
    id: 1,
    image: img1,
    category: "Wall Decor",
    title: "Boho Wall Hanging",
    text: "Layered ivory cording with a soft tasseled fringe, hand-knotted on a natural wood dowel.",
    price: 68,
  },
  {
    id: 2,
    image: img2,
    category: "Home Decor",
    title: "Ivory Dreamcatcher",
    text: "A full round mandala of hand-knotted natural rope, radiating fine detailed knotwork.",
    price: 84,
  },
  {
    id: 3,
    image: img3,
    category: "Gift Ideas",
    title: "Woven Star Wreath",
    text: "A playful star-shaped weave in warm mustard, terracotta and sage — a joyful little gift.",
    price: 28,
  },
  {
    id: 4,
    image: img4,
    category: "Plant Hangers",
    title: "Sage Plant Hanger",
    text: "A beaded cotton garland designed to cradle a small terracotta pot among your greenery.",
    price: 32,
  },
  {
    id: 5,
    image: img5,
    category: "Wall Decor",
    title: "Textured Wall Art",
    text: "Chunky wrapped beads and long fringe create rhythm and texture across the whole panel.",
    price: 92,
  },
  {
    id: 6,
    image: img6,
    category: "Gift Ideas",
    title: "Macramé Gift Piece",
    text: "A compact woven keepsake in mixed warm tones, ready to gift or display on its own.",
    price: 24,
  },
];

function Card() {
  return (
    <section className="card">
      <div className="card__intro">
        <span className="card__script">Made Slowly.</span>
        <h2 className="card__headline">Made Beautifully.</h2>
        <p className="card__lead">
          Every Knots &amp; Bloom piece begins with a single cord and hours of
          patient, hand-tied knotting. No shortcuts, no machines — just natural
          fibers, careful pattern work, and an eye for detail that turns rope
          into something you'll want to look at every day.
        </p>
      </div>

      <div className="card__header">
        <span className="card__script card__script--small">From the studio</span>
        <h3 className="card__title">Featured Creations</h3>
        <p className="card__subtitle">
          A few of our most-loved handmade pieces, ready to bring home.
        </p>
      </div>

      <div className="card__grid">
        {products.map((item) => (
          <article className="card__item" key={item.id}>
            <div className="card__media">
              <img
                className="card__img"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
            </div>

            <div className="card__body">
              <span className="card__category">{item.category}</span>
              <h4 className="card__name">{item.title}</h4>
              <p className="card__text">{item.text}</p>

              <div className="card__footer">
                <div className="card__price-box">
                  <span className="card__price">${item.price}</span>
                  <span className="card__demo">Demo price</span>
                </div>
                <a href="#" className="card__link">
                  View details
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Card;