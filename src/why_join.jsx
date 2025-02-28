const Why_Join = () => {
  return (
    <div className="flex  items-center w-full p-54 relative">
      <div className="w-[50%] text-3xl leading-16 ml-auto">
        <p className="text-4xl font-extrabold">Why Join the Alpha Pool?</p>
        <br />
        <p>
          We have secured a contract on the Solana blockchain that grants us the
          right to validate transactions until we reach $100M. This gives us the
          ability to generate stable, long-term profits:
        </p>
        <br />
        <p>
          ✅ Liquidity & Growth – The Alpha Pool is designed to build liquidity,
          strengthening our validator position.
        </p>
        <br />
        <p>
          ✅ Lifetime Blockchain Rewards-Once we reach $100M, we secure lifetime
          validator rewards from Solana.
        </p>
        <br />
        <p>
          ✅ Mitigating Slashing Risks – We implement strategies to avoid
          slashing and protect the pool’s stability.{" "}
        </p>
      </div>
      <img
        src="assets/pic2.png"
        alt="pic2"
        className="absolute left-[10%] -z-10"
      />
      <img
        src="assets/pic2_ellipse.png"
        alt="pic1"
        className="absolute left-0 bottom-[10%] -z-10"
      />
    </div>
  );
};
export default Why_Join;
