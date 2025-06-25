'use client';
import Link from 'next/link';
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/services' },
  ];

  const resources = [
    { name: 'BTNT Enterprise', href: '/enterprise' },
    { name: 'BTNT Docs', href: '/docs' },
    { name: 'BTNT Transport', href: '/transport' },
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(30,64,175,0.1)_35%,rgba(30,64,175,0.1)_65%,transparent_65%)] bg-[length:20px_20px] opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://bitnautic.com/assets/images/Bitlogo/White.png"
                alt="BitNautic Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Revolutionizing global shipping and logistics with blockchain technology. 
              Secure, transparent, and efficient supply chain management.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800/80 backdrop-blur-lg border border-blue-300/30 rounded-full flex items-center justify-center hover:bg-blue-600/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-sm">
                  Mediaworks 191 Wood Lane<br />
                  London W12 7FP
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:hello@bitnautic.com"
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                >
               contact@bitnautic.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-400 text-sm">
            Copyright © 2025 BitNautic, All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
