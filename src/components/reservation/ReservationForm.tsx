import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, User } from 'lucide-react';

// Sample car data (same as in CarsPage)
const allCars = [
  {
    id: '1',
    name: 'VW Polo 1.0 TSI',
    category: 'Economy',
    price: 25,
    image: '/cars/vw-polo.jpg',
    features: {
      doors: 5,
      transmission: 'manual' as const,
      ac: true,
      seats: 5,
      luggage: 2,
      fuel: 'Benzin'
    }
  },
  {
    id: '2',
    name: 'VW Polo 1.0 TSI Automatic',
    category: 'Economy Automatic',
    price: 28,
    image: '/cars/vw-polo-auto.jpg',
    features: {
      doors: 5,
      transmission: 'automatic' as const,
      ac: true,
      seats: 4,
      luggage: 1,
      fuel: 'Benzin'
    }
  },
  {
    id: '3',
    name: 'Škoda Fabia Automatic 1.0 TSI',
    category: 'Compact Automatic',
    price: 24,
    image: '/cars/skoda-fabia.jpg',
    features: {
      doors: 5,
      transmission: 'automatic' as const,
      ac: true,
      seats: 5,
      luggage: 2,
      fuel: 'Benzin'
    }
  },
  {
    id: '4',
    name: '2024 Škoda Fabia 1.5 TSI',
    category: 'Compact Automatic',
    price: 30,
    image: '/cars/skoda-fabia-2024.jpg',
    features: {
      doors: 5,
      transmission: 'automatic' as const,
      ac: true,
      seats: 5,
      luggage: 2,
      fuel: 'Benzin'
    }
  },
  {
    id: '5',
    name: '2024 Skoda Scala 1.5 TSI',
    category: 'Compact Automatic',
    price: 33,
    image: '/cars/skoda-scala.jpg',
    features: {
      doors: 5,
      transmission: 'automatic' as const,
      ac: true,
      seats: 5,
      luggage: 3,
      fuel: 'Benzin'
    }
  }
];

const ReservationForm: React.FC = () => {
  const [showCarList, setShowCarList] = useState(false);
  const [availableCars, setAvailableCars] = useState(allCars);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('price-asc');
  
  // Apply sorting and update available cars
  const applySorting = (sortValue: string) => {
    let result = [...allCars];
    
    if (sortValue === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    setAvailableCars(result);
  };
  
  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = e.target.value as 'price-asc' | 'price-desc' | 'name';
    setSortBy(newSortBy);
    applySorting(newSortBy);
  };
  
  // Apply initial sorting
  useEffect(() => {
    applySorting(sortBy);
  }, []);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCarList(true);
  };
  
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Rezervišite vozilo</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pickup Location */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Lokacija preuzimanja
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={18} className="text-gray-400" />
                </div>
                <select 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Izaberite lokaciju...</option>
                  <option value="beograd-centar">Beograd - Centar</option>
                  <option value="beograd-aerodrom">Beograd - Aerodrom</option>
                </select>
              </div>
            </div>

            {/* Return Location */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Lokacija vraćanja
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={18} className="text-gray-400" />
                </div>
                <select 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Izaberite lokaciju...</option>
                  <option value="beograd-centar">Beograd - Centar</option>
                  <option value="beograd-aerodrom">Beograd - Aerodrom</option>
                </select>
              </div>
            </div>

            {/* Pickup Date */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Datum preuzimanja vozila
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar size={18} className="text-gray-400" />
                </div>
                <input 
                  type="date" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Izaberite datum"
                  required
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Datum vraćanja vozila
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar size={18} className="text-gray-400" />
                </div>
                <input 
                  type="date" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Izaberite datum"
                  required
                />
              </div>
            </div>

            {/* Pickup Time */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Vreme preuzimanja
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock size={18} className="text-gray-400" />
                </div>
                <input 
                  type="time" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Unesite željeno vreme"
                  required
                />
              </div>
            </div>

            {/* Return Time */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Vreme vraćanja
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock size={18} className="text-gray-400" />
                </div>
                <input 
                  type="time" 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Unesite željeno vreme"
                  required
                />
              </div>
            </div>

            {/* Driver Age */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Starost vozača
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <select 
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="21-70">21 do 70 godina</option>
                  <option value="under-21">Ispod 21 godine</option>
                  <option value="over-70">Preko 70 godina</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button 
              type="submit" 
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center"
            >
              <span className="mr-2">Pronađi dostupna vozila</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      
      {/* Available Cars Section */}
      {showCarList && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 sm:mb-0">Dostupna vozila</h2>
            <div className="flex items-center">
              <span className="mr-2">Sortiraj po:</span>
              <select 
                value={sortBy}
                onChange={handleSortChange}
                className="border border-gray-300 rounded px-2 py-1"
              >
                <option value="price-asc">Cena (rastuće)</option>
                <option value="price-desc">Cena (opadajuće)</option>
                <option value="name">Naziv</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableCars.map(car => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 h-48 sm:h-auto relative">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/cars/car-placeholder.jpg'; // Fallback image
                      }}
                    />
                    <div className="absolute top-0 left-0 bg-blue-700 text-white px-3 py-1 text-sm font-semibold">
                      {car.category}
                    </div>
                  </div>
                  <div className="sm:w-3/5 p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{car.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="text-xs">{car.features.doors} vrata</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">{car.features.transmission === 'automatic' ? 'Automatik' : 'Manuelni'}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                          <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                        </svg>
                        <span className="text-xs">{car.features.ac ? 'Klima' : 'Bez klime'}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="text-xs">{car.features.seats} putnika</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <span className="text-xl font-bold text-blue-700">{car.price}€</span>
                        <span className="text-xs text-gray-500 ml-1">/ dan</span>
                      </div>
                      <button className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors text-sm font-medium">
                        Izaberi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
