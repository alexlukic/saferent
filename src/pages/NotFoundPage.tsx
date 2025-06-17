import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-9xl font-bold text-blue-700">404</h1>
        <h2 className="text-4xl font-bold mt-4 mb-8">Stranica nije pronađena</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Stranica koju tražite ne postoji ili je premeštena.
        </p>
        <Link 
          to="/" 
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-md inline-block transition-colors"
        >
          Povratak na početnu stranu
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
