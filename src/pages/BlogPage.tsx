import React, { useState } from 'react';

// Blog post data
const allBlogPosts = [
  {
    id: '1',
    title: 'Kako izabrati pravo vozilo za vaše potrebe',
    category: 'Saveti',
    date: '15. maj 2025.',
    image: '/blog/blog-1.jpg',
    excerpt: 'Izbor pravog vozila za iznajmljivanje može značajno uticati na vaše putovanje. U ovom članku delimo savete kako odabrati vozilo koje najbolje odgovara vašim potrebama.',
    content: `
      <p>Izbor pravog vozila za iznajmljivanje može značajno uticati na vaše putovanje. Bilo da planirate poslovni put, porodični odmor ili avanturu sa prijateljima, važno je odabrati vozilo koje će najbolje odgovarati vašim potrebama.</p>
      
      <h3>Razmislite o broju putnika</h3>
      <p>Prvi faktor koji treba uzeti u obzir je broj osoba koje će putovati sa vama. Za parove ili solo putnike, kompaktno vozilo je obično najbolji izbor. Za porodice ili grupe od 4-5 osoba, sedan ili SUV će pružiti više prostora i udobnosti. Za veće grupe, kombi vozilo može biti idealno rešenje.</p>
      
      <h3>Procenite potreban prtljažni prostor</h3>
      <p>Količina prtljaga koju nosite takođe je važan faktor. Ako putujete sa mnogo prtljaga, sportskom opremom ili drugim velikim predmetima, razmislite o vozilu sa većim prtljažnikom ili SUV-u sa preklopivim zadnjim sedištima.</p>
      
      <h3>Razmotrite teren i uslove vožnje</h3>
      <p>Gde planirate da vozite? Za gradsku vožnju, manji automobil može biti praktičniji i lakši za parkiranje. Za putovanja po lošijim putevima ili planinskim predelima, vozilo sa pogonom na sva četiri točka može biti bolja opcija.</p>
      
      <h3>Menjač - automatik ili manuelni?</h3>
      <p>Ako niste navikli na vožnju sa manuelnim menjačem, svakako izaberite vozilo sa automatskim menjačem, posebno ako putujete u područja sa gustim saobraćajem ili brdovitim terenom.</p>
      
      <h3>Razmislite o potrošnji goriva</h3>
      <p>Za duža putovanja, efikasnost potrošnje goriva može značajno uticati na vaš budžet. Manji automobili i hibridna vozila obično troše manje goriva od većih SUV-ova ili luksuznih vozila.</p>
      
      <h3>Dodatne opcije i udobnost</h3>
      <p>Razmislite koje dodatne opcije su vam važne - klima uređaj, GPS navigacija, Bluetooth povezivanje, sedišta za decu, itd. Ove opcije mogu značajno poboljšati vaše iskustvo putovanja.</p>
      
      <h3>Zaključak</h3>
      <p>Uzimajući u obzir sve ove faktore, bićete u mogućnosti da izaberete vozilo koje najbolje odgovara vašim potrebama i učinite vaše putovanje što prijatnijim. U SAFE Rent a Car-u, naš ljubazni tim vam stoji na raspolaganju da vam pomogne u izboru idealnog vozila za vaše potrebe.</p>
    `
  },
  {
    id: '2',
    title: '5 najlepših ruta za vožnju u Srbiji',
    category: 'Putovanja',
    date: '2. maj 2025.',
    image: '/blog/blog-2.jpg',
    excerpt: 'Srbija je zemlja sa prelepim predelima i putevima koji su idealni za vožnju. Otkrijte naših 5 preporuka za nezaboravno putovanje automobilom.',
    content: `
      <p>Srbija je zemlja sa prelepim predelima i putevima koji su idealni za vožnju. Bilo da ste ljubitelj prirode, istorije ili gastronomije, postoje rute koje će zadovoljiti svačiji ukus. Evo naših 5 preporuka za nezaboravno putovanje automobilom.</p>
      
      <h3>1. Ibarska magistrala - Od Beograda do Zlatibora</h3>
      <p>Ova ruta vodi vas kroz srce Srbije, od Beograda preko Čačka do popularnog planinskog odmarališta Zlatibor. Usput možete posetiti srednjovekovni manastir Žiču, uživati u prelepim predelima planine Rudnik i probati tradicionalnu hranu u brojnim restoranima pored puta.</p>
      
      <h3>2. Đerdapska magistrala - Duž Dunava</h3>
      <p>Jedna od najspektakularnijih ruta u Srbiji vodi duž Dunava, kroz Đerdapsku klisuru. Ovaj put nudi neverovatne poglede na reku, priliku da vidite arheološko nalazište Lepenski Vir i impresivnu hidroelektranu Đerdap. Ne propustite da posetite srednjovekovnu Golubačku tvrđavu koja se uzdiže nad Dunavom.</p>
      
      <h3>3. Fruškogorski put - Kroz nacionalni park</h3>
      <p>Fruška gora, planina u Vojvodini, dom je najstarijeg nacionalnog parka u Srbiji. Vožnja kroz ovaj region omogućava vam da posetite brojne manastire iz 15. i 16. veka, uživate u prelepoj prirodi i probate izvrsna vina u lokalnim vinarijama.</p>
      
      <h3>4. Ovčarsko-kablarska klisura - Srpska Sveta Gora</h3>
      <p>Ovaj put vodi kroz spektakularnu klisuru reke Zapadne Morave, okruženu planinama Ovčar i Kablar. Oblast je poznata po koncentraciji manastira, zbog čega je dobila naziv "Srpska Sveta Gora". Pored duhovnog značaja, ova ruta nudi i predivne prirodne pejzaže.</p>
      
      <h3>5. Stara planina - Netaknuta divljina</h3>
      <p>Za one koji traže avanturu, ruta kroz Staru planinu na istoku Srbije je savršen izbor. Ovaj put vodi kroz netaknutu prirodu, pored vodopada Tupavica i kroz tradicionalna sela gde možete doživeti autentičnu srpsku kulturu i gostoprimstvo.</p>
      
      <h3>Saveti za putovanje</h3>
      <p>Pre nego što krenete na put, proverite stanje puteva i vremensku prognozu. Uvek imajte dovoljno goriva, posebno u udaljenijim područjima gde benzinske pumpe mogu biti retke. I ne zaboravite da ponesete kameru - prizori koje ćete videti zaslužuju da budu zabeleženi!</p>
      
      <h3>Zaključak</h3>
      <p>Srbija ima mnogo toga da ponudi ljubiteljima putovanja automobilom. Ovih pet ruta predstavljaju samo deo onoga što možete istražiti. Sa pravim vozilom iz SAFE Rent a Car-a, spremni ste za nezaboravnu avanturu kroz prelepe predele Srbije.</p>
    `
  },
  {
    id: '3',
    title: 'Šta treba znati pre iznajmljivanja vozila',
    category: 'Saveti',
    date: '18. april 2025.',
    image: '/blog/blog-3.jpg',
    excerpt: 'Iznajmljivanje vozila može biti jednostavno iskustvo ako ste dobro pripremljeni. Pročitajte naše savete za bezbrižno iznajmljivanje automobila.',
    content: `
      <p>Iznajmljivanje vozila može biti jednostavno iskustvo ako ste dobro pripremljeni. Bilo da iznajmljujete automobil za poslovni put, odmor ili zbog drugih potreba, nekoliko ključnih informacija može vam pomoći da proces prođe glatko i bez stresa.</p>
      
      <h3>Potrebna dokumentacija</h3>
      <p>Pre iznajmljivanja vozila, proverite koju dokumentaciju morate imati. Obično je potrebna važeća vozačka dozvola (koju posedujete najmanje 1-2 godine), lična karta ili pasoš, i kreditna kartica na ime vozača. Neki rent-a-car servisi mogu imati dodatne zahteve, posebno za međunarodne vozače.</p>
      
      <h3>Razumevanje osiguranja</h3>
      <p>Osiguranje je važan aspekt iznajmljivanja vozila. Osnovno osiguranje je obično uključeno u cenu, ali možete razmotriti i dodatne opcije poput potpunog kasko osiguranja ili osiguranja od krađe. Proverite šta pokriva vaše postojeće auto osiguranje ili osiguranje kreditne kartice pre nego što platite za dodatno pokriće.</p>
      
      <h3>Pažljivo pregledajte vozilo</h3>
      <p>Pre preuzimanja vozila, detaljno ga pregledajte i zabeležite sva postojeća oštećenja, ma koliko mala bila. Fotografišite vozilo iz svih uglova kao dokaz stanja u kojem ste ga preuzeli. Ovo može sprečiti nesporazume prilikom vraćanja vozila.</p>
      
      <h3>Razumevanje politike goriva</h3>
      <p>Rent-a-car kompanije imaju različite politike o gorivu. Najčešće opcije su "pun-pun" (preuzimate sa punim rezervoarom i vraćate sa punim) ili "plati unapred" (plaćate za pun rezervoar unapred i možete vratiti vozilo sa bilo kojom količinom goriva). Razumevanje ovih politika može vam uštedeti novac.</p>
      
      <h3>Ograničenja kilometraže</h3>
      <p>Proverite da li postoje ograničenja kilometraže. Mnoge kompanije nude neograničenu kilometražu, ali neke mogu naplaćivati dodatno ako pređete određeni broj kilometara. Ako planirate duže putovanje, ovo je posebno važno.</p>
      
      <h3>Dodatne naknade</h3>
      <p>Budite svesni potencijalnih dodatnih naknada, kao što su naknade za dodatnog vozača, mladog vozača (obično ispod 25 godina), kasno vraćanje, ili vraćanje na drugoj lokaciji. Ove naknade mogu značajno povećati ukupnu cenu.</p>
      
      <h3>Rezervišite unapred</h3>
      <p>Rezervisanje vozila unapred, posebno tokom sezone odmora ili velikih događaja, može vam osigurati bolju cenu i veći izbor vozila. Mnoge kompanije nude popuste za rane rezervacije.</p>
      
      <h3>Zaključak</h3>
      <p>Uz pravilnu pripremu i razumevanje uslova iznajmljivanja, možete imati bezbrižno iskustvo sa rent-a-car uslugom. U SAFE Rent a Car-u, trudimo se da proces bude što jednostavniji i transparentniji za naše klijente, pružajući sve potrebne informacije unapred.</p>
    `
  },
  {
    id: '4',
    title: 'Prednosti dugoročnog najma vozila za firme',
    category: 'Biznis',
    date: '5. april 2025.',
    image: '/blog/blog-4.jpg',
    excerpt: 'Dugoročni najam vozila može biti isplativije rešenje za mnoge kompanije. Saznajte koje su prednosti i kako možete uštedeti.',
    content: `
      <p>Dugoročni najam vozila postaje sve popularnija opcija za kompanije svih veličina. Umesto kupovine vozila, mnoge firme se odlučuju za dugoročni najam zbog brojnih finansijskih i operativnih prednosti koje ova opcija nudi.</p>
      
      <h3>Finansijske prednosti</h3>
      <p>Jedna od najvećih prednosti dugoročnog najma vozila je očuvanje kapitala. Umesto velikog jednokratnog izdatka za kupovinu vozila, kompanije mogu rasporediti troškove kroz mesečne rate. Ovo oslobađa kapital za druge investicije i poboljšava cash flow.</p>
      <p>Dodatno, troškovi najma se knjiže kao operativni troškovi, što može imati poreske prednosti u odnosu na amortizaciju kupljenih vozila. PDV na mesečne rate najma je takođe često odbitna stavka.</p>
      
      <h3>Predvidivi troškovi</h3>
      <p>Dugoročni najam obično uključuje održavanje, registraciju i osiguranje vozila, što znači da su mesečni troškovi fiksni i predvidivi. Ovo olakšava budžetiranje i eliminiše neočekivane troškove popravki.</p>
      
      <h3>Uvek nova i pouzdana vozila</h3>
      <p>Sa dugoročnim najmom, kompanije mogu redovno obnavljati svoju flotu, osiguravajući da njihovi zaposleni uvek voze nova, pouzdana i bezbedna vozila. Ovo ne samo da smanjuje rizik od kvarova i prekida poslovanja, već i poboljšava imidž kompanije.</p>
      
      <h3>Fleksibilnost</h3>
      <p>Dugoročni najam nudi fleksibilnost koju kupovina vozila ne može. Kompanije mogu prilagoditi veličinu svoje flote prema potrebama poslovanja, dodajući ili smanjujući broj vozila kako se poslovanje razvija. Takođe, na kraju perioda najma, kompanije mogu odlučiti da zamene vozila za novije modele ili da promene tip vozila prema promenjenim potrebama.</p>
      
      <h3>Smanjenje administrativnih obaveza</h3>
      <p>Upravljanje flotom vozila zahteva značajno administrativno vreme i resurse. Sa dugoročnim najmom, mnogi aspekti upravljanja flotom, kao što su održavanje, osiguranje i registracija, prebacuju se na kompaniju za najam, oslobađajući interne resurse za fokus na core business.</p>
      
      <h3>Ekološke prednosti</h3>
      <p>Sa sve većim fokusom na održivost, mnoge kompanije žele da smanje svoj ekološki otisak. Dugoročni najam omogućava kompanijama da lako pređu na efikasnija, manje zagađujuća vozila, uključujući hibridne i električne modele, bez velikih kapitalnih ulaganja.</p>
      
      <h3>Zaključak</h3>
      <p>Dugoročni najam vozila nudi brojne prednosti za kompanije, od finansijskih ušteda do operativne fleksibilnosti. U SAFE Rent a Car-u, nudimo prilagođena rešenja za dugoročni najam koja odgovaraju specifičnim potrebama vašeg poslovanja. Kontaktirajte nas da saznate kako možemo pomoći vašoj kompaniji da optimizuje troškove i poboljša efikasnost kroz dugoročni najam vozila.</p>
    `
  },
  {
    id: '5',
    title: 'Kako održavati vozilo tokom dugih putovanja',
    category: 'Saveti',
    date: '22. mart 2025.',
    image: '/blog/blog-5.jpg',
    excerpt: 'Pravilno održavanje vozila tokom dugih putovanja je ključno za bezbedan put. Pročitajte naše savete za brigu o vozilu na putu.',
    content: `
      <p>Pravilno održavanje vozila tokom dugih putovanja je ključno za bezbedan i ugodan put. Bez obzira da li se radi o iznajmljenom ili vašem ličnom vozilu, nekoliko jednostavnih koraka može vam pomoći da izbegnete probleme na putu i osigurate da vaše putovanje prođe glatko.</p>
      
      <h3>Pre putovanja</h3>
      <p>Pre nego što krenete na dugo putovanje, važno je obaviti osnovnu proveru vozila. Proverite nivo ulja, rashladne tečnosti, tečnosti za pranje vetrobrana i pritisak u gumama. Ako iznajmljujete vozilo, ove provere će obično biti obavljene pre preuzimanja, ali uvek je dobro i sami proveriti.</p>
      <p>Takođe, upoznajte se sa vozilom pre polaska. Prilagodite sedište i retrovizore, naučite kako rade svetla, brisači i klima uređaj. Ako vozilo ima GPS ili drugi navigacioni sistem, programirajte svoju rutu unapred.</p>
      
      <h3>Tokom putovanja</h3>
      <p>Tokom dugih putovanja, redovne pauze su ključne - ne samo za vas, već i za vozilo. Motor i drugi sistemi mogu se pregrejati tokom kontinuirane vožnje, posebno u toplim vremenskim uslovima ili pri vožnji uzbrdo.</p>
      <p>Pratite instrument tablu za bilo kakve znakove upozorenja. Ako se upali bilo koja lampica upozorenja, zaustavite se čim je bezbedno i konsultujte uputstvo za upotrebu vozila ili pozovite službu za pomoć na putu.</p>
      
      <h3>Gorivo i efikasnost</h3>
      <p>Nemojte čekati da rezervoar bude skoro prazan pre nego što napunite gorivo, posebno u manje naseljenim područjima gde benzinske pumpe mogu biti retke. Dobra praksa je dopuniti rezervoar kada padne na četvrtinu.</p>
      <p>Za maksimalnu efikasnost goriva, vozite ujednačenom brzinom i izbegavajte naglo ubrzavanje i kočenje. Takođe, isključite klimu kada nije potrebna, jer može povećati potrošnju goriva.</p>
      
      <h3>Bezbednost tereta</h3>
      <p>Pravilno rasporedite i osigurajte prtljag u vozilu. Težak prtljag stavite na dno i što bliže centru vozila. Osigurajte da ništa ne blokira vaš pogled kroz retrovizor ili bočne prozore.</p>
      
      <h3>Prilagodite vožnju uslovima</h3>
      <p>Različiti uslovi puta i vremenske prilike zahtevaju različite stilove vožnje. Smanjite brzinu po kiši, magli ili snegu. Budite posebno oprezni na nepoznatim putevima i u planinskim predelima.</p>
      
      <h3>Šta ako se desi kvar?</h3>
      <p>Ako iznajmljujete vozilo i dođe do kvara, kontaktirajte rent-a-car kompaniju odmah. Većina kompanija, uključujući SAFE Rent a Car, ima 24/7 službu za pomoć na putu. Nemojte pokušavati da sami popravite vozilo osim ako niste sigurni šta radite.</p>
      
      <h3>Zaključak</h3>
      <p>Pravilno održavanje vozila tokom dugih putovanja nije samo pitanje udobnosti, već i bezbednosti. Sledite ove jednostavne savete da biste osigurali da vaše putovanje bude što prijatnije i bezbrižnije. U SAFE Rent a Car-u, sva naša vozila su redovno servisirana i u odličnom stanju, pružajući vam dodatnu sigurnost na vašim putovanjima.</p>
    `
  },
  {
    id: '6',
    title: 'Električna vozila - budućnost iznajmljivanja',
    category: 'Novosti',
    date: '10. mart 2025.',
    image: '/blog/blog-6.jpg',
    excerpt: 'Električna vozila postaju sve popularnija opcija za iznajmljivanje. Saznajte prednosti i izazove vožnje električnih vozila.',
    content: `
      <p>Električna vozila (EV) revolucionišu automobilsku industriju, a njihov uticaj se sve više oseća i u sektoru iznajmljivanja vozila. Kako raste svest o ekološkim pitanjima i tehnologija napreduje, električna vozila postaju sve atraktivnija opcija za iznajmljivanje.</p>
      
      <h3>Prednosti električnih vozila</h3>
      <p>Ekološki otisak električnih vozila je značajno manji od vozila sa unutrašnjim sagorevanjem. Ona ne emituju izduvne gasove tokom vožnje, što ih čini idealnim za gradsku vožnju i područja sa strogim ekološkim propisima.</p>
      <p>Pored ekoloških prednosti, električna vozila nude i ekonomske benefite. Troškovi "goriva" (električne energije) su obično niži od benzina ili dizela, a održavanje je jednostavnije zbog manjeg broja pokretnih delova.</p>
      <p>Vožnja električnog vozila takođe pruža jedinstveno iskustvo - tiha vožnja bez vibracija, trenutno ubrzanje i često napredne tehnološke funkcije koje poboljšavaju ukupno iskustvo korisnika.</p>
      
      <h3>Izazovi električnih vozila</h3>
      <p>Uprkos brojnim prednostima, električna vozila i dalje predstavljaju određene izazove, posebno za putnike. Domet vozila, iako se stalno poboljšava, može biti ograničavajući faktor za duža putovanja. Planiranje rute koja uključuje stanice za punjenje postaje ključni deo putovanja.</p>
      <p>Vreme punjenja je još jedan faktor koji treba uzeti u obzir. Dok punjenje na brzim punjačima može trajati 30-60 minuta, standardno punjenje može trajati nekoliko sati. Ovo zahteva drugačije planiranje putovanja u poređenju sa tradicionalnim vozilima.</p>
      
      <h3>Infrastruktura za punjenje</h3>
      <p>Infrastruktura za punjenje električnih vozila se brzo razvija, ali još uvek nije jednako dostupna u svim područjima. Pre iznajmljivanja električnog vozila, važno je istražiti dostupnost punjača na vašoj planiranoj ruti.</p>
      <p>Mnogi hoteli, restorani i turističke atrakcije sada nude stanice za punjenje kao dodatnu uslugu za svoje goste, što olakšava planiranje.</p>
      
      <h3>Saveti za iznajmljivanje električnog vozila</h3>
      <p>Ako razmišljate o iznajmljivanju električnog vozila, evo nekoliko saveta:</p>
      <ul>
        <li>Upoznajte se sa dometom vozila i planirajte svoju rutu u skladu s tim</li>
        <li>Preuzmite aplikacije koje pokazuju lokacije stanica za punjenje</li>
        <li>Naučite kako funkcioniše regenerativno kočenje za maksimalnu efikasnost</li>
        <li>Budite spremni za drugačije iskustvo vožnje - trenutno ubrzanje i tiši rad</li>
      </ul>
      
      <h3>Budućnost iznajmljivanja električnih vozila</h3>
      <p>Kako tehnologija napreduje, očekuje se da će električna vozila postati dominantna u floti rent-a-car kompanija. Veći domet, brže punjenje i šira infrastruktura za punjenje učiniće električna vozila još praktičnijom opcijom za iznajmljivanje.</p>
      <p>Mnoge rent-a-car kompanije, uključujući SAFE Rent a Car, već planiraju proširenje svoje ponude električnih vozila, prateći globalni trend ka održivijoj mobilnosti.</p>
      
      <h3>Zaključak</h3>
      <p>Iznajmljivanje električnog vozila može biti uzbudljivo i ekološki prihvatljivo iskustvo. Iako postoje određeni izazovi, prednosti su brojne i rastu kako tehnologija napreduje. Ako još niste probali vožnju električnog vozila, možda je vreme da razmotrite ovu opciju za vaše sledeće putovanje.</p>
    `
  },
  {
    id: '7',
    title: 'Najbolji saveti za vožnju u zimskim uslovima',
    category: 'Saveti',
    date: '5. februar 2025.',
    image: '/blog/blog-7.jpg',
    excerpt: 'Vožnja u zimskim uslovima može biti izazovna. Pročitajte naše savete za bezbednu vožnju po snegu i ledu.',
    content: `
      <p>Vožnja u zimskim uslovima može biti izazovna čak i za iskusne vozače. Sneg, led, kiša i magla stvaraju uslove koji zahtevaju posebnu pažnju i prilagođenu tehniku vožnje. Evo nekoliko saveta koji će vam pomoći da bezbedno stignete do odredišta tokom zimskih meseci.</p>
      
      <h3>Priprema vozila za zimu</h3>
      <p>Pre nego što se suočite sa zimskim uslovima, važno je pripremiti vozilo. Proverite da li su gume u dobrom stanju i pravilno napumpane. Razmotrite korišćenje zimskih guma koje pružaju bolju trakciju na snegu i ledu. Takođe, proverite akumulator, sistem za grejanje, svetla i brisače.</p>
      <p>Uvek imajte rezervoar goriva najmanje polupun. Ovo ne samo da sprečava zamrzavanje goriva, već vam pruža rezervu u slučaju da ostanete zaglavljeni i morate držati motor upaljen radi grejanja.</p>
      
      <h3>Prilagodite vožnju uslovima</h3>
      <p>Najvažniji savet za zimsku vožnju je da smanjite brzinu. Čak i sa zimskim gumama, zaustavni put je duži na klizavim površinama. Držite veće rastojanje od vozila ispred vas - preporučuje se najmanje trostruko veće rastojanje nego u normalnim uslovima.</p>
      <p>Izbegavajte nagla ubrzavanja, kočenja i skretanja. Glatki, postepeni pokreti su ključni za održavanje kontrole na klizavim površinama. Koristite niži stepen prenosa kada vozite nizbrdo da biste smanjili potrebu za kočenjem.</p>
      
      <h3>Šta ako počnete da klizite?</h3>
      <p>Ako vaše vozilo počne da klizi, nemojte paničiti. Skinite nogu sa gasa i nemojte naglo kočiti. Upravljajte u smeru u kojem želite da ide prednji deo vozila. Za vozila sa prednjim pogonom, blago ubrzanje može ponekad pomoći u ponovnom uspostavljanju trakcije.</p>
      
      <h3>Vidljivost je ključna</h3>
      <p>Zimski uslovi često znače smanjenu vidljivost zbog snega, kiše ili magle. Uvek očistite sav sneg i led sa vozila pre vožnje, uključujući krov, svetla i registarske tablice. Koristite svetla čak i tokom dana da biste bili vidljiviji drugim vozačima.</p>
      <p>Ako vozite u uslovima jake magle, koristite svetla za maglu ako ih imate, i orijentišite se prema desnoj ivici puta umesto prema svetlima vozila koja dolaze u susret.</p>
      
      <h3>Budite pripremljeni za hitne slučajeve</h3>
      <p>Uvek imajte zimski komplet za hitne slučajeve u vozilu. Ovaj komplet treba da uključuje ćebe, baterijsku lampu, strugač za led, malu lopatu, kablove za paljenje, prvu pomoć, vodu i energetske pločice. Mobilni telefon sa punjačem je takođe neophodan za pozivanje pomoći ako je potrebno.</p>
      
      <h3>Planiranje putovanja</h3>
      <p>Pre nego što krenete na put u zimskim uslovima, proverite vremensku prognozu i stanje na putevima. Razmotrite odlaganje putovanja ako se očekuju ekstremni vremenski uslovi. Ako morate putovati, obavestite nekoga o svojoj ruti i očekivanom vremenu dolaska.</p>
      
      <h3>Zaključak</h3>
      <p>Vožnja u zimskim uslovima zahteva dodatnu pažnju, pripremu i strpljenje. Sledite ove savete da biste povećali svoju bezbednost na putu tokom zimskih meseci. U SAFE Rent a Car-u, sva naša vozila su redovno održavana i pripremljena za zimske uslove, pružajući vam dodatnu sigurnost na vašim zimskim putovanjima.</p>
    `
  },
  {
    id: '8',
    title: 'Kako uštedeti na gorivu tokom putovanja',
    category: 'Saveti',
    date: '15. januar 2025.',
    image: '/blog/blog-8.jpg',
    excerpt: 'Cene goriva mogu značajno uticati na budžet za putovanje. Saznajte kako da smanjite potrošnju goriva i uštedite novac.',
    content: `
      <p>Cene goriva mogu značajno uticati na budžet za putovanje, posebno ako planirate dužu vožnju. Srećom, postoji nekoliko efikasnih strategija koje možete primeniti da smanjite potrošnju goriva i uštedite novac, bez obzira da li vozite svoje ili iznajmljeno vozilo.</p>
      
      <h3>Izbor pravog vozila</h3>
      <p>Ako iznajmljujete vozilo, izbor pravog modela može značajno uticati na potrošnju goriva. Manji automobili i hibridna vozila obično troše manje goriva od većih SUV-ova ili luksuznih vozila. Razmislite o svojim stvarnim potrebama - da li vam je zaista potreban veliki SUV za gradsku vožnju ili bi kompaktno vozilo bilo dovoljno?</p>
      
      <h3>Održavajte konstantnu brzinu</h3>
      <p>Jedan od najefektivnijih načina za uštedu goriva je održavanje konstantne brzine. Često ubrzavanje i kočenje značajno povećava potrošnju goriva. Koristite tempomat na autoputevima kada je to moguće i trudite se da predvidite saobraćaj kako biste izbegli nepotrebno kočenje i ubrzavanje.</p>
      
      <h3>Vozite ekonomično</h3>
      <p>Način na koji vozite ima veliki uticaj na potrošnju goriva. Izbegavajte naglo ubrzavanje i kočenje. Postepeno ubrzavajte i koristite momentum vozila kad god je moguće. Prebacite u viši stepen prenosa što je pre moguće (za manuelne menjače) i vozite pri nižim obrtajima motora.</p>
      
      <h3>Pravilno održavanje vozila</h3>
      <p>Ako vozite svoje vozilo, redovno održavanje je ključno za optimalnu potrošnju goriva. Proverite da su gume pravilno napumpane - nedovoljno napumpane gume mogu povećati potrošnju goriva za do 3%. Redovno menjajte filtere za vazduh i ulje prema preporukama proizvođača.</p>
      
      <h3>Smanjite težinu i otpor vazduha</h3>
      <p>Dodatna težina u vozilu povećava potrošnju goriva. Uklonite nepotreban teret iz vozila pre putovanja. Takođe, krovni nosači i kutije značajno povećavaju otpor vazduha i potrošnju goriva, posebno pri većim brzinama. Uklonite ih kada nisu u upotrebi.</p>
      
      <h3>Pametno koristite klimu i električne uređaje</h3>
      <p>Klima uređaj može povećati potrošnju goriva za 5-25%, posebno tokom gradske vožnje. Na nižim brzinama, razmotrite otvaranje prozora umesto korišćenja klime. Međutim, na većim brzinama, otvoreni prozori stvaraju otpor vazduha koji može trošiti više goriva nego klima.</p>
      
      <h3>Planirajte rutu unapred</h3>
      <p>Planiranje rute može vam pomoći da izbegnete gužve u saobraćaju i nepotrebne kilometre. Koristite GPS ili aplikacije za navigaciju koje pokazuju saobraćajne uslove u realnom vremenu i mogu vas preusmeriti oko zagušenja.</p>
      
      <h3>Pronađite najpovoljnije gorivo</h3>
      <p>Cene goriva mogu značajno varirati čak i u istom gradu. Koristite aplikacije ili veb sajtove koji prate cene goriva da pronađete najpovoljnije pumpe na vašoj ruti. Međutim, nemojte voziti daleko van puta samo da biste uštedeli nekoliko dinara - to može poništiti uštedu.</p>
      
      <h3>Zaključak</h3>
      <p>Primenom ovih strategija možete značajno smanjiti potrošnju goriva i uštedeti novac tokom putovanja. Pored finansijskih ušteda, efikasnija vožnja takođe smanjuje vaš ekološki otisak, doprinoseći održivijem putovanju. U SAFE Rent a Car-u, nudimo širok izbor ekonomičnih vozila koja vam mogu pomoći da dodatno smanjite troškove goriva tokom vašeg putovanja.</p>
    `
  },
  {
    id: '9',
    title: 'Najčešće greške pri iznajmljivanju vozila',
    category: 'Saveti',
    date: '5. januar 2025.',
    image: '/blog/blog-9.jpg',
    excerpt: 'Izbegnite skupe greške pri iznajmljivanju vozila. Saznajte na šta treba obratiti pažnju pre potpisivanja ugovora.',
    content: `
      <p>Iznajmljivanje vozila može biti odlično rešenje za putovanja, ali nepoznavanje procesa može dovesti do skupih grešaka. Evo najčešćih grešaka koje ljudi prave pri iznajmljivanju vozila i kako ih možete izbeći.</p>
      
      <h3>Nerazumevanje osiguranja</h3>
      <p>Jedna od najčešćih i potencijalno najskupljih grešaka je nerazumevanje opcija osiguranja. Mnogi ljudi automatski prihvataju sve ponuđene opcije osiguranja, što može značajno povećati cenu najma. S druge strane, neki odbijaju sva dodatna osiguranja i rizikuju velike troškove u slučaju nezgode.</p>
      <p>Pre iznajmljivanja, proverite šta pokriva vaše postojeće auto osiguranje ili osiguranje kreditne kartice. Često ćete otkriti da već imate pokriće za neke rizike, što eliminiše potrebu za dodatnim osiguranjem od rent-a-car kompanije.</p>
      
      <h3>Nepažljiv pregled vozila</h3>
      <p>Propuštanje detaljnog pregleda vozila pre preuzimanja je česta greška koja može dovesti do nepravednih optužbi za oštećenja. Uvek temeljno pregledajte vozilo i dokumentujte sva postojeća oštećenja, ma koliko mala bila. Fotografišite vozilo iz svih uglova i pobrinite se da predstavnik kompanije zabeleži sva oštećenja u ugovoru.</p>
      
      <h3>Ignorisanje sitnog teksta u ugovoru</h3>
      <p>Mnogi ljudi ne čitaju ugovor o najmu pažljivo, što može dovesti do neočekivanih troškova. Obratite posebnu pažnju na politike o gorivu, ograničenja kilometraže, naknade za dodatne vozače, naknade za vraćanje na drugoj lokaciji i kazne za kasno vraćanje.</p>
      
      <h3>Plaćanje nepotrebnih dodataka</h3>
      <p>Rent-a-car kompanije često nude razne dodatke poput GPS uređaja, dečijih sedišta ili Wi-Fi hotspota po visokim dnevnim cenama. Razmislite da li su vam ovi dodaci zaista potrebni i da li možete doneti svoje (npr. koristiti navigaciju na telefonu umesto iznajmljivanja GPS-a).</p>
      
      <h3>Nerazumevanje politike goriva</h3>
      <p>Politike o gorivu mogu biti zbunjujuće i skupe ako ih ne razumete. Najčešće opcije su "pun-pun" (preuzimate sa punim rezervoarom i vraćate sa punim) ili "plati unapred" (plaćate za pun rezervoar unapred i možete vratiti vozilo sa bilo kojom količinom goriva).</p>
      <p>Opcija "pun-pun" je obično najpovoljnija, ali budite sigurni da napunite rezervoar neposredno pre vraćanja vozila i sačuvajte račun kao dokaz. Neke kompanije naplaćuju premijum cene ako moraju same da dopune rezervoar.</p>
      
      <h3>Kasno vraćanje vozila</h3>
      <p>Mnoge rent-a-car kompanije imaju period tolerancije od 29-59 minuta za vraćanje vozila, ali nakon toga mogu naplatiti ceo dodatni dan. Uvek planirajte da vratite vozilo na vreme ili ranije, uzimajući u obzir moguće saobraćajne gužve ili druge nepredviđene okolnosti.</p>
      
      <h3>Rezervisanje pogrešne kategorije vozila</h3>
      <p>Izbor vozila koje ne odgovara vašim potrebama može dovesti do neugodnosti i dodatnih troškova. Premalo vozilo može biti neudobno za duga putovanja ili nedovoljno za sav prtljag, dok preveliko vozilo može biti teže za vožnju i trošiti više goriva.</p>
      
      <h3>Zaključak</h3>
      <p>Iznajmljivanje vozila ne mora biti komplikovano ili skupo iskustvo ako znate šta treba da očekujete i na šta da obratite pažnju. Izbegavanjem ovih čestih grešaka, možete uštedeti novac i imati bezbrižnije iskustvo iznajmljivanja. U SAFE Rent a Car-u, trudimo se da proces bude transparentan i jednostavan, pružajući sve potrebne informacije unapred kako biste mogli doneti informisane odluke.</p>
    `
  }
];

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const postsPerPage = 6;
  
  // Calculate current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Handle "Pročitaj više" click
  const handleReadMore = (postId: string) => {
    setSelectedPost(postId);
    window.scrollTo(0, 0);
  };
  
  // Find selected post
  const selectedPostData = selectedPost 
    ? allBlogPosts.find(post => post.id === selectedPost) 
    : null;
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
        
        {selectedPostData ? (
          // Single Post View
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => setSelectedPost(null)}
              className="mb-6 flex items-center text-blue-700 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Nazad na blog
            </button>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 md:h-96 bg-gray-300">
                <img 
                  src={selectedPostData.image} 
                  alt={selectedPostData.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/blog/blog-placeholder.jpg'; // Fallback image
                  }}
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{selectedPostData.date}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedPostData.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{selectedPostData.title}</h2>
                <div 
                  className="prose max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: selectedPostData.content }}
                />
              </div>
            </div>
          </div>
        ) : (
          // Blog List View
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-300">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/blog/blog-placeholder.jpg'; // Fallback image
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <button 
                      onClick={() => handleReadMore(post.id)}
                      className="text-blue-700 hover:underline inline-flex items-center"
                    >
                      Pročitaj više
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <nav className="inline-flex rounded-md shadow">
                <button 
                  onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`py-2 px-4 border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'} border-gray-300 rounded-l-md`}
                >
                  Prethodna
                </button>
                
                {[...Array(Math.ceil(allBlogPosts.length / postsPerPage))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`py-2 px-4 border ${currentPage === i + 1 ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button 
                  onClick={() => currentPage < Math.ceil(allBlogPosts.length / postsPerPage) && paginate(currentPage + 1)}
                  disabled={currentPage === Math.ceil(allBlogPosts.length / postsPerPage)}
                  className={`py-2 px-4 border ${currentPage === Math.ceil(allBlogPosts.length / postsPerPage) ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'} border-gray-300 rounded-r-md`}
                >
                  Sledeća
                </button>
              </nav>
            </div>
          </>
        )}
        
        {/* Newsletter */}
        <div className="bg-blue-700 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Prijavite se na naš newsletter</h2>
          <p className="text-lg mb-6">
            Budite prvi koji će saznati o specijalnim ponudama i novostima
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="Vaša email adresa" 
              className="px-4 py-2 rounded-md sm:rounded-r-none flex-grow text-gray-800 focus:outline-none"
            />
            <button 
              type="submit" 
              className="mt-2 sm:mt-0 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-2 rounded-md sm:rounded-l-none transition-colors"
            >
              Prijavi se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
