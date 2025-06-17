import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="mb-4">
              <div className="bg-blue-700 text-white font-bold text-xl inline-block px-4 py-2 rounded">
                SAFE
                <span className="text-yellow-400"> rent a car</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Iznajmljivanje automobila je zgodan i bezbrižan način da istražite novi grad ili zemlju. Sa našim modernim voznim parkom i profesionalnom uslugom, vaše putovanje će biti sigurno i udobno.
            </p>
            <p className="italic text-gray-300">
              Vozite bezbedno sa nama!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Početna strana
                </a>
              </li>
              <li>
                <a href="/automobili" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Automobili
                </a>
              </li>
              <li>
                <a href="/dugorocni-najam" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Biznis ponuda
                </a>
              </li>
              <li>
                <a href="/uslovi-najma" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Uslovi najma
                </a>
              </li>
              <li>
                <a href="/o-nama" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  O nama
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Blog
                </a>
              </li>
              <li>
                <a href="/kontakt" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Bulevar Oslobođenja 40, Beograd</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+381659898385" className="hover:text-yellow-400 transition-colors">065 989 8385</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:rent@saferentacar.rs" className="hover:text-yellow-400 transition-colors">rent@saferentacar.rs</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Pon - Pet: 08:00 - 20:00</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Sub - Ned: 09:00 - 17:00</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Prijavite se na naš newsletter i budite prvi koji će saznati o specijalnim ponudama i akcijama.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Vaša email adresa" 
                className="px-4 py-2 rounded bg-blue-800 border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500 transition-colors"
              >
                Prijavi se
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 SAFE Rent a Car | Beograd, Srbija. Sva prava zadržana.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Politika privatnosti</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Uslovi korišćenja</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
