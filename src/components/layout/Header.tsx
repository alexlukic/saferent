import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, Facebook, Instagram, MessageCircle, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with contact info and social media */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-gray-100">
        <div className="flex items-center">
          <Phone size={16} className="text-blue-700 mr-1" />
          <a href="tel:+381659898385" className="text-sm font-medium hover:text-blue-700 transition-colors">
            065 989 8385
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm hover:text-blue-700 transition-colors">Lokacije</a>
          <a href="https://wa.me/381659898385" className="flex items-center text-sm hover:text-blue-700 transition-colors">
            <MessageCircle size={16} className="mr-1" />
            WhatsApp
          </a>
          <a href="https://facebook.com" className="text-sm hover:text-blue-700 transition-colors">
            <Facebook size={16} />
          </a>
          <a href="https://instagram.com" className="text-sm hover:text-blue-700 transition-colors">
            <Instagram size={16} />
          </a>
          <div className="flex items-center space-x-2 ml-4">
            <button className="text-sm flex items-center hover:text-blue-700 transition-colors">
              <Globe size={16} className="mr-1" />
              English
            </button>
            <button className="text-sm flex items-center hover:text-blue-700 transition-colors">
              <Globe size={16} className="mr-1" />
              Русский
            </button>
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="bg-blue-700 text-white font-bold text-xl px-4 py-2 rounded">
            SAFE
            <span className="text-yellow-400"> rent a car</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-blue-700 transition-colors">POČETNA</Link>
          <Link to="/automobili" className="font-medium hover:text-blue-700 transition-colors">AUTOMOBILI</Link>
          <Link to="/dugorocni-najam" className="font-medium hover:text-blue-700 transition-colors">DUGOROČNI NAJAM</Link>
          <Link to="/uslovi-najma" className="font-medium hover:text-blue-700 transition-colors">USLOVI NAJMA</Link>
          <Link to="/o-nama" className="font-medium hover:text-blue-700 transition-colors">O NAMA</Link>
          <Link to="/blog" className="font-medium hover:text-blue-700 transition-colors">BLOG</Link>
          <Link to="/kontakt" className="font-medium hover:text-blue-700 transition-colors">KONTAKT</Link>
          <Link to="/rezervacija" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded transition-colors">
            Rezerviši
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-4">
              <Link to="/" className="font-medium hover:text-blue-700 transition-colors">POČETNA</Link>
              <Link to="/automobili" className="font-medium hover:text-blue-700 transition-colors">AUTOMOBILI</Link>
              <Link to="/dugorocni-najam" className="font-medium hover:text-blue-700 transition-colors">DUGOROČNI NAJAM</Link>
              <Link to="/uslovi-najma" className="font-medium hover:text-blue-700 transition-colors">USLOVI NAJMA</Link>
              <Link to="/o-nama" className="font-medium hover:text-blue-700 transition-colors">O NAMA</Link>
              <Link to="/blog" className="font-medium hover:text-blue-700 transition-colors">BLOG</Link>
              <Link to="/kontakt" className="font-medium hover:text-blue-700 transition-colors">KONTAKT</Link>
              <Link to="/rezervacija" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded transition-colors w-full text-center">
                Rezerviši
              </Link>
            </nav>
            <div className="flex flex-col space-y-2 py-4 border-t">
              <a href="tel:+381659898385" className="flex items-center text-sm">
                <Phone size={16} className="text-blue-700 mr-2" />
                065 989 8385
              </a>
              <a href="https://wa.me/381659898385" className="flex items-center text-sm">
                <MessageCircle size={16} className="mr-2" />
                WhatsApp
              </a>
              <div className="flex space-x-4 mt-2">
                <a href="https://facebook.com" className="text-sm">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" className="text-sm">
                  <Instagram size={20} />
                </a>
              </div>
              <div className="flex space-x-4 mt-2">
                <button className="text-sm flex items-center">
                  <Globe size={16} className="mr-1" />
                  English
                </button>
                <button className="text-sm flex items-center">
                  <Globe size={16} className="mr-1" />
                  Русский
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
