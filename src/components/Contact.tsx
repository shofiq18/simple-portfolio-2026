import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      {/* ── CTA Banner ── */}
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
            href="mailto:shafiqulislam25021998@gmail.com"
            className="contact-cta-btn"
            data-cursor="disable"
          >
            Say Hello <MdArrowOutward />
          </a>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="contact-footer-inner">
          <p className="contact-footer-credit">
            © 2025 · Designed & Built by <span>Md Shofiqul Islam</span>
          </p>
        </div>
      </footer>
    </div>

  );
};

export default Contact;
