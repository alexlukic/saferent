import React from 'react';

const CarDetailsPage: React.FC = () => {
  // Simulirani podaci o automobilu
  const car = {
    id: '3',
    name: 'Škoda Fabia Automatic 1.0 TSI',
    category: 'Compact Automatic',
    price: 24,
    images: [
      '/src/assets/cars/skoda-fabia.jpg',
      '/src/assets/cars/skoda-fabia-interior.jpg',
      '/src/assets/cars/skoda-fabia-back.jpg',
      '/src/assets/cars/skoda-fabia-side.jpg',
    ],
    description: 'Škoda Fabia je kompaktan i ekonomičan automobil sa automatskim menjačem koji nudi odličnu kombinaciju udobnosti, prostora i ekonomičnosti. Idealan je za gradsku vožnju i kraća putovanja.',
    features: {
      doors: 5,
      transmission: 'automatic' as const,
      ac: true,
      seats: 5,
      luggage: 2,
      fuel: 'Benzin',
      engine: '1.0 TSI',
      power: '95 KS',
      consumption: '5.2 l/100km',
      year: 2023
    },
    additionalEquipment: [
      { name: 'GPS Navigacija', price: 5, available: true },
      { name: 'Dečije sedište', price: 7, available: true },
      { name: 'WiFi', price: 3, available: true },
      { name: 'Krovni nosač', price: 10, available: false }
    ]
  };

  // Simulirani podaci o sličnim automobilima
  const similarCars = [
    {
      id: '1',
      name: 'VW Polo 1.0 TSI',
      category: 'Economy',
      price: 25,
      image: '/src/assets/cars/vw-polo.jpg'
    },
    {
      id: '2',
      name: 'VW Polo 1.0 TSI Automatic',
      category: 'Economy Automatic',
      price: 28,
      image: '/src/assets/cars/vw-polo-auto.jpg'
    },
    {
      id: '4',
      name: '2024 Škoda Fabia 1.5 TSI',
      category: 'Compact Automatic',
      price: 30,
      image: '/src/assets/cars/skoda-fabia-2024.jpg'
    }
  ];

  const [mainImage, setMainImage] = React.useState(car.images[0]);
  const [selectedEquipment, setSelectedEquipment] = React.useState<string[]>([]);

  const toggleEquipment = (name: string) => {
    if (selectedEquipment.includes(name)) {
      setSelectedEquipment(selectedEquipment.filter(item => item !== name));
    } else {
      setSelectedEquipment([...selectedEquipment, name]);
    }
  };

  const calculateTotalPrice = () => {
    let total = car.price;
    car.additionalEquipment.forEach(item => {
      if (selectedEquipment.includes(item.name)) {
        total += item.price;
      }
    });
    return total;
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="text-gray-600 hover:text-blue-700">
                  Početna
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <a href="/automobili" className="text-gray-600 hover:text-blue-700 ml-1 md:ml-2">
                    Automobili
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-500 ml-1 md:ml-2">{car.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Car Images */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="relative h-64 md:h-96">
                <img 
                  src={mainImage} 
                  alt={car.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-blue-700 text-white px-3 py-1 text-sm font-semibold">
                  {car.category}
                </div>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {car.images.map((image, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 ${mainImage === image ? 'border-blue-700' : 'border-transparent'}`}
                  onClick={() => setMainImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${car.name} view ${index + 1}`} 
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Car Details and Reservation */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h1 className="text-2xl font-bold mb-2">{car.name}</h1>
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {car.category}
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
                  Dostupno
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{car.description}</p>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Cena</h2>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-blue-700">{car.price}€</span>
                  <span className="text-gray-500 ml-2">/ dan</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Prikazana cena po danu je za period najma od 1-3 dana
                </p>
                <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-gray-100 p-2 rounded">
                    <div className="font-semibold">1-3 dana</div>
                    <div>{car.price}€/dan</div>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <div className="font-semibold">4-7 dana</div>
                    <div>{Math.round(car.price * 0.9)}€/dan</div>
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <div className="font-semibold">8+ dana</div>
                    <div>{Math.round(car.price * 0.8)}€/dan</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Dodatna oprema</h2>
                <div className="space-y-2">
                  {car.additionalEquipment.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`equipment-${index}`} 
                          disabled={!item.available}
                          checked={selectedEquipment.includes(item.name)}
                          onChange={() => item.available && toggleEquipment(item.name)}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={`equipment-${index}`}
                          className={!item.available ? 'text-gray-400' : ''}
                        >
                          {item.name}
                          {!item.available && ' (nije dostupno)'}
                        </label>
                      </div>
                      <span className="text-gray-600">+{item.price}€/dan</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3">Ukupna cena</h2>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-blue-700">{calculateTotalPrice()}€</span>
                  <span className="text-gray-500 ml-2">/ dan</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition-colors">
                Rezerviši
              </button>
            </div>
          </div>
        </div>
        
        {/* Car Specifications */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Specifikacije</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Broj vrata</span>
              <span className="font-medium">{car.features.doors}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Menjač</span>
              <span className="font-medium">{car.features.transmission === 'automatic' ? 'Automatski' : 'Manuelni'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Klima</span>
              <span className="font-medium">{car.features.ac ? 'Da' : 'Ne'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Broj sedišta</span>
              <span className="font-medium">{car.features.seats}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Broj kofera</span>
              <span className="font-medium">{car.features.luggage}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Gorivo</span>
              <span className="font-medium">{car.features.fuel}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Motor</span>
              <span className="font-medium">{car.features.engine}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Snaga</span>
              <span className="font-medium">{car.features.power}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Potrošnja</span>
              <span className="font-medium">{car.features.consumption}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">Godište</span>
              <span className="font-medium">{car.features.year}</span>
            </div>
          </div>
        </div>
        
        {/* Similar Cars */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Slična vozila</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarCars.map(similarCar => (
              <div key={similarCar.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={similarCar.image} 
                    alt={similarCar.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-blue-700 text-white px-3 py-1 text-sm font-semibold">
                    {similarCar.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{similarCar.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-xl font-bold text-blue-700">{similarCar.price}€</span>
                      <span className="text-sm text-gray-500 ml-1">/ dan</span>
                    </div>
                    <a 
                      href={`/automobili/${similarCar.id}`}
                      className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors text-sm font-medium"
                    >
                      Detalji
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
