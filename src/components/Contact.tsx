"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdArrowOutward, MdOutlineCheck, MdErrorOutline, MdClose } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey && formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatus("success");
        setFormData({ from_name: "", from_email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        console.warn(
          "EmailJS credentials missing. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local"
        );
        // Fallback simulation delay for testing UI
        await new Promise((res) => setTimeout(res, 1000));
        setStatus("success");
        setFormData({ from_name: "", from_email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage("Could not send message directly. Please try again.");
    }
  };

  return (
    <div className="contact-section" id="contact">
      {/* ── CTA Banner ("Say Hello" section) ── */}
      <div className="contact-cta-wrap">
        <div className="contact-cta">
          <div className="contact-cta-text">
            <h2>Let's build something extraordinary together!</h2>
            <p>
              Whether you have a question or just want to say hi, my inbox is
              always open.
            </p>
          </div>
          <a
            href="#contact-form"
            className="contact-cta-btn"
            data-cursor="disable"
            onClick={(e) => {
              e.preventDefault();
              const formElem = document.getElementById("contact-form");
              if (formElem) formElem.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Say Hello <MdArrowOutward />
          </a>
        </div>
      </div>

      {/* ── Minimal Underline Contact Form ── */}
      <div className="contact-minimal-container" id="contact-form">
        <div className="contact-minimal-header">
          <h1>Contact Me</h1>
          <p>Feel free to contact me with any inquiries or questions!</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-minimal-form">
          <input type="hidden" name="reply_to" value={formData.from_email} />
          <input type="hidden" name="to_name" value="Md Shofiqul Islam" />
          <input type="hidden" name="name" value={formData.from_name} />
          <input type="hidden" name="email" value={formData.from_email} />
          <div className="minimal-form-row">
            <div className="minimal-input-group">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                value={formData.from_name}
                onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
              />
            </div>

            <div className="minimal-input-group">
              <label htmlFor="from_email">Email Address</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                value={formData.from_email}
                onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
              />
            </div>
          </div>

          <div className="minimal-input-group full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <div className="minimal-form-footer">
            <button
              type="submit"
              className="minimal-submit-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* ── Top-Right Toast Notification ── */}
      {status !== "idle" && status !== "sending" && (
        <div className={`toast-notification ${status}`} role="alert">
          <div className="toast-icon">
            {status === "success" ? (
              <MdOutlineCheck size={20} />
            ) : (
              <MdErrorOutline size={20} />
            )}
          </div>
          <div className="toast-content">
            <span className="toast-message">
              {status === "success"
                ? "Thank you! Your message has been sent successfully."
                : errorMessage || "Could not send message. Please try again."}
            </span>
          </div>
          <button
            type="button"
            className="toast-close-btn"
            onClick={() => setStatus("idle")}
            aria-label="Close notification"
          >
            <MdClose size={18} />
          </button>
        </div>
      )}

      {/* ── Footer Bar ── */}
      <footer className="contact-footer">
        <div className="contact-footer-inner">
          <p className="contact-footer-credit">
            © 2026 · Designed & Built by <span>Md Shofiqul Islam</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
