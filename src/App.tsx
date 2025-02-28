// src/App.tsx
import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-[#0D0D78]">
      <Header />
      <MainSection />
    </div>
  );
};

export default App;
