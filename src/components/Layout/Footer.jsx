import { useCart } from '../../context/CartContext';

const Footer = () => {
  const { totalItems, toggleModal } = useCart();

  return (
    <footer className="p-5 bg-[#b8cea9] border-t-2 border-[#a1b694] flex flex-col md:flex-row justify-between items-center relative gap-4">
      <p className="text-[#4a4a4a] text-sm md:order-first md:m-0">©LapaDoCoco 2025</p>
      
      <button 
        onClick={toggleModal}
        className="bg-[#93a885] text-white px-5 py-2.5 rounded-full cursor-pointer transition-all hover:bg-[#788c6e] flex items-center gap-2 text-sm md:text-base"
        aria-label="Ver carrinho"
      >
        <span className="bg-white/20 px-2 py-1 rounded-lg font-bold animate-pulse">
          {totalItems}
        </span>
        itens no carrinho
      </button>
    </footer>
  );
};

export default Footer;