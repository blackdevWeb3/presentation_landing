const Title = () => {
  return (
    <div className="relative text-center w-full h-auto py-20 px-80 max-2xl:px-20 space-y-5 text-2xl">
      <p className="text-[44px] max-xl:[30px] font-extrabold">
        TAR GLOBAL Validator Pools
      </p>
      <p className="text-3xl max-lg:2xl font-bold">
        Understanding the TON Blockchain Validator Pool
      </p>
      <p className="pt-16 max-lg:pt-4">
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
        className="absolute right-0 bottom-0 w-64  translate-y-[10%] -z-10"
      />
    </div>
  );
};

export default Title;
