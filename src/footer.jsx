const Footer = () => {
  return (
    <div className="py-[85px] w-full flex max-lg:flex-col max-lg:gap-5 border-t-2 border-t-gray-600 justify-between items-center">
      <p className="font-[400] text-[26px] leading-[45px] flex-grow pr-10 text-center">
        For more details or to get started, reach out to us
      </p>
      <div className="flex flex-row gap-4 justify-center items-start">
        <img
          src="assets/Vector.png"
          alt="vetor"
          className="h-[32px] w-auto hover:cursor-pointer"
        />
        <img
          src="assets/instagram.png"
          alt="instagram"
          className="hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
