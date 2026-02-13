
import React from 'react';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import InfoCard from './components/InfoCard';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-4 md:px-20 max-w-7xl">
        <Breadcrumbs />
        
        <div className="mt-6 mb-2">
          <h1 className="text-xl font-bold text-gray-700 inline-block border-b-2 border-saudi-green pb-1 pr-12">
            Personal Information
          </h1>
        </div>

        <div className="relative mt-4 mb-8">
          <InfoCard />
          
          {/* Floating Help Button */}
          <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="w-12 h-12 rounded-full border-2 border-[#00a67a] bg-white flex items-center justify-center cursor-pointer shadow-md">
              <div className="w-8 h-8 rounded-full bg-[#00a67a] flex items-center justify-center">
                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                 </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-20">
          <button className="bg-[#007A53] hover:bg-[#006342] text-white px-16 py-2 rounded-md font-medium transition-colors">
            Back
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
