const Mean = () => {
  return (
    <div className="flex flex-col gap-20 w-full h-auto p-54 max-2xl:p-10 relative">
      <div className="w-[70%] max-2xl:w-full text-2xl ">
        <p className="text-3xl font-extrabold pb-5">What This Means for You?</p>
        <p>
          If you’re already staking, your existing stake remains secure.
          <br />
          <br />
          New participants should take advantage of the current terms before the
          500K contract update.
          <br />
          <br />
          Future contract adjustments may increase or decrease rates and
          durations, based on network demand and validator agreements.
          <br />
          <br />
        </p>
      </div>
      <div className="flex flex-row">
        <img
          src="assets/ellipse3.png"
          alt="ellipse3"
          className="absolute -translate-y-[30%] -z-10"
        />
        <div className="w-[50%] max-lg:w-full max-lg:text-center max-lg:text-xl text-2xl ml-auto">
          <p className="text-3xl font-extrabold pb-5 max-lg:text-2xl">
            Join the Future of Blockchain with TAR GLOBAL
          </p>
          <p>
            With TON's cutting-edge technology and TAR GLOBAL's strategic
            approach, our validator pool remains a top choice for investors and
            blockchain enthusiasts. Stake with confidence and be part of this
            exciting journey toward a decentralized futrue!
          </p>
        </div>
      </div>
      <div className="w-full text-3xl leading-14 max-lg:text-2xl max-lg:text-center max-lg:leading-8">
        <p className="text-4xl font-extrabold">
          Solana Blockchain Validator Protocols
        </p>
        <br />
        <p>
          Solana's validator network is built for high-speed, low-cost
          transactions, operating on advanced blockchain protocols:
          <br /> Tower BFT Consensus : A PoH-optimized Byzantine Fault Tolerance
          system for efficient decision-making. <br />
          Proof-of-History (PoH) : Ensures transactions are time-ordered before
          consensus, reducing latency.
          <br /> Gulf Stream Protocol : Eliminates the need for a mempool,
          allowing faster transaction processing. <br />
          Turbine Protocol : Uses a BitTorrent-like model to propagate
          transaction data efficiently.
          <br /> Gossip Protocol : Allows validators to share updates across the
          network rapidly.
        </p>
      </div>
    </div>
  );
};

export default Mean;
