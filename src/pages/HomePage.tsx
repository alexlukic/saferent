import React from 'react';
import ReservationForm from '../components/reservation/ReservationForm';
import CarCard from '../components/cars/CarCard';

// Sample car data
const popularCars = [
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
  }
];

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/cars/hero-bg.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Iznajmite vozilo brzo i jednostavno
            </h1>
            <p className="text-xl mb-8">
              Širok izbor vozila po pristupačnim cenama. Bez skrivenih troškova.
            </p>
            <a 
              href="#reservation" 
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-md inline-block transition-colors"
            >
              Rezerviši odmah
            </a>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="reservation" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <ReservationForm />
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Popularna vozila</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Izaberite iz naše ponude modernih i pouzdanih vozila različitih kategorija
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCars.map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href="/automobili" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-md inline-block transition-colors"
            >
              Pogledaj sva vozila
            </a>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Naše prednosti</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Zašto izabrati SAFE Rent a Car za vaše putovanje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a1 1 0 00.9-.55l4-8a1 1 0 00-.9-1.45H5a1 1 0 00-1 1v1zm1 7a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Novi vozni park</h3>
              <p className="text-gray-600">
                Sva naša vozila su novije generacije i redovno održavana
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Brza usluga</h3>
              <p className="text-gray-600">
                Jednostavna rezervacija i brzo preuzimanje vozila
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bez skrivenih troškova</h3>
              <p className="text-gray-600">
                Transparentne cene i jasni uslovi najma
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Podrška</h3>
              <p className="text-gray-600">
                Uvek smo dostupni za sva vaša pitanja i pomoć na putu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counters Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <p className="text-blue-100">Vozila u ponudi</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-blue-100">Zadovoljnih klijenata</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <p className="text-blue-100">Lokacije u Beogradu</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-blue-100">Godina iskustva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Šta kažu naši klijenti</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Iskustva zadovoljnih korisnika naših usluga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Odlična usluga, ljubazno osoblje i vozila u savršenom stanju. Definitivno ću ponovo koristiti njihove usluge."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-700 font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Marko Jovanović</h4>
                  <p className="text-sm text-gray-500">Beograd</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Brza i jednostavna rezervacija, preuzimanje vozila bez čekanja. Automobil je bio čist i u odličnom stanju."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-700 font-bold">JP</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jelena Petrović</h4>
                  <p className="text-sm text-gray-500">Novi Sad</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Koristim njihove usluge već godinama za poslovna putovanja. Uvek pouzdani i profesionalni. Najbolji odnos cene i kvaliteta."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-700 font-bold">NS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Nikola Stojanović</h4>
                  <p className="text-sm text-gray-500">Beograd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Spremni za putovanje?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rezervišite vozilo danas i uživajte u bezbrižnoj vožnji
          </p>
          <a 
            href="#reservation" 
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-md inline-block transition-colors text-lg"
          >
            Rezerviši odmah
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
