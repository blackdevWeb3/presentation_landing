import lightbulb from "../assets/lightbulb.png"
import arrow100 from "../assets/Arrow100.png"
import arrow500 from "../assets/Arrow500.png"
import arrow1M from "../assets/Arrow1M.png"
import arrow10M from "../assets//Arrow10M.png"
import arrow100M from "../assets/Arrow100M.png"
import computer from "../assets/Computer.png"
import rect29 from "../assets/Rectangle29.png"


const Light: React.FC =()=>{
    return(
        <div className="flex justify-between flex-col px-[175px] mt-[95px] gap-[95px]">
            <div className="flex gap-[225px] justify-between items-center">
                <div className="py-[29px] text-[#ffffff] text-[20px]">
                    As a leader in blockchain validation, TAR GLOBAL owns and manages a robust TON validator pool, helping to maintain network integrity while offering lucrative staking opportunities for participants.
                </div>
                <img src={lightbulb} alt="lightbulb" className="w-[252.5px] max-h-[192px]"></img>
            </div>
            <div className="flex justify-between gap-[146px]">
                <div className="max-w-[472px] bg-[#FFFFFF29] rounded-[20px] px-[27px] py-[67px] border-1 border-[#FFFFFF21] flex flex-col gap-[38px]">
                    <h1 className="text-[20px] leading-[34.2px] font-bold text-[#ffffff]">Dynamic Contract Updates for Sustainability</h1>
                    <p className="text-[18px] leading-[30.78px] font-normal text-[#ffffff]">At TAR GLOBAL, we adapt our validator contracts at key milestones to ensure optimal performance and competitive returns. These updates occur at key staking thresholds:</p>
                </div>
                <div className="max-w-[472px] bg-[#FFFFFF29] rounded-[20px] px-[27px] py-[67px] border-1 border-[#FFFFFF21] flex flex-col gap-[38px]">
                    <h1 className="text-[20px] leading-[34.2px] font-bold text-[#ffffff]">Dynamic Contract Updates for Sustainability</h1>
                    <p className="text-[18px] leading-[30.78px] font-normal text-[#ffffff]">Our validator pool is steadily expanding, and we are now approaching the 500K mark! Currently, we have about 467K TON staked, and once we reach 500K, we will implement a contract update.</p>
                </div>
            </div>
            <div className="px-[206px] font-[600] text-[22px] leading-[37.62px] text-[#ffffff]">
                Each contract update may bring adjustments in staking rates and duration, depending on the agreements and market conditions. This ensures that our validator pool remains profitable, sustainable, and aligned with TON’s long-term vision.
            </div>
            <div className="flex gap-[67px] justify-between">
                <div><img src={arrow100}></img></div>
                <div><img src={arrow500}></img></div>
                <div><img src={arrow1M}></img></div>
                <div><img src={arrow10M}></img></div>
                <div><img src={arrow100M}></img></div>
            </div>
            <div className="flex gap-[50px] relative">
                <div >
                    <img src={rect29} className="absolute flex top-[-398px] left-[-130px]"></img>
                    <img src={computer} className="relative z-1"></img>
                </div>
            </div>
        </div>
    )
}

export default Light;