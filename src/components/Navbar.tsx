import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Philosophy', path: '/philosophy' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-vercel-black rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rotate-45" />
              </div>
              <span className="font-semibold text-xl tracking-tightest">VOLT</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-vercel-black',
                    location.pathname === link.path ? 'text-vercel-black' : 'text-gray-500'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
