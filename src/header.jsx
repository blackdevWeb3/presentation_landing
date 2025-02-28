const Header = () => {
  return (
    <div className="flex flex-row items-center gap-120 justify-start">
      <img src="assets/mark.png" alt="mark.png" className="pl-32" />
      <div>
        <ul className="list-none flex flex-row gap-10 font-bold text-3xl">
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
