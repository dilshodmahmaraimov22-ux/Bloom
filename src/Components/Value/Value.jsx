import "./Value.css";

import card4 from "../Images/card4.png";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";

const rows = [
  {
    id: 1,
    image: card4,
    alt: "Beaded cotton garland on a white brick wall",
    label: "Our Story",
    title: "Started with a single cord",
    texts: [
      "Knots & Bloom began, in this imagined story, as a small kitchen-table hobby — a handful of cotton cord, a curiosity about knots, and a love for handmade texture.",
      "Over time the hobby grew into a studio practice, with each collection built around the same idea: that a handmade object, made slowly and with intention, carries a warmth that mass production can't replicate.",
    ],
  },
  {
    id: 2,
    image: card1,
    alt: "Macramé wall hanging with long cotton fringe",
    label: "Our Craft",
    title: "Knot by knot, by hand",
    texts: [
      "Each piece starts as loose lengths of natural cotton cord. From there, every square knot, spiral and wrap is tied entirely by hand — no machinery, no shortcuts.",
      "A single wall hanging can take anywhere from a few hours to several days, depending on its size and the density of the pattern. That time is part of what makes it feel special.",
    ],
    reverse: true,
    sand: true,
  },
  {
    id: 3,
    image: card2,
    alt: "Round hand-knotted mandala wall piece",
    label: "Our Philosophy",
    title: "Beauty in the imperfect",
    texts: [
      "We believe handmade pieces should feel like they were made by a person, not a machine — with the small, honest variations that come from working entirely by hand.",
      "Natural materials, warm neutral tones and thoughtful proportions guide every design, so each piece feels considered rather than trend-driven.",
    ],
  },
];

function Value() {
  return (
    <section className="value">
      <div className="value__header">
        <span className="value__script">Our world</span>
        <h2 className="value__title">Made by Hand. Made With Heart.</h2>
        <p className="value__lead">
          Knots &amp; Bloom celebrates the beauty of slow, handmade
          craftsmanship. Every knot, texture and pattern is thoughtfully
          designed to bring warmth and personality into everyday spaces.
        </p>

        <div className="value__badge">
          <svg className="value__badge-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5M12 8h.01" />
          </svg>
          <span>
            Knots &amp; Bloom is a fictional studio, created as a website design
            demo
          </span>
        </div>
      </div>
      {rows.map((row, index) => (
        <div key={row.id}>
          {index === 1 && (
            <div className="value__divider" aria-hidden="true">
              <svg
                className="value__divider-line"
                viewBox="0 0 1000 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 C 250 12, 400 14, 500 13 S 800 8, 1000 2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <span className="value__divider-dot"></span>
            </div>
          )}

          <div
            className={`value__row${row.sand ? " value__row--sand" : ""}`}
          >
            <div
              className={`value__inner${
                row.reverse ? " value__inner--reverse" : ""
              }`}
            >
              <div className="value__media">
                <img
                  className="value__img"
                  src={row.image}
                  alt={row.alt}
                  loading="lazy"
                />
              </div>

              <div className="value__content">
                <span className="value__script value__script--small">
                  {row.label}
                </span>
                <h3 className="value__heading">{row.title}</h3>
                {row.texts.map((text, i) => (
                  <p className="value__text" key={i}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Value;