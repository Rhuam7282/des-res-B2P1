import { useCart } from '../../context/CartContext';

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <section 
      className="w-[30%] min-w-[300px] m-2.5 p-4 bg-white/20 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center
                 md:w-[45%] md:min-w-[250px] sm:w-full sm:min-w-[200px] sm:mx-0"
      data-category={item.categoria}
    >
      <img 
        src={item.imagem} 
        alt={item.nome} 
        className="w-[70%] h-auto rounded-full border-4 border-[#93a885] mb-4 mx-auto"
        loading="lazy" 
      />
      <h3 className="text-lg font-semibold">{item.nome}</h3>
      <p className="text-[#4a4a4a] text-sm uppercase tracking-wide my-2.5">
        {item.categoria}
      </p>
      <p className="text-gray-600 mb-3">{item.descricao}</p>
      <p className="font-bold mb-4">{item.preco}</p>

      <button 
        onClick={() => addToCart(item)}
        className="bg-[#93a885] text-white px-4 py-2 rounded cursor-pointer transition-colors hover:bg-[#788c6e]"
        aria-label={`Adicionar ${item.nome} ao carrinho`}
      >
        Adicionar ao Carrinho
      </button>
    </section>
  );
};

export default ProductCard;