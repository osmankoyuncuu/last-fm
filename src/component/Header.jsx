const Header = ({ header }) => {
  return (
    <div className="w-48 h-10 bg-slate-400 flex justify-center items-center rounded-md">
      <h2 className="text-white text-center">{header}</h2>
    </div>
  );
};

export default Header;
