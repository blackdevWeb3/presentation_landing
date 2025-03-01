import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header";
import Title from "./title";
import Two_Three from "./two_three";
import Mean from "./mean";
import How_Alpha_Pool from "./how_alpha_pool";
import How_Join from "./how_join";
import End from "./end";
import Footer from "./footer";
import Why_Join from "./why_join";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative min-h-screen max-w-full flex flex-col items-center justify-center mx-auto">
      <img
        src="assets/ellipse1.png"
        alt="ellipse1"
        className="absolute top-0 left-0 -z-10 animate-pulse"
      />
      <Header />
      <Title />
      <Two_Three />
      <Mean />
      <How_Alpha_Pool />
      <Why_Join />
      <How_Join />
      <End />
      <Footer />
    </div>
  );
}

export default App;
