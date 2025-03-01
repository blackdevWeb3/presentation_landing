import telegram from "../public/assets/telegram.png";
import phone from "../public/assets/Phone.png"
import logo from "../public/assets/mark.png"

const Footer = () => {
  return (
    <div className=" relative py-[85px] px-[50px] w-full flex max-lg:flex-col max-lg:gap-5 border-t-2 border-t-gray-600 justify-between items-center">
      <img src={logo} className="absolute"></img>
      <p className="font-[400] text-[26px] leading-[45px] flex-grow pr-10 text-center">
        For more details or to get started, reach out to us
      </p>
      <div className="flex flex-row gap-4 justify-center items-start">
        <img src={telegram} alt="telegram"></img>
        <img src={phone} alt="phone"></img>
      </div>
    </div>
  );
};

export default Footer;
