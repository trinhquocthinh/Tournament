'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useButtonRipple } from '@/hooks/useButtonRipple';
import './HeroSection.scss';

export default function HeroSection() {
  const { handleMouseMove } = useButtonRipple();

  return (
    <div className="hero has-before" id="home">
      <div className="container">
        <p className="section-subtitle">Enjoy The Games</p>

        <h1 className="h1 title hero-title">
          Epic Games Made For <br /> True Gamers!
        </h1>

        <Link
          href="/#join"
          className="btn"
          data-btn
          onMouseMove={handleMouseMove}
        >
          Join With Us
        </Link>

        <div className="hero-banner">
          <Image
            src="/assets/images/hero-banner.png"
            width={850}
            height={414}
            alt="hero banner"
            className="w-100"
            priority
          />

          <Image
            src="/assets/images/hero-banner-bg.png"
            width={1000}
            height={600}
            alt=""
            className="hero-banner-bg"
          />
        </div>
      </div>
    </div>
  );
}
