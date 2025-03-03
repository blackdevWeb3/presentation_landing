// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Light from "./components/light";

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className="bg-[url(assets/main-section-bg.png)] bg-cover">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex justify-center flex-col">
              <Hero />
          </div>
        </div>
        </div>
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex justify-center flex-col">
          <Light />
        </div>
      </div>
    </div>
  );
};

export default App;



