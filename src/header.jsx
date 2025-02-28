const Header = () => {
  return (
    <div className="pb-[28px] pl-[200px] max-2xl:pl-[10px] pr-[450px] max-2xl:pr-[5px] w-full overflow-hidden flex flex-row items-center justify-between">
      <img src="assets/mark.png" alt="mark.png" className="max-lg:w-[90px]" />
      <div>
        <ul className="pr-10 list-none flex flex-row gap-10 max-lg:gap-4 max-lg:text-[12px]  font-[600] text-[18px]">
          <li className="hover:opacity-55 hover:cursor-pointer">Home</li>
          <li className="hover:opacity-55 hover:cursor-pointer">Grow</li>
          <li className="hover:opacity-55 hover:cursor-pointer">Markets</li>
          <li className="hover:opacity-55 hover:cursor-pointer">Business</li>
          <li className="hover:opacity-55 hover:cursor-pointer">Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
