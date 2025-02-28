const Footer = () => {
  return (
    <div className="py-16 flex max-lg:flex-col max-lg:gap-5 border-t-2 border-t-white justify-between items-center">
      <p className="text-center text-3xl flex-grow pr-10">
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
