import { useState } from "react";
import "./Reg.css";

const contacts = [
  {
    id: 1,
    label: "Email",
    lines: ["hello@knotsandbloom.example"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Phone",
    lines: ["+00 000 000 0000"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h3.5l1.7 4.2-2.2 1.4a11 11 0 0 0 5.4 5.4l1.4-2.2L19 14.5V18a1.5 1.5 0 0 1-1.6 1.5A14.5 14.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Location",
    lines: ["Demo Studio, Creative Avenue"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Hours",
    lines: ["Monday – Saturday", "10:00 AM – 6:00 PM"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
];

const socials = [
  {
    id: 1,
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="16.8" cy="7.2" r="0.6" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Pinterest",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M10.6 17.5 12 10.2M10.2 13.2c-1-2.6.6-4.4 2.5-4.4 1.7 0 2.6 1.2 2.4 2.7-.2 1.6-1.2 2.7-2.4 2.7-.8 0-1.3-.5-1.5-1.1" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 20v-7.2h2.4l.4-2.8h-2.8V8.3c0-.8.3-1.4 1.4-1.4h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.7V10H8.2v2.8h2.4V20" />
      </svg>
    ),
  },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

function Reg() {
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
    <section className="reg">
      <div className="reg__container">
        <div className="reg__header">
          <span className="reg__script">Say hello</span>
          <h2 className="reg__title">Let's Create Something Beautiful</h2>
          <p className="reg__lead">
            Questions about a piece, a custom order, or just want to say hi?
            Reach out below.
          </p>
        </div>

        <div className="reg__layout">
          <aside className="reg__info">
            <span className="reg__tag">Demo contact information</span>

            <ul className="reg__list">
              {contacts.map((item) => (
                <li className="reg__item" key={item.id}>
                  <span className="reg__icon">{item.icon}</span>
                  <div className="reg__item-body">
                    <h3 className="reg__item-label">{item.label}</h3>
                    {item.lines.map((line, i) => (
                      <p className="reg__item-text" key={i}>
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <div className="reg__socials">
              {socials.map((s) => (
                <a
                  href="#"
                  className="reg__social"
                  aria-label={s.name}
                  key={s.id}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </aside>

          <form className="reg__form" onSubmit={handleSubmit}>
            <div className="reg__row">
              <div className="reg__field">
                <label className="reg__label" htmlFor="reg-name">
                  Name
                </label>
                <input
                  className="reg__input"
                  id="reg-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="reg__field">
                <label className="reg__label" htmlFor="reg-email">
                  Email
                </label>
                <input
                  className="reg__input"
                  id="reg-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="reg__field">
              <label className="reg__label" htmlFor="reg-subject">
                Subject
              </label>
              <input
                className="reg__input"
                id="reg-subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="reg__field">
              <label className="reg__label" htmlFor="reg-message">
                Message
              </label>
              <textarea
                className="reg__input reg__textarea"
                id="reg-message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="reg__actions">
              <button className="reg__btn" type="submit">
                Send demo message
              </button>
              {sent && (
                <p className="reg__success" role="status">
                  Thank you! This was a demo, nothing was sent.
                </p>
              )}
              <p className="reg__note">
                This is a demo website. No real message has been sent.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Reg;