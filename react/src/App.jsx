import React, { useState } from 'react';
import ComponentShowcase from './pages/ComponentShowcase';
import FormPage from './pages/FormPage';
import { ToastProvider } from './components/common/Toast';

function App() {
  const [currentPage, setCurrentPage] = useState('showcase');

  return (
    <ToastProvider>
      {currentPage === 'showcase' ? (
        <div className="relative">
          <ComponentShowcase />
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
            <button 
              onClick={() => setCurrentPage('form')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-2xl shadow-blue-500/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              Go to Form Page 📝
            </button>
          </div>
        </div>
      ) : (
        <FormPage onBack={() => setCurrentPage('showcase')} />
      )}
    </ToastProvider>
  );
}

export default App;



