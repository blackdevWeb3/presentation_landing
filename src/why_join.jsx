const Why_Join = () => {
  return (
    <div className="flex  items-center w-full pr-[70px] pt-[180px] pb-[300px] max-2xl:p-10 relative max-2xl:text-left">
      <div className="w-[50%] max-2xl:w-full max-lg:text-xl text-3xl max-2xl:leading-8 leading-16 ml-auto">
        <p className="font-[800] text-[32px] leading-[54px]">
          Why Join the Alpha Pool?
        </p>
        <br />
        <p className="font-[400] text-[26px] leading-[45px]">
          We have secured a contract on the Solana blockchain that grants us the
          right to validate transactions until we reach $100M. This gives us the
          ability to generate stable, long-term profits:
        </p>
        <br />
        <p className="font-[400] text-[26px] leading-[45px]">
          ✅ Liquidity & Growth – The Alpha Pool is designed to build liquidity,
          strengthening our validator position.
        </p>
        <br />
        <p className="font-[400] text-[26px] leading-[45px]">
          ✅ Lifetime Blockchain Rewards-Once we reach $100M, we secure lifetime
          validator rewards from Solana.
        </p>
        <br />
        <p className="font-[400] text-[26px] leading-[45px]">
          ✅ Mitigating Slashing Risks – We implement strategies to avoid
          slashing and protect the pool’s stability.{" "}
        </p>
      </div>
      <img
        src="assets/pic2.png"
        alt="pic2"
        className="absolute left-[7%] -z-10"
      />
      <img
        src="assets/pic2_ellipse.png"
        alt="pic1"
        className="absolute left-0 bottom-[13%] -z-20"
      />
    </div>
  );
};
export default Why_Join;
