const Two_Three = () => {
  return (
    <div className="flex flex-col gap-16 px-[146px] mt-[70px]  w-full">
      <div className="flex flex-row max-lg:flex-col max-lg:gap-y-20 items-center w-full justify-between">
        <p className="w-[50%] max-lg:w-full text-[20px] font-[500] leading-[34px]">
          As a leader in blockchain validation, <b>TAR GLOBAL</b> owns and
          manages a robust TON validator pool, helping to maintain network
          integrity while offering lucrative staking opportunities for
          participants.
        </p>
        <div className="flex justify-center w-[50%] max-lg:w-full">
          <img
            src="assets/vecteezy_artificial-intelligence-icon-element-design-illustration-ai_22719506 1 1.png"
            alt="pic"
            className=" w-[253px] h-auto"
          />
        </div>
      </div>

      <div className=" flex max-lg:flex-col-reverse max-lg:gap-10 w-full items-center justify-between">
        <div className="w-[50%] max-lg:w-full flex justify-center items-center">
          <img
            src="assets/icons 1.png"
            alt="icon_bag"
            className="w-[40%] h-auto"
          />
        </div>
        <div className="w-1/2 max-lg:w-full max-lg:flex max-lg:justify-center">
          <div className="w-[470px] h-[470px] pb-[7px] pl-[8px] pt-[95px] pr-[88px] bg-[url('assets/rect_angle2.png')] bg-no-repeat overflow-hidden">
            <p className="text-center text-[20px] font-[700] leading-[34px] pb-6">
              Exciting Growth – Approaching the 500K Milestone
            </p>
            <br />
            <p className="text-center text-[18px] font-[400] leading-[31px]">
              Our validator pool is steadily expanding, and we are now
              approaching the 500K mark! Currently, we have about 467K TON
              staked, and once we reach 500K, we will implement a contract
              update
            </p>
          </div>
        </div>
      </div>
      <div className="flex max-lg:flex-col max-lg:gap-10 w-full items-center justify-between">
        <div className=" flex justify-center items-center w-1/2 max-lg:w-full">
          <div className="w-[470px] h-[470px] pl-[51px] pr-[45px] pt-[88px] bg-[url('assets/rect_angle1.png')] bg-no-repeat overflow-hidden px-5 py-20">
            <p className="text-center text-[20px] font-[700] leading-[34px] pb-6">
              Dynamic Contract Updates for Sustainability
            </p>
            <p className="text-center text-[18px] font-[400] leading-[31px]">
              At TAR GLOBAL, we adapt our validator contracts at key milestones
              to ensure optimal performance and competitive returns. These
              updates occur at key staking thresholds:
            </p>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full flex items-center justify-start max-lg:justify-center">
          <img
            src="assets/Peleh - box.png"
            alt="step"
            className="w-[60%] h-auto"
          />
        </div>
      </div>
      <p className="px-[248px] pt-[128px] max-2xl:px-20 max-lg:px-0 text-center text-[22px] font-[600] leading-[37.5px]">
        Each contract update may bring adjustments in staking rates and
        duration, depending on the agreements and market conditions. This
        ensures that our validator pool remains profitable, sustainable, and
        aligned with TON’s long-term vision.
      </p>
    </div>
  );
};

export default Two_Three;
