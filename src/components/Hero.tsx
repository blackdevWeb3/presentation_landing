// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[url(assets/main-section-bg.png)] bg-cover pt-32 pb-24 flex flex-col items-center">
      <div className=" text-center px-8 max-w-[1090px]">
        <div className="text-[13px] md:text-[1.5rem] md:leading-[41px] font-[500] tracking-wider text-white">
          Understanding the TON Blockchain Validator Pool
        </div>
        <div className="text-2xl md:text-[4rem] md:leading-[110px] font-bold tracking-wide text-white mt-6">
          TAR GLOBAL Validator Pools
        </div>
        <div className="text-sm md:text-[1.25rem] md:tracking-wide md:leading-[34px] text-white leading-[1.8rem] font-thin mt-6">
          TON (The Open Network) operates on a highly efficient and scalable
          Proof-of-Stake (PoS) system, where validator pools play a crucial role
          in securing the network and processing transactions. At the core of
          TON’s validator operations are advanced protocols like ADNL (Abstract
          Datagram Network Layer) for seamless node communication, Catchain
          Protocol for fast and reliable consensus, and LiteServer Protocol to
          ensure smooth interactions with lightweight clients.
        </div>
      </div>
    </section>
  );
};

export default Hero;
