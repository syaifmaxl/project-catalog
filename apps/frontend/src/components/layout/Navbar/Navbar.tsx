import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#', label: 'Beranda' },
  { href: '#kategori', label: 'Kategori' },
  { href: '#galeri', label: 'Galeri' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className='fixed top-3.5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl mx-auto px-4 py-3.5 z-50 
                 flex justify-between items-center
                 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg'
    >
      <a
        href='#'
        className='text-2xl font-bold text-white tracking-wider'
      >
        SARUNG
      </a>

      <ul className='hidden md:flex items-center space-x-8'>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className='text-white hover:text-cyan-300 transition-colors duration-300'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-4'>
        <a href='#' className='text-white relative'>
          <p className='absolute -top-2 -right-2 bg-red-600 w-5 h-5 flex justify-center items-center rounded-full text-xs font-semibold'>1</p>
          <ShoppingCart />
        </a>

        <a
          href='#aksi'
          className='hidden md:inline-block bg-cyan-500 text-white px-5 py-2 rounded-full hover:bg-cyan-600 transition-transform duration-300 hover:scale-105'
        >
          Login
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden text-white text-2xl'
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
