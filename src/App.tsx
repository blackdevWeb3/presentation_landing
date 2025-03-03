// import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Light from "./components/light";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Light />
      <Footer />
    </div>
  );
}

export default App;
