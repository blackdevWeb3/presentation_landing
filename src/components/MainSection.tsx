// src/components/MainSection.tsx
import React from 'react';
import lightbulb from '../assets/lightbulb.png'; // Ensure you have placed the lightbulb image

const MainSection: React.FC = () => {
  return (
    <main className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-20 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <section className="mb-16">
            <h1 className="text-4xl font-extrabold mb-4">
              TAR GLOBAL Validator Pools
            </h1>
            <p className="text-lg">
              Understanding the TON Blockchain Validator Pool
            </p>
          </section>
          <section className="text-lg mb-16">
            <p>
              TON (The Open Network) operates on a highly efficient and scalable Proof-of-Stake (PoS) system, where validator pools play a crucial role in securing the network and processing transactions. At the core of TON's validator operations are advanced protocols like ADNL (Abstract Datagram Network Layer) for seamless node communication, Catchain Protocol for fast and reliable consensus, and LiteServer Protocol to ensure smooth interactions with lightweight clients.
            </p>
          </section>
          <section className="text-lg">
            <p>
              As a leader in blockchain validation, TAR GLOBAL owns and manages a robust TON validator pool, helping to maintain network integrity while offering lucrative staking opportunities for participants.
            </p>
          </section>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img src={lightbulb} alt="Lightbulb Icon" className="w-1/2" />
        </div>
      </div>
    </main>
  );
};

export default MainSection;
