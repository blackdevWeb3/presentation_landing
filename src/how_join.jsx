const How_Join = () => {
  return (
    <div className="flex  items-center w-full pl-[236px] max-2xl:p-10 relative">
      <div className="w-[50%] max-2xl:w-full text-3xl max-lg:text-xl max-lg:leading-8 leading-16">
        <p className="font-[800] text-[32px] leading-[54px]">How to Join?</p>
        <br />
        <p className="font-[400] text-[26px] leading-[45px]">
          1. Deposit using any of the accepted payment methods
        </p>
        <br />
        <p className="font-[400] text-[26px] leading-[45px]">
          2. We convert and send funds to the pool after a series of
          verification checks.
        </p>
        <br />
        <p className="font-[400] text-[26px] leading-[45px]">
          3. Click the "Keys" button after depositing and send your Solana
          address on the SOL Chain – this will be your identity in the pool.
        </p>
      </div>
      <img
        src="assets/pic3.png"
        alt="pic1"
        className="absolute right-[10%] -z-10 animate-pulse"
      />
      <img
        src="assets/pic3_ellipse.png"
        alt="pic1"
        className="absolute right-0 -z-20"
      />
    </div>
  );
};
export default How_Join;
