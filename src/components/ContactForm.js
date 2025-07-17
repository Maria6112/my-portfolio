import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill out all fields");
      return;
    }
    try {
      await emailjs.send(
        "service_4qbsue1",
        "template_mje15rp",
        form,
        "Scuu1QvAY13jEqBtb"
      );
      setForm({ name: "", email: "", message: "" });
      setStatus("Message sent!");
    } catch (err) {
      setStatus("Error in sending");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* <h2 className="fade-in-title">Say Hello</h2> */}
      <h2 className="animated-title">
        {"Say Hello".split("").map((char, i) => (
          <span
            key={i}
            className="letter"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        required
      />

      <label>Message</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="How can I help you?"
        rows="5"
        required
      />

      <button type="submit">Send Message ➤</button>

      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default ContactForm;
