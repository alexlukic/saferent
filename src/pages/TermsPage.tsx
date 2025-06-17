import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Uslovi najma</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Opšti uslovi najma</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Preuzimanje vozila</h3>
              <p className="text-gray-600">
                Za preuzimanje vozila potrebno je da imate važeću ličnu kartu ili pasoš, vozačku dozvolu (najmanje 2 godine od izdavanja) i kreditnu karticu za depozit. Vozilo se preuzima sa punim rezervoarom goriva i vraća sa punim rezervoarom.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Starosna granica</h3>
              <p className="text-gray-600">
                Minimalna starost vozača je 21 godina. Za vozače mlađe od 21 godine ili starije od 70 godina, primenjuje se dodatna naknada.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Depozit</h3>
              <p className="text-gray-600">
                Prilikom preuzimanja vozila, potrebno je ostaviti depozit u iznosu od 100-300€ u zavisnosti od kategorije vozila. Depozit se vraća nakon vraćanja vozila u ispravnom stanju.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Osiguranje</h3>
              <p className="text-gray-600">
                Osnovno osiguranje je uključeno u cenu najma. Dodatno Full kasko osiguranje bez učešća u šteti može se dokupiti po ceni od 5-15€ dnevno, u zavisnosti od kategorije vozila.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">5. Kilometraža</h3>
              <p className="text-gray-600">
                Neograničena kilometraža je uključena u cenu najma za periode duže od 3 dana. Za kraće periode, ograničenje je 200 km dnevno, a svaki dodatni kilometar se naplaćuje 0,20€.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">6. Otkazivanje rezervacije</h3>
              <p className="text-gray-600">
                Rezervaciju možete otkazati bez naknade do 48 sati pre zakazanog preuzimanja vozila. Za otkazivanja u roku kraćem od 48 sati, naplaćuje se 30% iznosa rezervacije.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">7. Produženje najma</h3>
              <p className="text-gray-600">
                Ukoliko želite da produžite period najma, morate nas obavestiti najmanje 24 sata pre isteka ugovora. Produženje zavisi od dostupnosti vozila.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">8. Vraćanje vozila</h3>
              <p className="text-gray-600">
                Vozilo se mora vratiti u dogovoreno vreme i na dogovorenu lokaciju. Za kašnjenje do 1 sat ne naplaćuje se dodatna naknada. Za kašnjenje duže od 1 sata, naplaćuje se dodatni dan najma.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">9. Putovanje u inostranstvo</h3>
              <p className="text-gray-600">
                Putovanje u inostranstvo je dozvoljeno uz prethodnu najavu i dodatnu naknadu za zeleni karton i dozvolu za izlazak iz zemlje. Putovanje nije dozvoljeno u zemlje visokog rizika.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">10. Dodatni vozač</h3>
              <p className="text-gray-600">
                Dodatni vozač se može registrovati uz dodatnu naknadu od 5€ dnevno. Dodatni vozač mora ispunjavati iste uslove kao i glavni vozač.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Dodatne opcije</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">GPS navigacija</h3>
              <p className="text-gray-600">
                GPS uređaj možete iznajmiti po ceni od 5€ dnevno.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Dečije sedište</h3>
              <p className="text-gray-600">
                Dečije sedište ili booster možete iznajmiti po ceni od 7€ dnevno.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">WiFi</h3>
              <p className="text-gray-600">
                Mobilni WiFi uređaj možete iznajmiti po ceni od 3€ dnevno.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Krovni nosač</h3>
              <p className="text-gray-600">
                Krovni nosač možete iznajmiti po ceni od 10€ dnevno.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Odgovornost korisnika</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Korisnik je odgovoran za:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Poštovanje saobraćajnih propisa i plaćanje svih kazni za prekršaje počinjene tokom perioda najma</li>
              <li>Pravilno korišćenje vozila u skladu sa njegovom namenom</li>
              <li>Redovno proveravanje nivoa ulja, vode i drugih tečnosti</li>
              <li>Sve štete nastale usled nepravilnog korišćenja vozila</li>
              <li>Sve štete koje nisu pokrivene osiguranjem</li>
              <li>Gubitak ključeva, dokumenata ili registarskih tablica</li>
            </ul>
            
            <p className="text-gray-600 mt-4">
              U slučaju nezgode, korisnik je dužan da odmah obavesti policiju i rent-a-car kompaniju, i da pribavi policijski zapisnik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
