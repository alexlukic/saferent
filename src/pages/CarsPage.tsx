import React, { useState } from 'react';
import CarCard from '../components/cars/CarCard';

// Sample car data
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
  },
  {
    id: '6',
    name: 'VW Taigo Automatic',
    category: 'Compact Automatic',
    price: 40,
    image: '/cars/vw-taigo.jpg',
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
    id: '7',
    name: '2024 VW Golf 8 Automatic',
    category: 'Compact Automatic',
    price: 38,
    image: '/cars/vw-golf.jpg',
    features: {
      doors: 5,
      transmission: 'automatic' as const,
      ac: true,
      seats: 5,
      luggage: 3,
      fuel: 'Benzin'
    }
  },
  {
    id: '8',
    name: 'Audi Q2 2.0 Automatic',
    category: 'Compact Automatic',
    price: 40,
    image: '/cars/audi-q2.jpg',
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
    id: '9',
    name: '2024 Skoda Octavia 2.0 Automatic',
    category: 'Intermediate Automatic',
    price: 36,
    image: '/cars/skoda-octavia.jpg',
    features: {
      doors: 5,
      transmission: 'automatic' as const,
      ac: true,
      seats: 5,
      luggage: 4,
      fuel: 'Benzin'
    }
  }
];

const CarsPage: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState(allCars);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('price-asc');
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([20, 110]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTransmission, setSelectedTransmission] = useState<string[]>([]);
  
  // Get unique categories
  const categories = [...new Set(allCars.map(car => car.category))];
  
  // Handle filter changes
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const handleTransmissionChange = (transmission: string) => {
    if (selectedTransmission.includes(transmission)) {
      setSelectedTransmission(selectedTransmission.filter(t => t !== transmission));
    } else {
      setSelectedTransmission([...selectedTransmission, transmission]);
    }
  };
  
  // Apply sorting and update filtered cars
  const applySorting = (sortValue: string, cars: any[]) => {
    let result = [...cars];
    
    if (sortValue === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return result;
  };
  
  // Apply filters
  const applyFilters = () => {
    let result = [...allCars];
    
    // Filter by price
    result = result.filter(car => car.price >= priceRange[0] && car.price <= priceRange[1]);
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(car => selectedCategories.includes(car.category));
    }
    
    // Filter by transmission
    if (selectedTransmission.length > 0) {
      result = result.filter(car => 
        (selectedTransmission.includes('automatic') && car.features.transmission === 'automatic') ||
        (selectedTransmission.includes('manual') && car.features.transmission === 'manual')
      );
    }
    
    // Apply sorting
    result = applySorting(sortBy, result);
    
    setFilteredCars(result);
  };
  
  // Reset filters
  const resetFilters = () => {
    setPriceRange([20, 110]);
    setSelectedCategories([]);
    setSelectedTransmission([]);
    setFilteredCars(allCars);
  };
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Naša vozila</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Filteri</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Cena po danu</h3>
                <div className="flex justify-between mb-2">
                  <span>{priceRange[0]}€</span>
                  <span>{priceRange[1]}€</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="110" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full"
                />
                <input 
                  type="range" 
                  min="20" 
                  max="110" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Kategorija</h3>
                {categories.map(category => (
                  <div key={category} className="flex items-center mb-2">
                    <input 
                      type="checkbox" 
                      id={`category-${category}`} 
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    <label htmlFor={`category-${category}`}>{category}</label>
                  </div>
                ))}
              </div>
              
              {/* Transmission */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Menjač</h3>
                <div className="flex items-center mb-2">
                  <input 
                    type="checkbox" 
                    id="transmission-automatic" 
                    checked={selectedTransmission.includes('automatic')}
                    onChange={() => handleTransmissionChange('automatic')}
                    className="mr-2"
                  />
                  <label htmlFor="transmission-automatic">Automatik</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="transmission-manual" 
                    checked={selectedTransmission.includes('manual')}
                    onChange={() => handleTransmissionChange('manual')}
                    className="mr-2"
                  />
                  <label htmlFor="transmission-manual">Manuelni</label>
                </div>
              </div>
              
              {/* Filter Buttons */}
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={applyFilters}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Primeni filtere
                </button>
                <button 
                  onClick={resetFilters}
                  className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded transition-colors"
                >
                  Resetuj filtere
                </button>
              </div>
            </div>
          </div>
          
          {/* Cars Grid */}
          <div className="lg:w-3/4">
            {/* Sorting and View Options */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <span className="mr-2">Sortiraj po:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => {
                    const newSortBy = e.target.value as 'price-asc' | 'price-desc' | 'name';
                    setSortBy(newSortBy);
                    setFilteredCars(applySorting(newSortBy, filteredCars));
                  }}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  <option value="price-asc">Cena (rastuće)</option>
                  <option value="price-desc">Cena (opadajuće)</option>
                  <option value="name">Naziv</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Results Count */}
            <p className="mb-4 text-gray-600">Prikazano {filteredCars.length} vozila</p>
            
            {/* Cars Display */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map(car => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCars.map(car => (
                  <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto relative">
                      <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                      <div className="absolute top-0 left-0 bg-blue-700 text-white px-3 py-1 text-sm font-semibold">
                        {car.category}
                      </div>
                    </div>
                    <div className="p-4 md:w-2/3 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{car.name}</h3>
                      
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <span className="text-sm">{car.features.doors} vrata</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{car.features.transmission === 'automatic' ? 'Automatik' : 'Manuelni'}</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                            <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                          </svg>
                          <span className="text-sm">{car.features.ac ? 'Klima' : 'Bez klime'}</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          <span className="text-sm">{car.features.seats} putnika</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                          </svg>
                          <span className="text-sm">{car.features.luggage} kofera</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{car.features.fuel}</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-blue-700">{car.price}€</span>
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
                ))}
              </div>
            )}
            
            {/* No Results */}
            {filteredCars.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Nema rezultata</h3>
                <p className="text-gray-600 mb-4">
                  Nažalost, nema vozila koja odgovaraju izabranim filterima.
                </p>
                <button 
                  onClick={resetFilters}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Resetuj filtere
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
