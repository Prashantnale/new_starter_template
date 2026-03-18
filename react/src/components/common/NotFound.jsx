import React from 'react';
import { Home, ArrowLeft, Ghost } from 'lucide-react';
import Button from './Button';

const NotFound = ({ onBackHome = () => window.location.href = '/' }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        {/* Animated Background Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-700"></div>

        {/* 404 Text */}
        <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 drop-shadow-sm select-none">
          404
        </h1>
        
        {/* Icon Overlay */}
        <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 animate-bounce delay-100">
          <Ghost size={48} className="text-blue-500 dark:text-blue-400 opacity-60" />
        </div>
      </div>

      <div className="max-w-md space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Oops! Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
        <Button 
          variant="secondary" 
          size="lg" 
          icon={ArrowLeft} 
          onClick={() => window.history.back()}
          className="w-full sm:w-auto"
        >
          Go Back
        </Button>
        <Button 
          variant="primary" 
          size="lg" 
          icon={Home} 
          onClick={onBackHome}
          className="w-full sm:w-auto"
        >
          Back to Home
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
    </div>
  );
};

export default NotFound;
