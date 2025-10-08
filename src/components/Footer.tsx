'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useButtonRipple } from '@/hooks/useButtonRipple';
import './Footer.scss';

export default function Footer() {
  const { handleMouseMove } = useButtonRipple();

  return (
    <footer className="footer">
      <div className="section footer-top">
        <div className="container">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Image
                src="/assets/images/logo.svg"
                width={150}
                height={73}
                alt="Tournament logo"
              />
            </Link>

            <p className="footer-text">
              Our success in creating business solutions is due in large part to
              our talented and highly committed team.
            </p>

            <ul className="social-list">
              <li>
                <Link href="https://facebook.com" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </Link>
              </li>

              <li>
                <Link href="https://twitter.com" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </Link>
              </li>

              <li>
                <Link href="https://instagram.com" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </Link>
              </li>

              <li>
                <Link href="https://youtube.com" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-list">
            <p className="title footer-list-title has-after">Useful Links</p>

            <ul>
              <li>
                <Link href="/tournament" className="footer-link">
                  Tournament Hub
                </Link>
              </li>

              <li>
                <Link href="/article" className="footer-link">
                  Blog &amp; News
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="footer-link">
                  Privacy and Policy
                </Link>
              </li>

              <li>
                <Link href="/terms-of-use" className="footer-link">
                  Terms of Use
                </Link>
              </li>

              <li>
                <Link href="/#join" className="footer-link">
                  Join The Squad
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-list">
            <p className="title footer-list-title has-after">Contact Us</p>

            <div className="contact-item">
              <span className="span">Location:</span>

              <address className="contact-link">
                153 Williamson Plaza, Maggieberg, MT 09514
              </address>
            </div>

            <div className="contact-item">
              <span className="span">Join Us:</span>

              <a href="mailto:Info@Tournament.com" className="contact-link">
                Info@Tournament.com
              </a>
            </div>

            <div className="contact-item">
              <span className="span">Phone:</span>

              <a href="tel:+12345678910" className="contact-link">
                +1 (234) 567-8910
              </a>
            </div>
          </div>

          <div className="footer-list">
            <p className="title footer-list-title has-after">
              Newsletter Signup
            </p>

            <form action="/" method="get" className="footer-form">
              <input
                type="email"
                name="email_address"
                required
                placeholder="Your Email"
                autoComplete="off"
                className="input-field"
              />

              <button
                type="submit"
                className="btn"
                data-btn
                onMouseMove={handleMouseMove}
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2025 Tournament Esports. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
