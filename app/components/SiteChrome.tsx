"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";
import { assets, navItems } from "../data";
import { AboutAnimations } from "./AboutAnimations";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <AboutAnimations />
      <main id="main">{children}</main>
      <Footer />
      <a
        className="whatsapp-float"
        href="https://wa.me/233256766464"
        aria-label="Chat with KHY on WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
      </a>
    </>
  );
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={`site-header ${isNavOpen ? "nav-open" : ""}`}>
      <Link className="brand" href="/" aria-label="KHY home">
        <Image src={assets.logo} alt="KHY" width={94} height={128} priority />
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isNavOpen}
        aria-controls="site-nav"
        onClick={() => setIsNavOpen((value) => !value)}
      >
        {isNavOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        <span className="sr-only">Open menu</span>
      </button>

      <nav className="site-nav" id="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            className={pathname === item.href ? "active" : undefined}
            href={item.href}
            key={item.href}
            onClick={() => setIsNavOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="header-cta" href="#contact">
        Contact us
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer
      className="site-footer"
      id="contact"
      style={
        {
          "--footer-image": `url("${assets.footer}")`,
        } as CSSProperties & Record<"--footer-image", string>
      }
    >
      <div className="footer-content">
        <p className="eyebrow">Let&apos;s talk</p>
        <h2>About your project</h2>
        <Link className="footer-cta" href="#contact">
          Get in touch
        </Link>
        <h3>Contact info</h3>
        <address>
          <span>No. 5 Labone Crescent, Accra - Ghana</span>
          <a href="tel:+233256766464">+233 25 676 6464</a>
          <a href="mailto:info@khyltd.com">info@khyltd.com</a>
        </address>
        <div className="socials" aria-label="Social links">
          <a
            href="https://www.instagram.com/khybusiness?igsh=YzVsOG9oODdjMzl0"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/company/khybusiness/" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a
            href="https://www.tiktok.com/@khy_business?_r=1&_t=ZS-96gJG74sNy0"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </div>
        <p className="copyright">© Khy 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="1.2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M6.94 8.88H3.62v10.5h3.32V8.88ZM5.28 7.44a1.91 1.91 0 1 0-.02-3.82 1.91 1.91 0 0 0 .02 3.82Zm13.1 11.94h3.31v-5.77c0-2.83-.6-5.01-3.92-5.01a3.43 3.43 0 0 0-3.09 1.7h-.05V8.88h-3.18v10.5h3.31v-5.2c0-1.37.26-2.7 1.96-2.7 1.67 0 1.66 1.57 1.66 2.79v5.11Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M16.58 3.5c.37 2.23 1.63 3.57 3.92 3.71v3.16a6.56 6.56 0 0 1-3.84-1.18v5.87c0 2.97-1.8 5.44-5.21 5.44-3.08 0-5.31-2.04-5.31-4.93 0-3.39 2.92-5.2 6.13-4.49v3.29c-1.54-.5-2.87.21-2.87 1.42 0 1.02.78 1.62 1.82 1.62 1.35 0 2.04-.76 2.04-2.52V3.5h3.32Z" />
    </svg>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="hero" aria-labelledby="page-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="page-title">{title}</h1>
      <p className="hero-copy">{copy}</p>
    </section>
  );
}
