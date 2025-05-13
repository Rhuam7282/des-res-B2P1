import logo from '../../assets/images/logo.jpg';

const Header = () => {
  return (
    <header className="py-5 pb-10 text-center bg-[#b8cea9] md:py-4 md:pb-6">
      <h1 className="text-3xl text-[#333] mb-5 md:text-2xl sm:text-xl">Lapa do Coco</h1>
      <img 
        src={logo} 
        alt="Nossa logo, um coco que se parece com um macaco sentado" 
        className="h-24 rounded-full border-[3px] border-[#93a885] md:h-20 sm:h-16"
      />
    </header>
  );
};

export default Header;