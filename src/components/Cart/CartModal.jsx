import { useCart } from '../../context/CartContext';

const CartModal = () => {
  const { cart, isModalOpen, toggleModal, removeFromCart, totalItems } = useCart();

  return (
    <div 
      className={`fixed inset-0 bg-black/50 z-50 flex ${isModalOpen ? 'flex' : 'hidden'}`}
      aria-hidden={!isModalOpen}
    >
      <div className="bg-[#b8cea9] p-5 rounded-xl max-w-[500px] w-11/12 max-h-[80vh] overflow-y-auto relative">
        <button 
          onClick={toggleModal}
          className="absolute top-2.5 right-2.5 text-2xl bg-transparent border-none cursor-pointer"
          aria-label="Fechar carrinho"
        >
          &times;
        </button>
        
        <h2 className="text-2xl text-center mb-4">Seu Carrinho</h2>
        
        <div className="my-5">
          {cart.length === 0 ? (
            <p className="text-center py-5">Seu carrinho está vazio</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-2.5 border-b border-[#a1b694]">
                <div>
                  <span>{item.nome} {item.quantity} | </span>
                  <span>
                    {item.preco.replace('banana', '').replace('s', '')} x {item.quantity}
                  </span>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  className="bg-[#ff6b6b] text-white px-2.5 py-1 rounded cursor-pointer hover:bg-[#ff5252]"
                  aria-label={`Remover ${item.nome} do carrinho`}
                >
                  Remover
                </button>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="text-center font-bold">
            <strong>Total: {totalItems} itens</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;