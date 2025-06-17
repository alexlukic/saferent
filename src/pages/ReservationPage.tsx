import React from 'react';
import ReservationForm from '../components/reservation/ReservationForm';

const ReservationPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Rezervacija vozila</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Unesite detalje rezervacije</h2>
            <p className="text-gray-600 mb-6">
              Popunite formular ispod da biste rezervisali vozilo. Nakon što izaberete datum i lokaciju, 
              prikazaćemo vam dostupna vozila koja možete rezervisati.
            </p>
            
            <ReservationForm />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Informacije o rezervaciji</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">Kako funkcioniše proces rezervacije?</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Popunite formular za rezervaciju sa željenim datumima i lokacijama</li>
                  <li>Izaberite vozilo iz liste dostupnih vozila</li>
                  <li>Unesite vaše lične podatke i detalje plaćanja</li>
                  <li>Primićete potvrdu rezervacije putem e-maila</li>
                  <li>Preuzmite vozilo na izabranoj lokaciji u zakazano vreme</li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Šta je potrebno za preuzimanje vozila?</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Važeća lična karta ili pasoš</li>
                  <li>Vozačka dozvola (najmanje 2 godine od izdavanja)</li>
                  <li>Kreditna kartica za depozit</li>
                  <li>Potvrda o rezervaciji</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Politika otkazivanja</h3>
                <p className="text-gray-600">
                  Rezervaciju možete otkazati bez naknade do 48 sati pre zakazanog preuzimanja vozila. 
                  Za otkazivanja u roku kraćem od 48 sati, naplaćuje se 30% iznosa rezervacije.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
