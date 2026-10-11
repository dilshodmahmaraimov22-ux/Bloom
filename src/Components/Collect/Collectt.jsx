import "./Collectt.css";

import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";

const products = [
  { id: 1, image: card1, category: "Wall Decor", title: "Boho Macramé Wall Hanging", text: "Layered ivory cording with a soft tasseled fringe, hand-knotted on natural wood.", price: 68 },
  { id: 2, image: card2, category: "Wall Decor", title: "Ivory Dreamcatcher", text: "A full round mandala of hand-knotted rope with fine, radiating detail work.", price: 84 },
  { id: 3, image: card4, category: "Plant Hangers", title: "Sage Plant Hanger", text: "A beaded cotton garland designed to cradle a small terracotta pot among greenery.", price: 32 },
  { id: 4, image: card2, category: "Wall Decor", title: "Natural Rope Hanging", text: "Undyed rope worked into concentric rings of knotwork for a quiet, sculptural look.", price: 76 },
  { id: 5, image: card3, category: "Wall Decor", title: "Mini Wall Decor", text: "A petite star-shaped weave in warm mustard, terracotta and sage tones.", price: 28 },
  { id: 6, image: card4, category: "Plant Hangers", title: "Woven Flower Holder", text: "Hand-strung wooden beads and cotton cord, sized for a single potted plant.", price: 36 },
  { id: 7, image: card1, category: "Wall Decor", title: "Textured Macramé Panel", text: "Chunky wrapped beads and long fringe create rhythm across a wide wall panel.", price: 92 },
  { id: 8, image: card4, category: "Plant Hangers", title: "Handmade Hanging Basket", text: "A relaxed, boho-styled hanger made to sit beautifully among your plant collection.", price: 40 },
  { id: 9, image: card2, category: "Home Decor", title: "Neutral Boho Decor", text: "An oversized round piece that anchors a wall with quiet, natural texture.", price: 58 },
  { id: 10, image: card3, category: "Gift Ideas", title: "Macramé Gift Piece", text: "A compact woven keepsake in mixed warm tones, ready to gift or display.", price: 24 },
  { id: 11, image: card1, category: "Wall Decor", title: "Layered Wall Hanging", text: "Our largest fringe piece — multiple tiers of knotwork for a true statement wall.", price: 88 },
  { id: 12, image: card3, category: "Gift Ideas", title: "Minimalist Gift Wreath", text: "A small colourful wreath, perfect as a housewarming or thank-you gift.", price: 30 },
];

function Collectt() {
  return (
    <>
      <section className="collectt">
        <div className="collectt__container">
          <div className="collectt__header">
            <span className="collectt__script">Handmade, one knot at a time</span>
            <h2 className="collectt__title">Our Collections</h2>
            <p className="collectt__subtitle">
              Wall hangings, plant hangers and gift pieces, all hand-knotted in
              our studio.
            </p>
          </div>

          <div className="collectt__grid">
            {products.map((item) => (
              <article className="collectt__item" key={item.id}>
                <div className="collectt__media">
                  <img
                    className="collectt__img"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                <div className="collectt__body">
                  <span className="collectt__category">{item.category}</span>
                  <h3 className="collectt__name">{item.title}</h3>
                  <p className="collectt__text">{item.text}</p>

                  <div className="collectt__footer">
                    <div className="collectt__price-box">
                      <span className="collectt__price">${item.price}</span>
                      <span className="collectt__demo">Demo price</span>
                    </div>
                    <a href="#" className="collectt__link">
                      View details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="collectt__cta-wrap">
        <div className="collectt__cta">
          <div className="collectt__cta-content">
            <h2 className="collectt__cta-title">
              Don't See Quite What You're Picturing?
            </h2>
            <p className="collectt__cta-text">
              We can design a one-of-a-kind piece around your colors, space and
              size.
            </p>
          </div>

          <a href="#" className="collectt__cta-btn">
            Request a custom piece
          </a>
        </div>
      </section>
    </>
  );
}

export default Collectt;