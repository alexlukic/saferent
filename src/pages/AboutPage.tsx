import React from 'react';

const AboutPage: React.FC = () => {
  // Function to open Google Maps with specific location
  const openGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4">O nama - SAFE Rent a Car</h1>
              <p className="text-lg text-gray-600 mb-6">
                "SAFE Rent a Car" je nova kompanija na tržištu Srbije, sa iskusnim timom profesionalaca iz oblasti rent a car usluga kako za pojedince tako i za firme i korporacije.
              </p>
              <p className="text-lg text-gray-600">
                Naš cilj je da ponudimo tržištu rent a car usluge po pristupačnim cenama i jednostavnim uslovima.
              </p>
            </div>
            <div className="md:w-1/2 bg-blue-700 flex items-center justify-center p-8 md:p-0">
              <div className="text-white text-center">
                <div className="text-5xl font-bold mb-2">5+</div>
                <div className="text-xl">Godina iskustva</div>
                <div className="w-16 h-1 bg-yellow-400 mx-auto my-4"></div>
                <div className="text-5xl font-bold mb-2">30+</div>
                <div className="text-xl">Vozila u ponudi</div>
                <div className="w-16 h-1 bg-yellow-400 mx-auto my-4"></div>
                <div className="text-5xl font-bold mb-2">1000+</div>
                <div className="text-xl">Zadovoljnih klijenata</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Naša priča</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-4">
              Nalazimo se u Beogradu na dve lokacije. Centar grada Bulevar Oslobođenja 40, Beograd i na terminalu Beogradskog aerodroma.
            </p>
            <p className="text-gray-600 mb-4">
              Naš cilj je da ponudimo tržištu rent a car usluge po pristupačnim cenama i jednostavnim uslovima. Uz vozila su Vam dostupne i dodatne opcije: GPS uređaj, Mobili WiFi, Dečije sedište ili Booster, dozvola za izlazak iz zemlje, zeleni karton, Full kasko osiguranje.
            </p>
            <p className="text-gray-600 mb-4">
              Kod nas možete u par jednostavnih koraka rezervisati vozilo i dodatne opcije bez skrivenih troškova. Vozila se preuzimaju na našim lokacijama ili Vam možemo dovesti vozilo na željenu adresu.
            </p>
            <p className="text-gray-600 mb-4">
              Vozini park sadrži preko 30 vozila starosti do 5 godina. U ponudi imamo od malih gradskih vozila do kombi vozila. Sva vozila imaju klima uređaje.
            </p>
            <p className="text-gray-600 mb-4">
              Za firme i korporacije imam sjajnu ponudu vozila - dugoročni najam.
            </p>
            <p className="text-gray-600 italic text-center mt-8">
              Vozite bezbedno sa nama.<br />
              Vaš, SAFE Rent a Car.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Naše vrednosti</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sigurnost</h3>
              <p className="text-gray-600">
                Sva naša vozila su redovno održavana i u odličnom stanju. Vaša sigurnost nam je na prvom mestu.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparentnost</h3>
              <p className="text-gray-600">
                Kod nas nema skrivenih troškova. Sve cene i uslovi su jasno definisani pre preuzimanja vozila.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Korisnička podrška</h3>
              <p className="text-gray-600">
                Naš tim je uvek dostupan da vam pomogne. Pružamo 24/7 podršku za sve naše klijente.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Naš tim</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 text-2xl font-bold">MJ</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Marko Jovanović</h3>
              <p className="text-gray-600">Direktor</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 text-2xl font-bold">JP</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Jelena Petrović</h3>
              <p className="text-gray-600">Menadžer prodaje</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 text-2xl font-bold">NS</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Nikola Stojanović</h3>
              <p className="text-gray-600">Korisnička podrška</p>
            </div>
          </div>
        </div>

        {/* Our Locations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Naše lokacije</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300">
                {/* Google Map Embed - Centar */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9359901953243!2d20.46727491553673!3d44.80236087909866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9f5f2f1c51%3A0x8d2a1f5e4c9a1c0a!2sBulevar%20Oslobo%C4%91enja%2040%2C%20Beograd!5e0!3m2!1sen!2srs!4v1622548800000!5m2!1sen!2srs" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Beograd - Centar"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Beograd - Centar</h3>
                <p className="text-gray-600 mb-4">Bulevar Oslobođenja 40, 11000 Beograd</p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Radno vreme:</span><br />
                  Ponedeljak - Petak: 08:00 - 20:00<br />
                  Subota - Nedelja: 09:00 - 17:00
                </p>
                <button 
                  onClick={() => openGoogleMaps("Bulevar Oslobođenja 40, 11000 Beograd")}
                  className="text-blue-700 hover:underline inline-flex items-center"
                >
                  Prikaži na mapi
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300">
                {/* Google Map Embed - Aerodrom */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.1901942044787!2d20.28742131553594!3d44.81826607909866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fd10b5e6e6d%3A0x6786999651e1004!2sAerodrom%20Nikola%20Tesla%20Beograd!5e0!3m2!1sen!2srs!4v1622548900000!5m2!1sen!2srs" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Beograd - Aerodrom"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Beograd - Aerodrom</h3>
                <p className="text-gray-600 mb-4">Terminal Beogradskog aerodroma</p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Radno vreme:</span><br />
                  Ponedeljak - Nedelja: 00:00 - 24:00<br />
                  (prema rasporedu letova)
                </p>
                <button 
                  onClick={() => openGoogleMaps("Aerodrom Nikola Tesla, Beograd")}
                  className="text-blue-700 hover:underline inline-flex items-center"
                >
                  Prikaži na mapi
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Spremni da rezervišete vozilo?</h2>
          <p className="text-xl mb-6">
            Kontaktirajte nas ili rezervišite vozilo online
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a 
              href="/rezervacija" 
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-md inline-block transition-colors"
            >
              Rezervišite odmah
            </a>
            <a 
              href="/kontakt" 
              className="bg-transparent hover:bg-blue-800 border-2 border-white text-white font-bold px-6 py-3 rounded-md inline-block transition-colors"
            >
              Kontaktirajte nas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
