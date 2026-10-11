import "./Banner.css";

const features = [
  {
    id: 1,
    title: "Handmade With Care",
    text: "Every knot is tied by hand, one cord at a time, with real attention to detail.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20.5s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.8a4.3 4.3 0 0 1 7.5 2.7c0 5.4-7.5 10-7.5 10Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Thoughtful Designs",
    text: "Patterns are planned with intention, balancing texture, shape and negative space.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Natural Materials",
    text: "Soft cotton cord, natural wood and organic tones, chosen to feel warm and real.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5c3.2 4 5.5 6.9 5.5 10a5.5 5.5 0 0 1-11 0c0-3.1 2.3-6 5.5-10Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Meaningful Spaces",
    text: "Made to be lived with — pieces that give a room warmth, story and personality.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 11.5 12 4l8 7.5V20H4v-8.5Z" />
        <path d="M9.5 20v-5.5h5V20" />
      </svg>
    ),
  },
];

function Banner() {
  return (
    <>
      <section className="banner">
        <div className="banner__container">
          <div className="banner__header">
            <span className="banner__script">The Knots &amp; Bloom difference</span>
            <h2 className="banner__title">Why Choose Handmade?</h2>
          </div>

          <div className="banner__grid">
            {features.map((item) => (
              <div className="banner__item" key={item.id}>
                <span className="banner__icon">{item.icon}</span>
                <h3 className="banner__name">{item.title}</h3>
                <p className="banner__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="banner__cta-wrap">
        <div className="banner__cta">
          <div className="banner__cta-content">
            <h2 className="banner__cta-title">Have Something Special in Mind?</h2>
            <p className="banner__cta-text">
              From custom colors to personalized sizes, let's create something
              made especially for you.
            </p>
          </div>

          <a href="#" className="banner__cta-btn">
            Request a custom piece
          </a>
        </div>
      </section>
    </>
  );
}

export default Banner;