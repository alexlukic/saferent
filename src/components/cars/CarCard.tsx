import React from 'react';
import { Star } from 'lucide-react';

interface CarCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  features: {
    doors: number;
    transmission: 'manual' | 'automatic';
    ac: boolean;
    seats: number;
    luggage: number;
    fuel: string;
  };
}

const CarCard: React.FC<CarCardProps> = ({ 
  name, 
  category, 
  price, 
  image, 
  features 
}) => {
  // Ensure image path is correct for production environment
  const imagePath = image.startsWith('/') ? image : `/${image}`;
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Car Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imagePath} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error(`Failed to load image: ${target.src}`);
            target.src = '/cars/car-placeholder.jpg'; // Fallback image
          }}
        />
        <div className="absolute top-0 left-0 bg-blue-700 text-white px-3 py-1 text-sm font-semibold">
          {category}
        </div>
      </div>
      
      {/* Car Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">4.0 (12 recenzija)</span>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-xs mt-1">{features.doors} vrata</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs mt-1">{features.transmission === 'automatic' ? 'Automatik' : 'Manuelni'}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
              <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
            </svg>
            <span className="text-xs mt-1">{features.ac ? 'Klima' : 'Bez klime'}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-xs mt-1">{features.seats} putnika</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
            <span className="text-xs mt-1">{features.luggage} kofera</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
            <span className="text-xs mt-1">{features.fuel}</span>
          </div>
        </div>
        
        {/* Price and Buttons */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-2xl font-bold text-blue-700">{price}€</span>
            <span className="text-sm text-gray-500 ml-1">/ dan</span>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-blue-700 text-blue-700 rounded hover:bg-blue-50 transition-colors text-sm font-medium">
              Detalji
            </button>
            <button className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors text-sm font-medium">
              Rezerviši
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
