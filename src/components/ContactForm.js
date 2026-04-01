import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.message.trim() || !form.name.trim()) return;
    setStatus("Sending...");
    const btn = e.target.querySelector("button");
    btn.disabled = true;

    const fullMessage = `
 **New Message from Portfolio!**
👤 Name: ${form.name}
📧 Email: ${form.email}
💬 Message: ${form.message}
    `;

    try {
      await fetch(
        "https://hook.eu2.make.com/whtv5yyjpf33zncp0t2ibhjmi5blrlyl",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: fullMessage }),
        },
      );
      console.log(form);

      setStatus("Sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Error. Try again.");
      e.target.querySelector("button").disabled = false;
    } finally {
      btn.disabled = false;
    }
  };

  return (
    <div className="minimal-contact-wrapper">
      {/* <h2 className="say-hello">Say hello.</h2> */}

      <form onSubmit={handleSubmit} className="minimal-form">
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="My name is..."
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="My email is..."
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <textarea
            name="message"
            placeholder="I'd like to talk about..."
            value={form.message}
            onChange={handleChange}
            rows="1"
            required
          />
        </div>

        <button type="submit" className="submit-minimal">
          Send message <span>→</span>
        </button>

        {status && <p className="status-msg">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
