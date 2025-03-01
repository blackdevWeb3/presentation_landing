const Mean = () => {
  return (
    <div className="flex flex-col gap-20 w-full h-auto p-[141px] max-2xl:p-10 relative">
      <div className="w-[55%] max-2xl:w-full text-2xl ">
        <p className="text-[32px] font-[900] leading-[54px] pb-[41px]">
          What This Means for You?
        </p>
        <p className="text-[24px] font-[600] leading-[41px]">
          If you’re already staking, your existing stake remains secure. New
          participants should take advantage of the current terms before the
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
        <div className="flex items-center justify-center">
          <img
            src="assets/pic.png"
            alt="e"
            className="w-[500px] h-[337px] -z-20"
          />
        </div>

        <div className="w-[50%] max-lg:w-full max-lg:text-center max-lg:text-xl text-2xl ml-auto">
          <p className="font-[800] text-[32px] leading-[54px] max-lg:text-2xl">
            Join the Future of Blockchain with TAR GLOBAL
          </p>
          <p className="font-[500] text-[20px] leading-[34px]">
            With TON's cutting-edge technology and TAR GLOBAL's strategic
            approach, our validator pool remains a top choice for investors and
            blockchain enthusiasts. Stake with confidence and be part of this
            exciting journey toward a decentralized futrue!
          </p>
        </div>
      </div>
      <div className="w-full text-3xl leading-14 max-lg:text-2xl max-lg:text-center max-lg:leading-8">
        <p className=" text-[36px] font-[800] leading-[70px]">
          Solana Blockchain Validator Protocols
        </p>
        <br />
        <p className="text-[28px] font-[400] leading-[47px]">
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
