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
        className="font-extrabold uppercase text-2xl text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
        SARUNG
      </a>

      <ul className='hidden md:flex items-center space-x-8'>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className='text-gray-300 font-bold hover:text-cyan-300 transition-colors duration-300'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-4'>
        <a href='#' className='text-white relative border p-1.5 rounded-full border-gray-300'>
          <p className='absolute -top-2 -right-2 bg-red-700 w-5 h-5 flex justify-center items-center rounded-full text-xs font-semibold'>1</p>
          <ShoppingCart />
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
