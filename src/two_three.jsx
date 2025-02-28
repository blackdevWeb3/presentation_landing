const Two_Three = () => {
  return (
    <div className="flex flex-col gap-16 p-24 text-2xl w-full">
      <div className="flex flex-row items-center justify-start gap-88 px-30">
        <p className="w-[50%] ">
          As a leader in blockchain validation, <b>TAR GLOBAL</b> owns and
          manages a robust TON validator pool, helping to maintain network
          integrity while offering lucrative staking opportunities for
          participants.
        </p>
        <img
          src="assets/vecteezy_artificial-intelligence-icon-element-design-illustration-ai_22719506 1 1.png"
          alt="pic"
        />
      </div>

      <div className=" flex flex-row items-center justify-end gap-88 px-60">
        <img src="assets/icons 1.png" alt="icon_bag" />
        <div className=" py-16 pl-8 pr-12 w-[472px] h-auto aspect-[1/1] bg-[url('assets/rect_angle2.png')] bg-no-repeat">
          <p className="font-bold text-[24px] pb-6">
            Exciting Growth – Approaching the 500K Milestone
          </p>
          <p>
            Our validator pool is steadily expanding, and we are now approaching
            the 500K mark! Currently, we have about 467K TON staked, and once we
            reach 500K, we will implement a contract update
          </p>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-start gap-92 px-30">
        <div className=" py-16 pl-8 pr-12 w-[472px] h-auto aspect-[1/1] bg-[url('assets/rect_angle1.png')] bg-no-repeat">
          <p className="font-bold text-[24px] pb-6">
            Dynamic Contract Updates for Sustainability
          </p>
          <p>
            At TAR GLOBAL, we adapt our validator contracts at key milestones to
            ensure optimal performance and competitive returns. These updates
            occur at key staking thresholds:
          </p>
        </div>
        <img src="assets/Peleh - box.png" alt="step" />
      </div>
      <p className="px-60 text-center">
        Each contract update may bring adjustments in staking rates and
        duration, depending on the agreements and market conditions. This
        ensures that our validator pool remains profitable, sustainable, and
        aligned with TON’s long-term vision.
      </p>
    </div>
  );
};

export default Two_Three;
