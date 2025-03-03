// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center text-center w-full h-screen ">
        <div className="flex flex-col gap-[13px] max-w-4xl px-[240px]">
            <span className="text-[24px] font-bold  text-[#ffffff] mx-0 leading-[41px]">
            Understanding the TON Blockchain Validator Pool
            </span>
            <span className="text-[64px] font-bold text-[#ffffff] mx-0 leading-[109px]">
            TAR GLOBAL Validator Pools
            </span>
            <span className="text-[20px] font-normal text-[#ffffff]  leading-[34.2px]">
            TON (The Open Network) operates on a highly efficient and scalable Proof-of-Stake (PoS) system, where validator pools play a crucial role in securing the network and processing transactions. At the core of TON’s validator operations are advanced protocols like ADNL (Abstract Datagram Network Layer) for seamless node communication, Catchain Protocol for fast and reliable consensus, and LiteServer Protocol to ensure smooth interactions with lightweight clients.
            </span>
        </div>
    </section>
  );
};

export default Hero;
