'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'BTNT Docs', href: '/docs' },
  { name: 'BTNT Enterprise', href: '/enterprise' },
  { name: 'BTNT Transport', href: '/transport' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-4 z-50 w-full">
      <div className="mx-4 lg:mx-auto max-w-7xl rounded-2xl bg-blue-900/80 backdrop-blur-xl border border-blue-300/40 shadow-md transition-all duration-500">
        <div className="flex justify-between items-center h-16 lg:h-20 px-6">
          <Link href="/" className="relative z-10 flex items-center space-x-3">
            <Image
              src="/assets/logo/WhiteLogoFull.png"
              alt="BitNautic Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="px-4 py-2 rounded-xl font-medium text-white/90 hover:text-blue-300 transition-all duration-300"
              >
                {name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 rounded-xl font-semibold shadow-lg bg-white/20 border border-white/30 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300"
            >
              Request Demo
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white rounded-xl transition-all duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-blue-900/90 backdrop-blur-xl border-t border-blue-400/20 px-4 py-6 rounded-b-2xl">
            <div className="space-y-2">
              {navItems.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                >
                  {name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center bg-white/20 border border-white/30 backdrop-blur-md text-white px-4 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg"
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
