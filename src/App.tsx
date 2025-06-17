// React import is used implicitly
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import LongTermRentalPage from './pages/LongTermRentalPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';
import CarDetailsPage from './pages/CarDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/automobili" element={<CarsPage />} />
            <Route path="/automobili/:id" element={<CarDetailsPage />} />
            <Route path="/dugorocni-najam" element={<LongTermRentalPage />} />
            <Route path="/uslovi-najma" element={<TermsPage />} />
            <Route path="/o-nama" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/rezervacija" element={<ReservationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
