import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="w-20 h-20 rounded-3xl bg-brand-100 flex items-center justify-center text-brand-600 mb-6 font-black text-3xl">
        404
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-500 mt-2 max-w-sm">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-md shadow-brand-500/20 transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Return to Dashboard</span>
      </Link>
    </div>
  );
};

export default NotFound;
