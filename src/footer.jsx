const Footer = () => {
  return (
    <div className="pl-[50px] pr-[157px] w-full flex max-lg:flex-col max-lg:gap-5 border-t-2 border-t-gray-600 justify-between items-center">
      <img src="assets/mark.png" alt="mark"></img>
      <p className="font-[400] text-[26px] leading-[45px] flex-grow text-center">
        For more details or to get started, reach out to us
      </p>
      <div className="flex flex-row gap-4 justify-center items-start">
        <img
          src="assets/Telegram.png"
          alt="vetor"
          className="h-[32px] w-auto hover:cursor-pointer"
        />
        <img
          src="assets/Phone.png"
          alt="vetor"
          className="h-[32px] w-auto hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
