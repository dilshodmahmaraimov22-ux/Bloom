import { useState } from "react";
import "./Order.css";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Share Your Idea",
    text: "Tell us about the space, colors and style you're picturing.",
  },
  {
    id: 2,
    number: "02",
    title: "Choose Your Style",
    text: "We'll suggest patterns, sizing and cord tones to match your vision.",
  },
  {
    id: 3,
    number: "03",
    title: "We Create",
    text: "Your piece is hand-knotted, start to finish, in the studio.",
  },
  {
    id: 4,
    number: "04",
    title: "Enjoy Your Piece",
    text: "Your one-of-a-kind macramé piece arrives ready to hang.",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  create: "",
  color: "",
  size: "",
  message: "",
};

function Order() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(initialForm);
    setSent(true);
  };

  return (
    <section className="order">
      <div className="order__top">
        <div className="order__intro">
          <span className="order__script">Made just for you</span>
          <h2 className="order__title">Create Something Uniquely Yours</h2>
          <p className="order__lead">
            Have a specific color, size or design in mind? Tell us what you're
            imagining and we'll turn your idea into a beautiful handmade piece.
          </p>
        </div>

        <div className="order__steps">
          {steps.map((step) => (
            <div className="order__step" key={step.id}>
              <span className="order__number">{step.number}</span>
              <h3 className="order__step-title">{step.title}</h3>
              <p className="order__step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="order__divider" aria-hidden="true">
        <svg
          className="order__divider-line"
          viewBox="0 0 1000 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0 12 C 250 14, 400 12, 500 10 S 800 6, 1000 4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <span className="order__divider-dot"></span>
      </div>

      <div className="order__bottom">
        <div className="order__form-head">
          <span className="order__script">Demo request form</span>
          <h3 className="order__form-title">Tell Us What You're Imagining</h3>
          <p className="order__form-lead">
            This form is for demonstration only — nothing you enter is submitted
            or stored.
          </p>
        </div>

        <form className="order__form" onSubmit={handleSubmit}>
          <div className="order__grid">
            <div className="order__field">
              <label className="order__label" htmlFor="order-name">
                Name
              </label>
              <input
                className="order__input"
                id="order-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="order__field">
              <label className="order__label" htmlFor="order-email">
                Email
              </label>
              <input
                className="order__input"
                id="order-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="order__field">
              <label className="order__label" htmlFor="order-phone">
                Phone
              </label>
              <input
                className="order__input"
                id="order-phone"
                name="phone"
                type="tel"
                placeholder="+00 000 000 0000"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="order__field">
              <label className="order__label" htmlFor="order-create">
                What would you like to create?
              </label>
              <input
                className="order__input"
                id="order-create"
                name="create"
                type="text"
                placeholder="e.g. Large wall hanging"
                value={form.create}
                onChange={handleChange}
              />
            </div>

            <div className="order__field">
              <label className="order__label" htmlFor="order-color">
                Preferred Color
              </label>
              <input
                className="order__input"
                id="order-color"
                name="color"
                type="text"
                placeholder="e.g. Ivory & sage"
                value={form.color}
                onChange={handleChange}
              />
            </div>

            <div className="order__field">
              <label className="order__label" htmlFor="order-size">
                Approximate Size
              </label>
              <input
                className="order__input"
                id="order-size"
                name="size"
                type="text"
                placeholder="e.g. 90cm wide"
                value={form.size}
                onChange={handleChange}
              />
            </div>

            <div className="order__field order__field--full">
              <label className="order__label" htmlFor="order-message">
                Message / Requirements
              </label>
              <textarea
                className="order__input order__textarea"
                id="order-message"
                name="message"
                rows="4"
                placeholder="Tell us more about the space, style or occasion..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button className="order__btn" type="submit">
            Submit demo request
          </button>

          {sent && (
            <p className="order__success" role="status">
              Thank you! This was a demo, so nothing was sent.
            </p>
          )}

          <p className="order__note">
            This is only a frontend demo form. It is not connected to a real
            backend and no data is sent or stored.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Order;