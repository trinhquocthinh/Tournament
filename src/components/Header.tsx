'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/data/navigation';
import { useButtonRipple } from '@/hooks/useButtonRipple';
import { useNavbar } from '@/hooks/useNavbar';
import { useScroll } from '@/hooks/useScroll';

import './Header.scss';

export default function Header() {
  const { isScrolled } = useScroll();
  const { isOpen, toggle, close } = useNavbar();
  const pathname = usePathname();
  const { handleMouseMove } = useButtonRipple();

  const isActiveLink = (href: string) => {
    if (href.startsWith('/#')) {
      return pathname === '/' && href.includes(pathname);
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className={`header ${isScrolled ? 'active' : ''}`} data-header>
      <div className="container">
        <Link href="/" className="logo">
          <Image
            src="/assets/images/logo.svg"
            width={110}
            height={53}
            alt="Tournament home"
            priority
          />
        </Link>

        <nav className={`navbar ${isOpen ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            {navLinks.map(link => (
              <li key={link.label} className="navbar-item">
                <Link
                  href={link.href}
                  className={`navbar-link ${isActiveLink(link.href) ? 'active' : ''}`}
                  data-nav-link
                  onClick={close}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/#join"
          className="btn"
          data-btn
          onMouseMove={handleMouseMove}
        >
          join our team
        </Link>

        <button
          className={`nav-toggle-btn ${isOpen ? 'active' : ''}`}
          aria-label="toggle menu"
          data-nav-toggler
          onClick={toggle}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>
    </header>
  );
}
