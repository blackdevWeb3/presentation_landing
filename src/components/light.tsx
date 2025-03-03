import lightbulb from "../assets/lightbulb.png";

import computer from "../assets/Computer.png";
import rect29 from "../assets/Rectangle29.png";
import arrow from "../assets/arrow.svg";
import arrow1 from "../assets/arrow_1.svg";
import float from "../assets/float.png";
import float1 from "../assets/Hosting.png";

import { MdCheckCircleOutline } from "react-icons/md";

import {
  PiNumberCircleFourThin,
  PiNumberCircleOneThin,
  PiNumberCircleThreeThin,
  PiNumberCircleFiveThin,
  PiNumberCircleTwoThin,
} from "react-icons/pi";
const Light: React.FC = () => {
  return (
    <div className="w-full p-6 md:px-[140px] ">
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center text-center">
        <div className="text-[15px] md:text-[1.5rem] md:leading-[34px] md:text-start md:max-w-[644px] tracking-normal leading-6 mt-6">
          As a leader in blockchain validation, TAR GLOBAL owns and manages a
          robust TON validator pool, helping to maintain network integrity while
          offering lucrative staking opportunities for participants.
        </div>
        <div className="flex justify-center w-[174px] md:w-[252.2px]">
          <img className="w-auto h-auto" src={lightbulb} alt="light" />
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-[1rem] md:gap-[9rem] justify-center">
        <div className="w-full text-sm md:text-[1.5rem] md:leading-[34px] bg-[#FFFFFF29] rounded-[20px] px-[1.5rem] md:px-[1.75rem] py-[3rem] md:py-[4.25rem] border border-gray-500 max-w-[472px]">
          <div className="font-bold">
            Dynamic Contract Updates for Sustainability
          </div>
          <div className="mt-4 md:text-[1.25rem] md:leading-[30px]">
            At TAR GLOBAL, we adapt our validator contracts at key milestones to
            ensure optimal performance and competitive returns. These updates
            occur at key staking thresholds:
          </div>
        </div>
        <div className="w-full text-sm md:text-[1.5rem] md:leading-[34px] bg-[#FFFFFF29] rounded-[20px] px-[1.5rem] md:px-[1.75rem] py-[3rem] md:py-[4.25rem] border border-gray-500 max-w-[472px]">
          <div className="font-bold">
            Exciting Growth – Approaching the 500K Milestone
          </div>
          <div className="mt-4 md:text-[1.25rem] md:leading-[30px]">
            Our validator pool is steadily expanding, and we are now approaching
            the 500K mark! Currently, we have about 467K TON staked, and once we
            reach 500K, we will implement a contract update.
          </div>
        </div>
      </div>
      <div className="font-bold text-center text-md mt-8 md:px-16 md:text-[22px] md:leading-[37px]">
        Each contract update may bring adjustments in staking rates and
        duration, depending on the agreements and market conditions. This
        ensures that our validator pool remains profitable, sustainable, and
        aligned with TON’s long-term vision.
      </div>
      <div className="w-full mt-6">
        <img src={arrow} alt="" className="w-full md:hidden" />
        <img src={arrow1} alt="" className="w-full hidden md:block" />
      </div>
      <div className="flex justify-between"></div>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="flex justify-center items-center w-[174px] md:w-[351px]">
          <img src={rect29} className="absolute z-[-10]" />
          <img className="w-auto h-auto mt-6 animate-pulse" src={computer} alt="light" />
        </div>
        <div className="text-[15px] tracking-normal leading-6 mt-6 px-6 md:max-w-[754px] md:pl-8">
          <div className="text-md font-bold md:text-[2rem] md:leading-[4rem] text-center">
            What This Means for You?
          </div>
          <ul className="list-disc mt-6 md:pl-4">
            <li className=" text-[12px] md:text-[1.5rem] md:leading-[2rem] pb-3">
              If you’re already staking, your existing stake remains secure.
            </li>
            <li className=" text-[12px] md:text-[1.5rem] md:leading-[2rem] pb-3">
              New participants should take advantage of the current terms before
              the 500K contract update.
            </li>
            <li className=" text-[12px] md:text-[1.5rem] md:leading-[2rem] pb-3">
              Future contract adjustments may increase or decrease rates and
              durations, based on network demand and validator agreements.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex overflow-auto gap-4">
          <div className="font-bold text-[12px] leading-[1rem]"></div>
          <div className="text-[13px] leading-[23px]"></div>
        </div>
      </div>
      <div className="text-center md:text-start mt-6">
        <div className="font-bold md:text-[2rem] md:leading-[3.75rem] md:font-[800] ">
          Join the Future of Blockchain with TAR GLOBAL
        </div>
        <div className="font-semibold text-sm mt-4 md:text-[1.25rem] md:leading-[34px] md:font-[600]">
          With TON’s cutting-edge technology and TAR GLOBAL’s strategic
          approach, our validator pool remains a top choice for investors and
          blockchain enthusiasts. Stake with confidence and be part of this
          exciting journey toward a decentralized future!
        </div>
      </div>
      <div className="text-center mt-10">
        <div className="font-bold md:text-[2.25rem] md:leading-[4.5rem] md:font-[800]">
          Solana Blockchain Validator Protocols
        </div>
        <div className=" text-sm mt-4 md:text-[28px] md:leading-[48px] md:font-[400]">
          Solana's validator network is built for high-speed, low-cost
          transactions, operating on advanced blockchain protocols:
        </div>
      </div>
      <div>
        <div className="md:hidden flex overflow-auto gap-4 py-3">
          <div className="border border-gray-600 min-w-[175px] h-[128px] rounded-[20px] p-2">
            <div className="font-bold text-[12px] leading-[1rem]">
              Tower BFT Consensus :
            </div>
            <div className="text-[13px] leading-[23px]">
              A PoH-optimized Byzantine Fault Tolerance system for efficient
              decision-making.
            </div>
          </div>
          <div className="border border-gray-600 min-w-[175px] h-[128px] rounded-[20px] p-2">
            <div className="font-bold text-[12px] leading-[1rem]">
              Gossip Protocol :
            </div>
            <div className="text-[13px] leading-[23px]">
              Allows validators to share updates across the network rapidly.
            </div>
          </div>
          <div className="border border-gray-600 min-w-[175px] h-[128px] rounded-[20px] p-2">
            <div className="font-bold text-[12px] leading-[1rem]">
              Gulf Stream Protocol :
            </div>
            <div className="text-[13px] leading-[23px]">
              Eliminates the need for a mempool, allowing faster transaction
              processing.
            </div>
          </div>
          <div className="border border-gray-600 min-w-[175px] h-[128px] rounded-[20px] p-2">
            <div className="font-bold text-[12px] leading-[1rem]">
              Proof-of-History (PoH) :
            </div>
            <div className="text-[13px] leading-[23px]">
              Ensures transactions are time-ordered before consensus, reducing
              latency.
            </div>
          </div>
          <div className="border border-gray-600 min-w-[175px] h-[128px] rounded-[20px] p-2">
            <div className="font-bold text-[12px] leading-[1rem]">
              Turbine Protocol :
            </div>
            <div className="text-[13px] leading-[23px]">
              Uses a BitTorrent-like model to propagate transaction data
              efficiently.
            </div>
          </div>
        </div>
        <div>
          <div className="hidden md:block">
            <div className="flex gap-[44px]">
              <div className="border border-gray-600 w-1/2 rounded-[20px] text-[1.5rem] leading-[41px] px-7 py-8">
                <div className="font-bold text-[24px] leading-[41px]">
                  Tower BFT Consensus :
                </div>
                <div className="text-[20px] leading-[34px]">
                  A PoH-optimized Byzantine Fault Tolerance system for efficient
                  decision-making.
                </div>
              </div>
              <div className="border border-gray-600 w-1/2 rounded-[20px] text-[1.5rem] leading-[41px] px-7 py-8">
                <div className="font-bold text-[24px] leading-[41px]">
                  Gossip Protocol :
                </div>
                <div className="text-[20px] leading-[34px]">
                  Allows validators to share updates across the network rapidly.
                </div>
              </div>
            </div>
            <div className="flex gap-[51px] mt-6">
              <div className="border border-gray-600 rounded-[20px] px-7 py-8">
                <div className="font-bold text-[26px] leading-[45px]">
                  Gulf Stream Protocol :
                </div>
                <div className="text-[20px] leading-[34px]">
                  Eliminates the need for a mempool, allowing faster transaction
                  processing.
                </div>
              </div>
              <div className="border border-gray-600 rounded-[20px] px-7 py-8">
                <div className="font-bold text-[26px] leading-[45px]">
                  Proof-of-History (PoH) :
                </div>
                <div className="text-[20px] leading-[34px]">
                  Ensures transactions are time-ordered before consensus,
                  reducing latency.
                </div>
              </div>
              <div className="border border-gray-600 rounded-[20px] px-7 py-8">
                <div className="font-bold text-[26px] leading-[45px]">
                  Turbine Protocol :
                </div>
                <div className="text-[20px] leading-[34px]">
                  Uses a BitTorrent-like model to propagate transaction data
                  efficiently.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-2">
        <div className="text-center md:text-start mt-6">
          <div className="font-bold text-[15px] leading-[26px] md:text-[2rem] md:leading-[3.75rem] md:font-[800] ">
            Join the Future of Blockchain with TAR GLOBAL
          </div>
          <div className="text-[13px] leading-[23px] font-[400] mt-4 md:text-[20px] md:leading-[34px] md:font-[600] md:text-center">
            We have officially started the journey to a $100M validator pool
            with the ALPHA POOL! A big thank you to all investors who are
            joining us on this exciting path!
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center md:gap-4 md:flex-row md:mt-20 justify-center relative">
        <div className="relative">
          <div className="absolute bottom-[2.8rem] left-[19px] md:left-[25px] -z-100">
            <div className="hidden md:block w-[2px] h-[50px] bg-white"></div>
            <div className="hidden md:block w-[2px] h-[50px] bg-white"></div>
            <div className="hidden md:block w-[2px] h-[50px] bg-white"></div>
            <div className="w-[2px] h-[50px] bg-white"></div>
            <div className="w-[2px] h-[50px] bg-white"></div>
            <div className="w-[2px] h-[50px] bg-white"></div>
            <div className="w-[2px] h-[50px] bg-white"></div>
          </div>
          <div className="relative mt-6 z-10">
            <div className="md:text-[2rem] md:leading-[55px] md:font-[900] md:mb-8 leading-[28px] pl-2 font-bold">
              How the Alpha Pool Works:
            </div>
            <div className="flex mb-4 items-center  md:justify-start">
              <PiNumberCircleOneThin className="text-[2.5rem] md:text-[50px] bg-[#1A1165]" />
              <div className="text-[12px] leading-[20px] ml-2 md:text-[24px] md:leading-[34px] max-w-[320px]">
                We will continue adding to the pool until we reach $100M.
              </div>
            </div>
            <div className="flex mb-4 items-center  md:justify-start">
              <PiNumberCircleTwoThin className="text-[2.5rem] md:text-[50px] bg-[#1A1165]" />

              <div className="text-[12px] leading-[20px] ml-2 md:text-[24px] md:leading-[34px] max-w-[320px]">
                We reinvest 70% of the profits back into the pool for growth.
              </div>
            </div>
            <div className="flex mb-4 items-center  md:justify-start">
              <PiNumberCircleThreeThin className="text-[2.5rem] md:text-[50px] bg-[#1A1165]" />

              <div className="text-[12px] leading-[20px] ml-2 md:text-[24px] md:leading-[34px] max-w-[320px]">
                Investors receive 30% of the profits as
              </div>
            </div>
            <div className="flex mb-4 items-center  md:justify-start">
              <PiNumberCircleFourThin className="text-[2.5rem] md:text-[50px] bg-[#1A1165]" />

              <div className="text-[12px] leading-[20px] ml-2 md:text-[24px] md:leading-[34px] max-w-[320px]">
                Deposits are locked until we reach $100M.
              </div>
            </div>
            <div className="flex mb-4 items-center  md:justify-start">
              <PiNumberCircleFiveThin className="text-[2.5rem] md:text-[50px] bg-[#1A1165]" />
              <div className="text-[12px] leading-[20px] ml-2 md:text-[24px] md:leading-[34px] max-w-[320px]">
                Earnings After Reaching $100M
              </div>
            </div>
          </div>
        </div>
        <div className="w-[206px] md:w-[441px] mt-10 flex justify-center items-center">
          <img src={rect29} className="absolute z-[-10]"></img>
          <img className="w-auto animate-bounce" src={float1} alt="float" />
        </div>
      </div>
      <div className="mt-10">
        <div className="font-bold md:text-[2.25rem] md:text-center md:leading-[4.5rem] md:font-[800]">
          Why Join the Alpha Pool?
        </div>

        <div className="md:text-center md:px-16 md:text-[24px] md:leading-[41px]">
          We have secured a contract on the Solana blockchain that grants us the
          right to validate transactions until we reach $100M. This gives us the
          ability to generate stable, long-term profits:
        </div>

        <div className=" text-sm mt-4 w-full md:flex md:justify-between md:mt-24">
          <div>
            <MdCheckCircleOutline className="text-[2.25rem] md:text-[50px]" />
            <div className="w-[290px] text-[14px] leading-[24px] sm:text-[20px] sm:leading-[34px]">
              Liquidity & Growth – The Alpha Pool is designed to build
              liquidity, strengthening our validator position.
            </div>
          </div>
          <div>
            <MdCheckCircleOutline className="text-[2.25rem] md:text-[50px] " />
            <div className="w-[290px] text-[14px] leading-[24px] sm:text-[20px] sm:leading-[34px]">
              Liquidity & Growth – The Alpha Pool is designed to build
              liquidity, strengthening our validator position.
            </div>
          </div>
          <div>
            <MdCheckCircleOutline className="text-[2.25rem] md:text-[50px] " />
            <div className="w-[290px] text-[14px] leading-[24px] sm:text-[20px] sm:leading-[34px]">
              Liquidity & Growth – The Alpha Pool is designed to build
              liquidity, strengthening our validator position.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="flex justify-center items-center w-[174px] md:w-[262px]">
            <img src={rect29} className="absolute z-[-10]"></img>
            <img className="w-auto h-auto mt-6 animate-bounce" src={float} alt="light" />
          </div>
          <div className="text-[15px] tracking-normal leading-6 mt-6 px-6 md:max-w-[754px] md:pl-20 md:pt-10 md:flex flex-col text-center md:justify-center">
            <div className="text-md font-bold mt-6 md:text-[2rem] md:leading-[4rem]">
              How to Join?
            </div>
            <div className="mt-6 md:pl-4">
              <div className=" text-[14px] leading-[24px] md:text-[1.5rem] md:leading-[2rem] pb-3">
                1.Deposit using any of the accepted payment methods.
              </div>
              <div className=" text-[14px] leading-[24px] md:text-[1.5rem] md:leading-[2rem] pb-3">
                2.We convert and send funds to the pool after a series of
                verification checks.
              </div>
              <div className=" text-[14px] leading-[24px] md:text-[1.5rem] md:leading-[2rem] pb-3">
                3.Click the "Keys" button after depositing and send your Solana
                address on the SOL Chain – this will be your identity in the
                pool.
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <div className="font-bold md:text-[2.25rem] md:leading-[4.5rem] md:font-[800]">
            The Future of the Alpha Pool
          </div>
          <div className=" text-sm mt-4 md:text-[28px] md:leading-[48px] md:font-[400]">
            The Alpha Pool is not a traditional staking plan – it is a strategic
            liquidity creation mechanism. Once we reach $100M, we transition
            into a long-term Solana blockchain validator asset with sustainable
            profits.
          </div>
          <div className="text-[#B7B7B7] text-[12px] leading-[20px] mt-[1rem] md:text-[1rem] md:leading-[28px] md:px-44 md:mt-8">
            With this model, TAR GLOBAL secures a permanent position in the
            Solana blockchain while providing investors with a reliable income
            stream.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Light;
