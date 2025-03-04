// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full pt-32 pb-[34px] md:pt-[240px] md:pb-[95px] flex flex-col items-center">
      <div className="flex flex-col gap-[13px] md:gap-[60px] text-center px-8 max-w-[1090px]">
        <div className="text-[11px] font-bold leading-[18.81px] text-white md:text-[1.5rem] md:leading-[41.04px]">
          Understanding the TON Blockchain Validator Pool
        </div>
        <div className="text-[24px] md:text-[4rem] md:leading-[110px] font-bold leading-[41.04px] text-white ">
          TAR GLOBAL Validator Pools
        </div>
        <div className="text-[12px] md:text-[1.25rem] md:leading-[34.2px] text-white leading-[20.52px] font-normal ">
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
