// import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Light from "./components/light";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="w-full bg-[url(assets/main-section-bg.png)] bg-cover ">
        <div className="w-full max-w-[1440px] m-auto md:h-[831px]">
          <Hero />
        </div>
      </div>
      <div className="w-full max-w-[1440px] m-auto">
        <Light />
      </div>
      <Footer />
    </div>
  );
}

export default App;
