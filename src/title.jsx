const Title = () => {
  return (
    <div className="relative text-center w-full h-auto px-[270px] max-2xl:px-[20px] space-y-5 text-2xl">
      <p className="text-[48px] max-xl:text-[30px] font-[700] leading-[82px] ">
        TAR GLOBAL Validator Pools
      </p>
      <p className="text-[30px] max-lg:2xl font-[700] leading-[90px]">
        Understanding the TON Blockchain Validator Pool
      </p>
      <p className=" text-[16px] font-[400] leading-[27px] pb-[20px]">
        TON (The Open Network) operates on a highly efficient and scalable
        Proof-of-Stake (PoS) system, where validator pools play a crucial role
        in securing the network and processing transactions. At the core of
        TON’s validator operations are advanced protocols like ADNL (Abstract
        Datagram Network Layer) for seamless node communication, Catchain
        Protocol for fast and reliable consensus, and LiteServer Protocol to
        ensure smooth interactions with lightweight clients.
      </p>
      <img
        src="assets/ellipse2.png"
        alt="ellipse2"
        className="absolute right-0 bottom-0 w-64  translate-y-[10%] -z-10 animate-pulse"
      />
    </div>
  );
};

export default Title;
