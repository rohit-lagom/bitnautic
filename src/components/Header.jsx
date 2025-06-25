'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'BTNT Docs', href: '/docs' },
    { name: 'BTNT Enterprise', href: '/enterprise' },
    { name: 'BTNT Transport', href: '/transport' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 my-4 mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg'
          : 'bg-blue-900/90 backdrop-blur-xl border border-blue-300/40 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-3 relative z-10">
            <div className="relative">
              <img
                src="https://bitnautic.com/assets/images/Bitlogo/White.png"
                alt="BitNautic Logo"
                className={`h-10 w-auto transition-all duration-300 ${
                  scrolled ? 'brightness-0 saturate-100' : 'brightness-100'
                }`}
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-slate-700 hover:text-blue-600'
                    : 'text-white/90 hover:text-blue-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-4 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                scrolled
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                  : 'bg-white/20 border border-white/30 backdrop-blur-md text-white hover:bg-white/30'
              }`}
            >
              Request Demo
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              scrolled ? 'text-slate-700' : 'text-white'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-blue-900/90 backdrop-blur-xl border-t border-blue-400/20">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block bg-white/20 border border-white/30 backdrop-blur-md text-white px-4 py-3 rounded-xl font-semibold text-center hover:bg-white/30 transition-all duration-300 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
