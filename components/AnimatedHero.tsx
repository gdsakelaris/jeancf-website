'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export default function AnimatedHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity based on scroll position
  const overlayOpacity = Math.max(0.6 - scrollY / 800, 0.2);
  const textOpacity = Math.max(1 - scrollY / 300, 0);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/food.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Animated Overlay */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-100"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div
        className="relative z-10 h-full flex items-center justify-center px-4"
        style={{ opacity: textOpacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            No Child Should Go Hungry
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            Addressing food insecurity for children isn't just a mission—it's a continuation of my late mother's legacy.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            She lived by the biblical parable of using five loaves of bread to feed thousands, trusting that compassion and service multiply what we give.
          </p>
          <Link
            href={ROUTES.donate}
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Support Children's Nutrition
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        style={{ opacity: textOpacity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
